import { FC, useEffect, useState } from 'react'

import { AiFillHeart } from 'react-icons/ai'
import { Blog } from '../../../../ts/types/Blog/Blog';
import { useUpdateLikeOnPostMutation } from '../../../../features/API/postsAPI';
import { useUpdateLikeOnCommentMutation } from '../../../../features/API/commentsAPI';
import { useUpdateLikeOnReplyMutation } from '../../../../features/API/repliesAPI';

import { Spinner } from '../../../../components';
import { checkLikeStyle } from '../../../../utils/checkLikeSyle';

interface IProps {
    likes: string[];
    blogType: Blog;
    darkTheme: boolean;
    postId: number;
    commentId?: number;
    replyId?: number;
}

const BlogReactionsLikes: FC<IProps> = ({ postId, commentId, replyId, likes, blogType, darkTheme }): JSX.Element => {
    const userId = localStorage.getItem("userId") as string;

    const [ isLiked, setIsLiked ] = useState<boolean>(false);
    const [ loading, setLoading ] = useState<boolean>(false);

    const likeStroke = checkLikeStyle(isLiked, darkTheme, "stroke");
    const likeColor = checkLikeStyle(isLiked, darkTheme, "color");

    const [ updateLikeOnPost ] = useUpdateLikeOnPostMutation();
    const [ updateLikeOnComment ] = useUpdateLikeOnCommentMutation();
    const [ updateLikeOnReply ] = useUpdateLikeOnReplyMutation();

    useEffect(() => {
        setLoading(false);

        const findMyLike: string | undefined = likes.find((like: string) => like === userId);

        if (findMyLike) {
            setIsLiked(true);
            return;
        }

        setIsLiked(false);

    }, [userId, likes]);

    const handleLike = async (postId: number, likes: string[] | [], commentId?: number, replyId?: number) => { 
        const findMyLike: string | undefined = likes.find((like: string) => like === userId);
        const withoutMyLike: string[] | [] = likes.filter((like: string) => like !== userId);

        setLoading(true);

        if (commentId && replyId) {
            if (findMyLike) {
                updateLikeOnReply({ postId, commentId, replyId, likes: withoutMyLike });
                return;
            }

            updateLikeOnReply({ postId, commentId, replyId, likes: [...likes, userId] })
            return;
        }

        if (commentId) {
            if (findMyLike) {
                updateLikeOnComment({ postId, commentId, likes: withoutMyLike });
                return;
            }

            updateLikeOnComment({ postId, commentId, likes: [...likes, userId] })
            return;
        }

        if (findMyLike) {
            updateLikeOnPost({ postId, likes: withoutMyLike });
            return;
        }

        updateLikeOnPost({ postId, likes: [...likes, userId] });
    };

    return (
        <>
        <div className={`${blogType}__section-reactions-likes`}>
            <AiFillHeart
                onClick={() => handleLike(postId, likes, commentId, replyId)}
                className={`${blogType}__section-reactions-likes-icon`}
                size={20} 
                strokeWidth={20} 
                stroke={likeStroke}
                color={likeColor}/>
            <p>{likes.length}</p>   
        </div>
        { loading && <Spinner/> }
        </>
    )
}

export default BlogReactionsLikes