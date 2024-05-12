import { FC, MouseEventHandler } from 'react'

import { BiMoon } from "react-icons/bi"
import { MdSunny } from "react-icons/md"

import "./ThemeToggleSwitch.scss";

interface IProps {
    darkTheme: any;
    handleChangeTheme: MouseEventHandler<HTMLDivElement>;
}

const ThemeToggleSwitch: FC<IProps> = ({ darkTheme, handleChangeTheme }): JSX.Element => {
    return (
        <div 
            onClick={handleChangeTheme}
            className={darkTheme ? "theme-dark" : "theme"}>
            <div 
                className={darkTheme ? "theme__button-dark" : "theme__button"}
            >
                {
                    darkTheme ? <BiMoon color='white'/> : <MdSunny color="gray"/>
                }
            </div>
        </div>
    )
}

export default ThemeToggleSwitch