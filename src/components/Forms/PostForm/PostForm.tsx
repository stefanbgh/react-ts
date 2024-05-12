import { FC, useRef, FormEvent, useState, useEffect, useContext, Context } from 'react'

import { PostFormTitle, PostFormTextArea, PostFormButton, Spinner } from "../../../components"
import { useAddSinglePostMutation } from '../../../features/API/postsAPI';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../../firebase/config';
import { IGetUser } from '../../../ts/interfaces/IUser/IGetUser';
import { toast } from 'react-toastify';
import { withoutWhiteSpace } from '../../../utils/helpers/regexValidationSchema';
import DarkThemeContext from '../../../context/ThemeContext';
import { IDarkThemeContext } from '../../../ts/interfaces/IDarkThemeContext/IDarkThemeContext';

const PostForm: FC = (): JSX.Element => {
	const userId = localStorage.getItem("userId") as string;

    const { darkTheme } = useContext(DarkThemeContext as Context<IDarkThemeContext>);
    const theme = darkTheme ? "dark" : "light";

    const [ username, setUsername ] = useState<string>();
    const [ loading, setLoading ] = useState<boolean>(false);

    const postRef = useRef<HTMLTextAreaElement>(null);
    const [ addSinglePost ] = useAddSinglePostMutation();

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

    const handleAddPost = async (e: FormEvent<HTMLFormElement>) => { 
		e.preventDefault();

        const post = postRef.current!.value;
        const timestamp = new Date().getTime();

        if (withoutWhiteSpace.test(post)) {
            if (post.length > 120) {
                toast.error("Post must be less than 30 characters", { theme });
                postRef.current!.value = "";

                return;
            }
            
            setLoading(true);

            const result = await addSinglePost({ 
                content: post, 
                likes: [], 
                timestamp, 
                userId: userId as string, 
                username: username as string 
            }).unwrap();

            if (result) {
                toast.success("You have successfully added your post", { theme });
                postRef.current!.value = "";
            }

            setLoading(false);
            return;
        }

        toast.error("Post cannot be empty", { theme });
        postRef.current!.value = "";
    };

    return (
		<>
			<form 
				className="w-full p-6 border border-gray-400"
				onSubmit={handleAddPost}
			>
				<PostFormTitle/>
				<PostFormTextArea
					textAreaRef={postRef}
				/>
				<PostFormButton/>
			</form>
			{ loading && <Spinner/> }
		</>
    )
}

export default PostForm