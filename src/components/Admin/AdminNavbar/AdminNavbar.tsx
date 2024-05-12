import { FC} from 'react'

import { IoMdNotificationsOutline } from 'react-icons/io'
import { ThemeToggleSwitch, NavbarProfilePicture } from '../../../components'

import "./AdminNavbar.scss"

interface IProps {
    darkTheme: boolean;
    setDarkTheme: (arg: boolean) => void;
}

const AdminNavbar: FC<IProps> = ({ darkTheme, setDarkTheme }): JSX.Element => {
    const handleChangeTheme = () => setDarkTheme(!darkTheme);

    return (
        <div className={ darkTheme ? "admin__navbar-dark" : "admin__navbar" }>
            <ThemeToggleSwitch
                darkTheme={darkTheme}
                handleChangeTheme={handleChangeTheme}
            />
            <div className={ darkTheme ? "admin__navbar_notifications-dark" : "admin__navbar_notifications" }>
                <IoMdNotificationsOutline color='gray' size={20}/>
            </div>
            <NavbarProfilePicture/>
        </div>
    )
}

export default AdminNavbar