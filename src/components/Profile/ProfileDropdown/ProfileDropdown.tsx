import { FC, MouseEventHandler, useContext, Context } from "react";

import { NavbarProfilePicture, ProfileNavigation } from "../../../components"
import DarkThemeContext from "../../../context/ThemeContext";
import { IDarkThemeContext } from "../../../ts/interfaces/IDarkThemeContext/IDarkThemeContext";

import "./ProfileDropdown.scss";

interface IProps {
    profileDropdown: boolean;
    handleHideProfileDropdown: MouseEventHandler<HTMLDivElement>;
    handleDisplayProfileDropdown: MouseEventHandler<HTMLDivElement>;
}

const ProfileDropdown: FC<IProps> = ({ profileDropdown, handleHideProfileDropdown, handleDisplayProfileDropdown }): JSX.Element => {
	const { darkTheme } = useContext(DarkThemeContext as Context<IDarkThemeContext>);
    
    return (
        <>
		    <NavbarProfilePicture
                handleDisplayProfileDropdown={handleDisplayProfileDropdown}
            />
            <div 
                onMouseLeave={handleHideProfileDropdown}
                className={`
                    ${profileDropdown ? "" : "hidden"} 
                    ${ darkTheme ? "profile__dropdown-dark" : "profile__dropdown" }
                `}
            >
                <div 
                    className={
                        darkTheme 
                        ? "profile__dropdown-dark-tooltip"
                        : "profile__dropdown-tooltip"
                    }
                >
                </div>
                <ProfileNavigation profileType={ darkTheme ? "dropdown-dark" : "dropdown"}/>
            </div>
        </>
	);
};

export default ProfileDropdown;
