import { FC, MouseEventHandler, useContext, Context } from 'react'

import { sectionsData } from './sectionsData'
import { Link } from 'react-router-dom';
import { ThemeToggleSwitch } from "../../components"
import { IDarkThemeContext } from '../../ts/interfaces/IDarkThemeContext/IDarkThemeContext';
import DarkThemeContext from '../../context/ThemeContext';

interface IProps {
    handleHideProfileDropdown: MouseEventHandler<HTMLAnchorElement | HTMLDivElement>;
    handleDisplayCart: MouseEventHandler<HTMLDivElement>;
}

const Sections: FC<IProps> = ({ handleHideProfileDropdown, handleDisplayCart }): JSX.Element => {
    const { darkTheme, setDarkTheme } = useContext(DarkThemeContext as Context<IDarkThemeContext>);

    const handleChangeTheme = () => setDarkTheme(!darkTheme);

    return (
        <>
            {
                sectionsData.map((section) => {
                    const { sectionId, sectionName, route, icon } = section;

                    if (sectionName !== "cart") {
                        return (
                            <Link
                                key={sectionId}
                                to={route!} 
                                className={`
                                    ${ darkTheme ? "hover:bg-gray-800" : "hover:bg-gray-100" }
                                    w-[40px] h-[40px] rounded-full flex items-center justify-center cursor-pointer
                                `}
                                onMouseEnter={handleHideProfileDropdown}
                            >
                                {icon}
                            </Link>
                        )
                    }

                    return (
                        <div 
                            key={sectionId}
                            className={`
                                ${ darkTheme ? "hover:bg-gray-800" : "hover:bg-gray-100" }    
                                hover:bg-gray-100 w-[40px] h-[40px] rounded-full flex items-center justify-center cursor-pointer
                            `}
                            onMouseEnter={handleHideProfileDropdown}
                            onClick={handleDisplayCart}
                        >
                            {icon}
                        </div>
                    )
                })
            }
            <ThemeToggleSwitch
                darkTheme={darkTheme}
                handleChangeTheme={handleChangeTheme}
            />
        </>
    )
}

export default Sections