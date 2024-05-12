import { ReactNode, FC } from 'react'
import Container from '../../containers/Container/Container'
import { Banner, ProfileBody, ProfileHeader } from '../../components';

import profile from "../../assets/profile.webp";

interface IProps {
    children?: ReactNode
}

const Profile: FC<IProps> = ({ children }): JSX.Element => {
    return (
        <div>
            <Banner
                title="Account Information"
                bgPosition="bg-bottom"
                image={profile}
            />
            <Container>
                <ProfileHeader/>
                <ProfileBody
                    children={children}
                />
            </Container>
        </div>
    )
}

export default Profile