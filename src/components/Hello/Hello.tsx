import { FC, useContext, Context } from 'react'

import { SiHey } from 'react-icons/si'
import { IDarkThemeContext } from '../../ts/interfaces/IDarkThemeContext/IDarkThemeContext';
import DarkThemeContext from '../../context/ThemeContext';
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { IoIosPlanet } from "react-icons/io";

import "./Hello.scss"

const Hello: FC = (): JSX.Element => {
    const { darkTheme } = useContext(DarkThemeContext as Context<IDarkThemeContext>);

    return (
        <div className="hello">
            <HiOutlineRocketLaunch 
                size={30}
                className={ darkTheme ? "hello__rocket-dark" : "hello__rocket" }
            />
            <IoIosPlanet 
                size={30} 
                className={ darkTheme ? "hello__planet-dark" : "hello__planet" }
            />
            <p className="hello__wave">
                Hey! 
                <SiHey 
                    className={ darkTheme ? "hello__wave-icon-dark" : "hello__wave-icon" } 
                    size={30}/> 
                My name is Stefan
            </p>
            <p>
                and I'm a 
                <span className={darkTheme ? "on_off-dark" : " on_off"} >
                    FE/React developer!
                </span>
            </p>
        </div>
    )
}

export default Hello