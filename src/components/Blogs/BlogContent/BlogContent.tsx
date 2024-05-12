import { FC} from 'react'

import { Blog } from '../../../ts/types/Blog/Blog';

interface IProps {
    content: string;
    blogType: Blog;
}

const BlogContent: FC<IProps> = ({ content, blogType }): JSX.Element => {
    return (
        <div className={`${blogType}__section-content`}>
            <p>{content}</p>
        </div>
    )
}

export default BlogContent