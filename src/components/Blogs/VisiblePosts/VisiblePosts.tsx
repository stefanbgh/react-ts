import { FC} from 'react'

import { IPost } from '../../../ts/interfaces/IBlog/IPost/IPost';
import { SinglePost } from "../../../components"

interface IProps {
    visiblePosts: IPost[];
}

const VisiblePosts: FC<IProps> = ({ visiblePosts }): JSX.Element => {
    return (
    <>
        {
            visiblePosts.length > 0 ? (
                visiblePosts.map((post: IPost) => {
                    const { username, userId, content, timestamp, postId, likes } = post;

                    return (
                        <SinglePost
                            key={postId}
                            postId={postId}
                            username={username}
                            content={content}
                            timestamp={timestamp}
                            likes={likes}
                            userId={userId}
                        />
                    )
                })
            ) : null
        }
    </>
    )
}

export default VisiblePosts