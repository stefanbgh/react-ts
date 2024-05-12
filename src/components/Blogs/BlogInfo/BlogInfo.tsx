import { FC} from 'react'
import { timeAgo } from '../../../utils/helpers/timeAgo';
import { Blog } from '../../../ts/types/Blog/Blog';

interface IProps {
    blogType: Blog;
    username: string;
    timestamp: number;
}

const BlogInfo: FC<IProps> = ({ blogType, username, timestamp }): JSX.Element => {
    const calcTimeAgo = timeAgo(timestamp);

    return (
        <div className={`${blogType}__section-info`}>
            <p>@{username}</p>
            <p>{calcTimeAgo}</p>
        </div>
    )
}

export default BlogInfo