import { FC, useState } from 'react'

import { useGetAllRepliesQuery } from '../../../features/API/repliesAPI';
import { BlogContent, BlogDelete, BlogInfo, BlogPicture, BlogReactions, Replies } from "../../../components"

import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { REPLIES_IS_VISIBLE } from '../../../features/slices/repliesSlice';
import { COMMENTS_IS_VISIBLE } from '../../../features/slices/commentsSlice';

import "./SingleComment.scss";

interface IProps {
    postId: number;
    commentId: number;
    username: string;
    timestamp: number;
    content: string;
    likes: string[];
    userId: string;
}

const SingleComment: FC<IProps> = ({ postId, commentId, username, timestamp, content, likes, userId }): JSX.Element => {
    const getUserId = localStorage.getItem("userId") as string;

    const { data: replies } = useGetAllRepliesQuery({ postId, commentId });

    const [ isVisible, setIsVisible ] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    const handleChangeVisibleReplies = () => {
        setIsVisible((iv) => {
            const repliesIsVisible = !iv;

            if (repliesIsVisible) {
                dispatch(REPLIES_IS_VISIBLE(true));
                dispatch(COMMENTS_IS_VISIBLE(false));
                return repliesIsVisible;
            }

            dispatch(REPLIES_IS_VISIBLE(false));
            dispatch(COMMENTS_IS_VISIBLE(true));
            return repliesIsVisible;
        });
    };

    return (
        <>
            <div className='indented-div'>
                <div className='indented-div-single'></div>
                <div className='comment'>
                    <BlogPicture blogType='comment'/>
                    <section className='comment__section'>
                        <BlogInfo 
                            username={username} 
                            timestamp={timestamp}
                            blogType='comment'
                        />
                        <BlogContent 
                            content={content}
                            blogType='comment'
                        />
                        <div className='post__section-reactions-container'>
                            <BlogReactions 
                                postId={postId}
                                commentId={commentId}
                                likes={likes} 
                                replies={replies?.length as number}
                                handleChangeVisible={handleChangeVisibleReplies}
                                isVisible={isVisible}
                                blogType='comment'
                            />
                            {
                                getUserId === userId && <BlogDelete postId={postId} commentId={commentId}/>
                            }
                        </div>
                    </section>
                </div>
            </div>
            {
                isVisible ?
                    replies 
                        ? <Replies replies={replies} postId={postId} commentId={commentId}/>
                        : null 
                    : null
            }
        </>
    ) 
}

export default SingleComment