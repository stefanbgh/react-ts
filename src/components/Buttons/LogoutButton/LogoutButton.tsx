import { FC, useContext, Context } from 'react'

import { useNavigate } from 'react-router-dom';
import { Routes } from '../../../router/Routes';
import { toast } from 'react-toastify';
import { IoLogOutOutline } from 'react-icons/io5';
import DarkThemeContext from '../../../context/ThemeContext';
import { IDarkThemeContext } from '../../../ts/interfaces/IDarkThemeContext/IDarkThemeContext';

interface IProps {
    profileType: string;
}

const LogoutButton: FC<IProps> = ({ profileType }): JSX.Element => {
    const navigate = useNavigate();
    const { darkTheme } = useContext(DarkThemeContext as Context<IDarkThemeContext>);

    const theme = darkTheme ? "dark" : "light"

    const handleLogout = () => { 
        localStorage.removeItem("token");
        localStorage.removeItem("userId");

        navigate(Routes.LOGIN);
        toast.success("You have successfully logged out", { theme });
    };

    return (
        <button className={`profile__${profileType}-navigation`} onClick={handleLogout}>
            <div><IoLogOutOutline/></div>
            <p>Logout</p>
        </button>
    )
}

export default LogoutButton