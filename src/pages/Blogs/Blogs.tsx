

import { Banner, PostForm, Posts } from '../../components'
import Container from '../../containers/Container/Container'

const Blogs = () => {
    return (
        <div>
            <Banner
                title='Blogs'
            />
            <Container>
                <div className='py-6'>
                    <PostForm/>
                    <Posts/>
                </div>
            </Container>
        </div>
    )
}

export default Blogs