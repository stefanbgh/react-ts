import { FC, useState } from 'react'

import { useGetAllPostsQuery } from '../../../features/API/postsAPI'
import { useAppSelector } from '../../../hooks/useAppSelector';
import { RootState } from '../../../ts/types/RootState';

import { Spinner, VisibleLoadMore, VisiblePosts } from "../../../components"

const Posts: FC = (): JSX.Element => {
    useGetAllPostsQuery();
    const { posts } = useAppSelector((state: RootState) => state.posts);

    const [ visiblePostsCount, setVisiblePostsCount ] = useState<number>(5);
    const [ loading, setLoading ] = useState<boolean>(false);

    const visiblePosts = posts.slice(0, visiblePostsCount);
    
    const handleLoadMore = () => {
        setLoading(true);

        setTimeout(() => {
            setVisiblePostsCount(vpc => vpc + 5);
            setLoading(false);
        }, 500);
    }

    return (
        <>
            {
                posts.length > 0 ? (
                    <>
                        <VisiblePosts 
                            visiblePosts={visiblePosts}
                        />
                        <VisibleLoadMore
                            blogs={posts}
                            visibleCount={visiblePostsCount}
                            handleLoadMore={handleLoadMore}
                            buttonType='load-more'
                        />
                        { loading && <Spinner/> }
                    </>
                ) : <Spinner/>
            }
        </>
    )
}

export default Posts