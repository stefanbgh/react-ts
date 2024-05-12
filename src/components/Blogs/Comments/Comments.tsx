import { FC, useState } from 'react'

import { IComment } from '../../../ts/interfaces/IBlog/IComment/IComment'

import { Spinner, VisibleComments, VisibleLoadMore } from "../../../components"

interface IProps {
   comments: IComment[];
   postId: number;
}

const Comments: FC<IProps> = ({ comments, postId }): JSX.Element => {
    const [ visibleCommentsCount, setVisibleCommentsCount ] = useState<number>(5);
    const [ loading, setLoading ] = useState<boolean>(false);

    const visibleComments = comments?.slice(0, visibleCommentsCount);

    const handleLoadMore = () => {
        setLoading(true);

        setTimeout(() => {
            setVisibleCommentsCount(vcc => vcc + 5);
            setLoading(false);
        }, 500)
    };

    return (
        <>
            <VisibleComments
                visibleComments={visibleComments}
                postId={postId}
            />
            <VisibleLoadMore
                blogs={comments}
                visibleCount={visibleCommentsCount}
                handleLoadMore={handleLoadMore}
                buttonType='three-dots'
            />
            { loading && <Spinner/> }
         </>
    )
}

export default Comments