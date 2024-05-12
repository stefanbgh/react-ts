import { FC} from 'react'

import { BlogContent, BlogDelete, BlogInfo, BlogPicture, BlogReactions } from "../../../components"

import "./Reply.scss"

interface IProps {
    postId: number;
    commentId: number;
    replyId: number;
    username: string;
    timestamp: number;
    content: string;
    likes: string[];
    userId: string;
}

const Reply: FC<IProps> = ({ postId, commentId, replyId, username, timestamp, content, likes, userId }): JSX.Element => {
    const getUserId = localStorage.getItem("userId") as string;

    return (
        <div className='flex'>
            <div className='w-1/12'></div>
            <div className='w-11/12 flex'>
            <div className='w-1/12'></div>
                <div className='reply'>
                    <BlogPicture blogType='reply'/>
                    <section className='reply__section'>
                        <BlogInfo
                             username={username} 
                             timestamp={timestamp}
                             blogType='reply'
                        />
                        <BlogContent 
                            content={content}
                            blogType='reply'
                        />
                        <div className='post__section-reactions-container'>
                            <BlogReactions 
                                postId={postId}
                                commentId={commentId}
                                replyId={replyId}
                                likes={likes} 
                                blogType='reply'
                            />
                            {
                                getUserId === userId && <BlogDelete postId={postId} commentId={commentId} replyId={replyId}/>
                            }
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Reply