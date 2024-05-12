import { FC, MouseEventHandler } from 'react'

import { RiDeleteBin6Line } from 'react-icons/ri';
import './ModalBlogDelete.scss';

interface IProps {
    handleCloseModal: MouseEventHandler<HTMLButtonElement>;
    handleDeleteBlog: (pId: number, cId?: number, rId?: number) => void;
    darkTheme: boolean;
    postId: number;
    commentId?: number;
    replyId?: number;
}

const ModalBlogDelete: FC<IProps> = ({ handleCloseModal, handleDeleteBlog, postId, darkTheme, commentId, replyId }): JSX.Element => {
    const modalBackground = darkTheme ? "modal__blog-delete-dark" : "modal__blog-delete";
    const modalQuestionIcon = darkTheme ? "modal__blog-delete-question-icon-dark" : "modal__blog-delete-question-icon";
    const modalCloseButton = darkTheme ? "modal__blog-delete-buttons-close-dark" : "modal__blog-delete-buttons-close";
    const modalYesButton = darkTheme ? "modal__blog-delete-buttons-yes-dark" : "modal__blog-delete-buttons-yes" ;

    return (
        <>
            <div className={modalBackground}
            >
                <div className='modal__blog-delete-question'>
                    <RiDeleteBin6Line 
                        size={50} 
                        className={modalQuestionIcon}
                    />
                    <h2 className='modal__blog-delete-question-content'>
                        Are you sure you want to delete this blog?
                    </h2>
                 </div>
                <div className='modal__blog-delete-buttons'>
                    <button 
                        className={modalCloseButton}
                        onClick={handleCloseModal}
                    >
                        Close
                    </button>
                    <button 
                        className={modalYesButton}
                        onClick={() => handleDeleteBlog(postId, commentId, replyId)}
                    >
                        Yes, I'm sure
                    </button>
                </div>
            </div>
        </>
    )
}

export default ModalBlogDelete