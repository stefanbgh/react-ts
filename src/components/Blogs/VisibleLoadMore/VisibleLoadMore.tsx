import { FC, MouseEventHandler } from 'react'

import { IPost } from '../../../ts/interfaces/IBlog/IPost/IPost';
import { IComment } from '../../../ts/interfaces/IBlog/IComment/IComment';
import { IReply } from '../../../ts/interfaces/IBlog/IReply/IReply';

import { LoadMore } from "../../../components"

interface IProps {
    blogs: IPost[] | IComment[] | IReply[];
    visibleCount: number;
    handleLoadMore: MouseEventHandler<HTMLButtonElement>;
    buttonType: "load-more" | "three-dots";
}

const VisibleLoadMore: FC<IProps> = ({ blogs, visibleCount, handleLoadMore, buttonType }): JSX.Element => {
    return (
        <>
            {
                visibleCount < blogs.length && (
                    <LoadMore buttonType={buttonType} handleLoadMore={handleLoadMore}/>
                )
            }
        </>
    )
}

export default VisibleLoadMore