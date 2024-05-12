import { FC} from 'react'
import { Blog } from '../../../ts/types/Blog/Blog'

interface IProps {
    blogType: Blog;
}

const BlogPicture: FC<IProps> = ({ blogType }): JSX.Element => {
    return (
        <div className={`${blogType}__picture`}></div>
    )
}

export default BlogPicture