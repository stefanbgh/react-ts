import { ReactNode } from 'react'
import ProfileSidebar from '../ProfileSidebar/ProfileSidebar'
import { ProfileInfo } from '../../../pages'

interface IProps {
    children?: ReactNode;
}

const ProfileBody = ({ children }: IProps) => {
    return (
        <div className="flex w-full gap-6">
            <ProfileSidebar/>
            <div className="w-5/6">
                {children ? children : <ProfileInfo/>}
            </div>
        </div>
    )
}

export default ProfileBody