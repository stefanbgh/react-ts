import { FC} from 'react'

import logo from "../../../assets/logo.webp";
import { adminSidebarData } from './adminSidebarData';
import { Link } from 'react-router-dom';
import { Routes } from '../../../router/Routes';
import { AdminLogout } from "../../../components";

import "./AdminSidebar.scss"

interface IProps {
    darkTheme: boolean;
}

const AdminSidebar: FC<IProps> = ({ darkTheme }): JSX.Element => {
    return (
        <div className={ darkTheme ? "admin__sidebar-dark" : "admin__sidebar" }>
            <div className='admin__sidebar_image'>
                <img src={logo} alt="logo.webp" loading="lazy" />
            </div>
            <div>
                {
                    adminSidebarData.map((adminSidebar) => {
                        const { id, icon, route, title } = adminSidebar;

                        return (
                            <Link
                                to={route}
                                key={id}
                                className={ darkTheme ? "admin__sidebar_link-dark" : "admin__sidebar_link" }
                            >
                                <div className="mr-2">{icon}</div>
                                <p>{title}</p>
                            </Link>
                        )
                    })
                }
            </div>
            <AdminLogout
                darkTheme={darkTheme}
            />
            <Link
                className='p-5'
                to={Routes.HOME}
            >
                <button className={ darkTheme ? "admin__sidebar_button-dark" : "admin__sidebar_button" }>
                    Open Application
                </button>
            </Link>
        </div>
    )
}

export default AdminSidebar