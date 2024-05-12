import { FC, useEffect, useRef, useState, useContext, Context } from 'react'

import { withoutWhiteSpace } from '../../../utils/helpers/regexValidationSchema';
import { toast } from 'react-toastify';
import { useAddSingleCommentMutation } from '../../../features/API/commentsAPI';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../../firebase/config';
import { IGetUser } from '../../../ts/interfaces/IUser/IGetUser';
import { Spinner } from "../../../components"
import DarkThemeContext from '../../../context/ThemeContext';
import { IDarkThemeContext } from '../../../ts/interfaces/IDarkThemeContext/IDarkThemeContext';

interface IProps {
    postId: number;
}

const AddComment: FC<IProps> = ({ postId }): JSX.Element => {
    const userId = localStorage.getItem("userId") as string;

    const { darkTheme } = useContext(DarkThemeContext as Context<IDarkThemeContext>);
    const theme = darkTheme ? "dark" : "light";

    const [ username, setUsername ] = useState<string>();
    const [ loading, setLoading ] = useState<boolean>(false);

    const commentRef = useRef<HTMLInputElement>(null);
    const [ addSingleComment ] = useAddSingleCommentMutation();

    useEffect(() => {
        if (userId) {
            const snapshot = onSnapshot(doc(db, "users", userId), (snapshot) => {
                const { username } = snapshot.data() as IGetUser;
                setUsername(username);

            }, (error) => {
                toast.error(error.message, { theme });
            });

            return () => {
                snapshot();
            };
        };

        // eslint-disable-next-line
    }, [userId]);

    const handleAddComment = async (pId: number) => { 
        const comment = commentRef.current!.value;
        const timestamp = new Date().getTime();

        if (withoutWhiteSpace.test(comment)) {
            if (comment.length > 120) {
                toast.error("Comment must be less than 30 characters", { theme });
                commentRef.current!.value = "";

                return;
            }
            
            setLoading(true);

            const result = await addSingleComment({ 
                postId: pId, 
                content: comment, 
                likes: [], 
                timestamp, 
                userId: userId as string, 
                username: username as string 
            }).unwrap();

            if (result) {
                toast.success("You have successfully added your comment", { theme });
                commentRef.current!.value = "";
            }

            setLoading(false);
            return;
        }

        toast.error("Comment cannot be empty", { theme });
        commentRef.current!.value = "";
    };

    return (
        <>
            <div className='w-full flex'>
                <div className='w-1/12'></div>
                <div className='flex w-11/12'>
                    <div className='w-1/12'></div>
                    <div className='w-11/12 border border-gray-400'>
                        <input 
                            ref={commentRef}
                            className='w-10/12 p-2 bg-transparent outline-none' 
                            type="text" 
                            placeholder='Enter your comment...' 

                        />
                        <button 
                            className={`
                                ${ darkTheme ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-400 hover:bg-blue-500" }
                                w-2/12  transition-all h-full text-gray-100
                            `}
                            onClick={() => handleAddComment(postId)}
                        >
                            Add comment
                        </button>
                    </div>
                </div>
            </div>
            { loading && <Spinner/> }
        </>
    ) 
}

export default AddComment