import { FC, MouseEventHandler } from 'react'

import { BiSolidCommentDetail } from 'react-icons/bi'
import { Blog } from '../../../../ts/types/Blog/Blog';

interface IProps {
    handleChangeVisible: MouseEventHandler<SVGAElement>;
    isVisible: boolean;
    comments: number;
    blogType: Blog;
    darkTheme: boolean;
}

const BlogReactionsComments: FC<IProps> = ({ handleChangeVisible, isVisible, comments, blogType, darkTheme }): JSX.Element => {
    const commentIconColor = isVisible 
                                ? darkTheme 
                                    ? "#2563eb"
                                    : "#60a5fa"
                                : "#c7cad1";
    
    return (
        <div className={`${blogType}__section-reactions-comments`}>
            <BiSolidCommentDetail 
                className={`${blogType}__section-reactions-comments-icon`}
                onClick={handleChangeVisible}
                size={20} 
                color={commentIconColor}/>
            <p>{comments}</p>   
        </div>
    )
}

export default BlogReactionsComments