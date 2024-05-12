import { FC} from 'react'

import { IReply } from '../../../ts/interfaces/IBlog/IReply/IReply';
import { AddReply, Reply } from "../../../components"
import { RootState } from '../../../ts/types/RootState';
import { useAppSelector } from '../../../hooks/useAppSelector';

interface IProps {
    visibleReplies: IReply[];
    postId: number;
    commentId: number;
}

const VisibleReplies: FC<IProps> = ({ visibleReplies, postId, commentId }): JSX.Element => {
    const { repliesIsVisible } = useAppSelector((state: RootState) => state.replies);

    return (
        <>
            {
                visibleReplies.map((reply: IReply) => {
                    const { replyId, commentId, content, timestamp, username, likes, userId } = reply;
                    
                    return (
                        <Reply
                            key={replyId}
                            postId={postId}
                            commentId={commentId}
                            replyId={replyId}
                            content={content}
                            timestamp={timestamp}
                            username={username}
                            likes={likes}
                            userId={userId}
                        />
                    )
                })
            }
            {
                repliesIsVisible && <AddReply postId={postId} commentId={commentId}/>
            }
        </>
    )
}

export default VisibleReplies