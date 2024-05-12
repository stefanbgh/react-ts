import { FC, useContext, Context } from 'react'

import { BiLogoGithub, BiLogoLinkedinSquare, BiLogoGmail } from "react-icons/bi";
import { Link } from "react-router-dom";

import DarkThemeContext from '../../context/ThemeContext';
import { IDarkThemeContext } from '../../ts/interfaces/IDarkThemeContext/IDarkThemeContext';

import "./Contact.scss";

const Contact: FC = (): JSX.Element => {
    const { darkTheme } = useContext(DarkThemeContext as Context<IDarkThemeContext>);

    return (
        <div className="contact">
            <p className="text-center text-2xl mb-2">Contact:</p>
            <div className="contact__github">
                <BiLogoGithub size={23} className='contact__github-icon'/>
                <Link 
                    className={
                        darkTheme ? "contact__github-link-dark" : "contact__github-link"
                    }
                    target="_blank"
                    to={"https://github.com/stefan022"}
                >
                    stefan022
                </Link>
            </div>
            <div className="contact__linkedin">
                <BiLogoLinkedinSquare size={23} className='contact__linkedin-icon'/>
                <Link 
                    className={
                        darkTheme ? "contact__linkedin-link-dark" : "contact__linkedin-link"
                    }
                    target="_blank"
                    to={"https://www.linkedin.com/in/stefan-blagojevi%C4%87-2aa3a5273/"}
                >
                    stefan-blagojevic
                </Link>
            </div>
            <div className="contact__gmail">
                <BiLogoGmail size={23} className='contact__gmail-icon'/>
                <p className={
                    darkTheme ? "contact__gmail-paragraph-dark" : "contact__gmail-paragraph"
                }>
                    sblagojevic.po@gmail.com
                </p>
            </div>
        </div>
    )
}

export default Contact