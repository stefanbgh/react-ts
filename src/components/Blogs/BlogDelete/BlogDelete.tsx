import { FC, useContext, Context, useState } from 'react'

import { RiDeleteBin6Line } from 'react-icons/ri'
import DarkThemeContext from '../../../context/ThemeContext';
import { IDarkThemeContext } from '../../../ts/interfaces/IDarkThemeContext/IDarkThemeContext';

import { Modal } from '@mui/material';
import { ModalBlogDelete, Spinner } from "../../../components"

import { useDeleteSinglePostMutation } from '../../../features/API/postsAPI';
import { useDeleteSingleCommentMutation } from '../../../features/API/commentsAPI';
import { useDeleteReplyMutation } from '../../../features/API/repliesAPI';

import "./BlogDelete.scss";
import { toast } from 'react-toastify';

interface IProps {
    postId: number;
    commentId?: number;
    replyId?: number;
}

const BlogDelete: FC<IProps> = ({ postId, commentId, replyId }): JSX.Element => {
    const { darkTheme } = useContext(DarkThemeContext as Context<IDarkThemeContext>);
    const theme = darkTheme ? "dark" : "light";

    const [ modalIsOpen, setModalIsOpen ] = useState<boolean>(false);
    const [ loading, setLoading ] = useState<boolean>(false);

    const [ deleteSinglePost ] = useDeleteSinglePostMutation();
    const [ deleteSingleComment ] = useDeleteSingleCommentMutation();
    const [ deleteReply ] = useDeleteReplyMutation();
    
    const handleDeleteBlog = async (postId: number, commentId?: number, replyId?: number) => { 
        setModalIsOpen(false);
        setLoading(true);

        if (commentId && replyId) {
            const result = await deleteReply({ postId, commentId, replyId }).unwrap();

            if (result) {
                setLoading(false);
                toast.success("You have successfully deleted your reply", { theme });
                return;
            };
        }

        if (commentId) {
            const result = await deleteSingleComment({ postId, commentId }).unwrap();

            if (result) {
                setLoading(false);
                toast.success("You have successfully deleted your comment", { theme });
                return;
            };
        }

        const result = await deleteSinglePost(postId).unwrap();
        if (result) {
            setLoading(false);
            toast.success("You have successfully deleted your post", { theme });
            return;
        };
    };

    const handleOpenModal = () => setModalIsOpen(true);
    const handleCloseModal = () => setModalIsOpen(false);

    return (
        <>
            <RiDeleteBin6Line 
                onClick={handleOpenModal}
                className={ darkTheme ? "blog__delete-dark" : "blog__delete" }
                size={20}
            />
            <Modal
                open={modalIsOpen}
                onClose={handleCloseModal}
                className={ darkTheme ? "bg-gray-900 bg-opacity-80" : "bg-white bg-opacity-80"}
            >
                <ModalBlogDelete
                    handleCloseModal={handleCloseModal}
                    handleDeleteBlog={handleDeleteBlog}
                    postId={postId}
                    commentId={commentId}
                    replyId={replyId}
                    darkTheme={darkTheme}
                />
            </Modal>
            { loading && <Spinner/> }
        </>
    )
}

export default BlogDelete