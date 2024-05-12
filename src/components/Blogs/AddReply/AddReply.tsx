import { FC, useState, useEffect, useRef, useContext, Context } from 'react'

import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../../firebase/config';
import { IGetUser } from '../../../ts/interfaces/IUser/IGetUser';
import { toast } from 'react-toastify';
import { withoutWhiteSpace } from '../../../utils/helpers/regexValidationSchema';
import { useAddReplyMutation } from '../../../features/API/repliesAPI';
import { Spinner } from "../../../components";
import DarkThemeContext from '../../../context/ThemeContext';
import { IDarkThemeContext } from '../../../ts/interfaces/IDarkThemeContext/IDarkThemeContext';

interface IProps {
    postId: number;
    commentId: number;
}

const AddReply: FC<IProps> = ({ postId, commentId }): JSX.Element => {
    const userId = localStorage.getItem("userId") as string;

    const { darkTheme } = useContext(DarkThemeContext as Context<IDarkThemeContext>);
    const theme = darkTheme ? "dark" : "light";

    const [ username, setUsername ] = useState<string>();
    const [ loading, setLoading ] = useState<boolean>(false);

    const replyRef = useRef<HTMLInputElement>(null);
    const [ addReply ] = useAddReplyMutation();

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

    const handleAddReply = async (pId: number, cId: number) => { 
        const reply = replyRef.current!.value;
        const timestamp = new Date().getTime();

        if (withoutWhiteSpace.test(reply)) {
            if (reply.length > 120) {
                toast.error("Reply must be less than 30 characters", { theme });
                replyRef.current!.value = "";

                return;
            }

            setLoading(true);

            const result = await addReply({ 
                postId: pId, 
                commentId: cId,
                content: reply, 
                likes: [], 
                timestamp, 
                userId: userId as string, 
                username: username as string 
            }).unwrap();

            if (result) {
                toast.success("You have successfully added your reply", { theme });
                replyRef.current!.value = "";
            }

            setLoading(false);

            return;
        }

        toast.error("Reply cannot be empty", { theme });
        replyRef.current!.value = "";
    };

    return (
        <>
            <div className='w-full flex'>
                <div className='w-1/12'></div>
                <div className='flex w-11/12'>
                    <div className='w-1/12'></div>
                    <div className='flex w-11/12'>
                        <div className='w-1/12'></div>
                        <div className='flex w-11/12 border border-gray-400'>
                            <input 
                                ref={replyRef} 
                                className='w-10/12 p-2 bg-transparent outline-none' 
                                type="text" 
                                placeholder='Enter your reply...' 
                            />
                            <button 
                                className={`
                                    ${ darkTheme ? "bg-green-600 hover:bg-green-700" : "bg-green-400 hover:bg-green-500" }
                                    w-2/12 transition-all h-full text-gray-100
                                `}
                                onClick={() => handleAddReply(postId, commentId)}
                            >
                                Add reply
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            { loading && <Spinner/> }
        </>
    )
}

export default AddReply