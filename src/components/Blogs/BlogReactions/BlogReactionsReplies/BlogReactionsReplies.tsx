import { FC, MouseEventHandler } from 'react'

import { BsFillReplyFill } from 'react-icons/bs';
import { Blog } from '../../../../ts/types/Blog/Blog';

interface IProps {
    handleChangeVisible: MouseEventHandler<SVGAElement>;
    isVisible: boolean;
    replies: number;
    blogType: Blog;
    darkTheme: boolean;
}

const BlogReactionsReplies: FC<IProps> = ({ handleChangeVisible, isVisible, replies, blogType, darkTheme }): JSX.Element => {
    const replyIconColor =  isVisible 
                                ? darkTheme 
                                    ? "#2563eb"
                                    : "#60a5fa"
                                : "#c7cad1";
    
    return (
        <div className={`${blogType}__section-reactions-comments`}>
            <BsFillReplyFill 
                className={`${blogType}__section-reactions-comments-icon`}
                onClick={handleChangeVisible}
                size={20} 
                color={replyIconColor}/>
            <p>{replies}</p>   
        </div>
    )
}

export default BlogReactionsReplies