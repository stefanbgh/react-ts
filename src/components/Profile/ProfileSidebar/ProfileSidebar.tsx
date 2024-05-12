import { FC, useContext, Context } from 'react'

import { ProfileNavigation } from "../../../components"
import DarkThemeContext from '../../../context/ThemeContext';
import { IDarkThemeContext } from '../../../ts/interfaces/IDarkThemeContext/IDarkThemeContext';

import "./ProfileSidebar.scss";

const ProfileSidebar: FC = (): JSX.Element => {
    const { darkTheme } = useContext(DarkThemeContext as Context<IDarkThemeContext>);

    return (
        <div className={ darkTheme ? "profile__sidebar-dark" : "profile__sidebar"}>
            <ProfileNavigation profileType={ darkTheme ? "sidebar-dark" : "sidebar"}/>
        </div>
    )
}

export default ProfileSidebar