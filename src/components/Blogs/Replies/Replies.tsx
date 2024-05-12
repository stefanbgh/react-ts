import { FC, useState } from 'react'

import { IReply } from '../../../ts/interfaces/IBlog/IReply/IReply';
import { Spinner, VisibleLoadMore, VisibleReplies } from "../../../components"

interface IProps {
    replies: IReply[];
    postId: number;
    commentId: number;
}

const Replies: FC<IProps> = ({ postId, replies, commentId }): JSX.Element => {
    const [ visibleRepliesCount, setVisibleRepliesCount ] = useState<number>(5);
    const [ loading, setLoading ] = useState<boolean>(false);

    const visibleReplies = replies?.slice(0, visibleRepliesCount);
    
    const handleLoadMore = () => {
        setLoading(true);

        setTimeout(() => {
            setVisibleRepliesCount(vrc => vrc + 5);
            setLoading(false);
        }, 500);
    };

    return (
        <>
            <VisibleReplies
                visibleReplies={visibleReplies}
                postId={postId}
                commentId={commentId}
            />
            <VisibleLoadMore
                blogs={replies}
                visibleCount={visibleRepliesCount}
                handleLoadMore={handleLoadMore}
                buttonType='three-dots'
            />
            { loading && <Spinner/> }
        </>
    )
}

export default Replies