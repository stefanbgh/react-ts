import { FC } from 'react'

import { IoLogOutOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom';
import { Routes } from '../../../router/Routes';
import { toast } from 'react-toastify';

interface IProps {
    darkTheme: boolean;
}

const AdminLogout: FC<IProps> = ({ darkTheme }): JSX.Element => {
    const adminLogout = darkTheme ? "admin__sidebar_link-dark" : "admin__sidebar_link";
    const theme = darkTheme ? "dark" : "light";

    const navigate = useNavigate();

    const handleLogout = () => { 
        localStorage.removeItem("token");
        localStorage.removeItem("userId");

        navigate(Routes.LOGIN);
        toast.success("You have successfully logged out", { theme });
    };

    return (
        <button
            className={adminLogout}
            onClick={handleLogout}
        >
            <div className='mr-2'><IoLogOutOutline/></div>
            <p>Logout</p>
        </button>
    )
}

export default AdminLogout