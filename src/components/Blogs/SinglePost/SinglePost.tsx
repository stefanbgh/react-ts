import { FC, useState } from 'react'

import { useGetAllCommentsQuery } from '../../../features/API/commentsAPI';
import { BlogInfo, BlogPicture, BlogReactions, BlogContent, Comments, BlogDelete } from '../../../components';
import { useAppDispatch } from '../../../hooks/useAppDispatch';

import { REPLIES_IS_VISIBLE } from '../../../features/slices/repliesSlice';
import { COMMENTS_IS_VISIBLE } from '../../../features/slices/commentsSlice';

import "./SinglePost.scss";

interface IProps {
    postId: number;
    username: string;
    timestamp: number;
    content: string;
    likes: string[];
    userId: string;
}

const SinglePost: FC<IProps> = ({ postId, username, timestamp, content, likes, userId }): JSX.Element => {
    const getUserId = localStorage.getItem("userId") as string;
    const { data: comments } = useGetAllCommentsQuery(postId);

    const [ isVisible, setIsVisible ] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    const handleChangeVisibleComments = () => {
        setIsVisible((iv) => !iv);

        dispatch(REPLIES_IS_VISIBLE(false));
        dispatch(COMMENTS_IS_VISIBLE(true));
    };

    return (
        <>
            <div className='post'>
                <BlogPicture blogType='post'/>
                <section className='post__section'>
                    <BlogInfo 
                        username={username} 
                        timestamp={timestamp}
                        blogType='post'
                    />
                    <BlogContent 
                        content={content}
                        blogType='post'
                    />
                    <div className='post__section-reactions-container'>
                        <BlogReactions 
                            postId={postId}
                            likes={likes} 
                            comments={comments?.length as number}
                            handleChangeVisible={handleChangeVisibleComments}
                            isVisible={isVisible}
                            blogType='post'
                        />
                        {
                            getUserId === userId && <BlogDelete postId={postId}/>
                        }
                    </div>
                </section>
            </div>
            {
                isVisible ?
                    comments 
                        ? <Comments comments={comments} postId={postId}/>
                        : null 
                    : null
            }
        </>
    )
}

export default SinglePost