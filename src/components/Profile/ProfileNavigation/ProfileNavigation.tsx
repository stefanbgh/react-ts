

import { profileData } from '../profileData';
import { NavLink } from 'react-router-dom';
import { LogoutButton } from "../../../components"

interface IProps {
    profileType: string;
}

const ProfileNavigation: React.FC<IProps> = ({ profileType }): JSX.Element => {
    return (
        <ul>
            {
                profileData.map((data) => {
                    const { id, route, text, icon } = data;

                    return (
                        <li key={id}>
                            <NavLink
                                to={route}
                                end
                            >
                                {({ isActive }) => (
                                    <div className={`
                                        ${isActive && `profile__${profileType}-navigation-active`}
                                        profile__${profileType}-navigation
                                    `}>
                                        <div>{icon}</div>
                                        <p>{text}</p>
                                    </div>
                                )}
                            </NavLink>
                        </li>
                    )
                })
            }
            <li><LogoutButton profileType={profileType}/></li>
        </ul>
    )
}

export default ProfileNavigation