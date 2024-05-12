import { Context, FC, MouseEventHandler, useContext } from 'react'

import { BlogReactionsLikes, BlogReactionsComments, BlogReactionsReplies } from "../../../components"
import { Blog } from '../../../ts/types/Blog/Blog';
import DarkThemeContext from '../../../context/ThemeContext';
import { IDarkThemeContext } from '../../../ts/interfaces/IDarkThemeContext/IDarkThemeContext';

interface IProps {
    blogType: Blog;
    likes: string[];
    comments?: number;
    replies?: number;
    handleChangeVisible?: MouseEventHandler<SVGAElement>;
    isVisible?: boolean;
    postId?: number;
    commentId?: number;
    replyId?: number;
}

const BlogReactions: FC<IProps> = ({ blogType, likes, comments, replies, handleChangeVisible, isVisible, postId, commentId, replyId }): JSX.Element => {
    const { darkTheme } = useContext(DarkThemeContext as Context<IDarkThemeContext>);

    return (
        <div className={`${blogType}__section-reactions`}>
            <BlogReactionsLikes
                postId={postId as number}
                commentId={commentId}
                replyId={replyId}
                likes={likes}
                blogType={blogType}
                darkTheme={darkTheme}
            />
            {
                blogType === "post" && (
                    <BlogReactionsComments
                        comments={comments as number}
                        handleChangeVisible={handleChangeVisible!}
                        isVisible={isVisible!}
                        blogType={blogType}
                        darkTheme={darkTheme}
                    />
                ) 
            }
            {
                blogType === "comment" && (
                    <BlogReactionsReplies
                        replies={replies as number}
                        handleChangeVisible={handleChangeVisible!}
                        isVisible={isVisible!}
                        blogType={blogType}
                        darkTheme={darkTheme}
                    />
                )
            }
        </div>
    )
}

export default BlogReactions