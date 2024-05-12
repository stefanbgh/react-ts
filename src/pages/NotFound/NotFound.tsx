import { Context, FC, useContext } from 'react'

import error404 from "../../assets/error404.webp";
import { Link } from 'react-router-dom';
import { Routes } from '../../router/Routes';
import DarkThemeContext from '../../context/ThemeContext';
import { IDarkThemeContext } from '../../ts/interfaces/IDarkThemeContext/IDarkThemeContext';

import "./NotFound.scss"

const NotFound: FC = (): JSX.Element => {
    const { darkTheme } = useContext(DarkThemeContext as Context<IDarkThemeContext>);

    const notFound = darkTheme ? "not-found-dark" : "not-found";
    const notFoundButton = darkTheme ? "not-found__button-dark" : "not-found__button";

    return (
        <div className={notFound}>
            <img width={300} src={error404} alt="error404.webp" loading="lazy"/>
            <h2 className='not-found__message'>
                Sorry, page not found!
            </h2>
            <Link to={Routes.HOME}>
                <button className={notFoundButton}>
                    Back to Home page
                </button>
            </Link>
        </div>
    )
}

export default NotFound