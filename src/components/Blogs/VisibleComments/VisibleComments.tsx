import { FC} from 'react'

import { AddComment, SingleComment } from "../../../components"
import { IComment } from '../../../ts/interfaces/IBlog/IComment/IComment';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { RootState } from '../../../ts/types/RootState';

interface IProps {
    visibleComments: IComment[];
    postId: number;
}

const VisibleComments: FC<IProps> = ({ visibleComments, postId }): JSX.Element => {
    const { commentsIsVisible } = useAppSelector((state: RootState) => state.comments);

    return (
        <>
            {
                visibleComments.map((comment: IComment) => {
                    const { commentId, content, timestamp, username, postId, likes, userId } = comment;
                    
                    return (
                        <SingleComment
                            key={commentId}
                            postId={postId}
                            commentId={commentId}
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
                commentsIsVisible && <AddComment postId={postId}/>
            }
        </>
    )
}

export default VisibleComments