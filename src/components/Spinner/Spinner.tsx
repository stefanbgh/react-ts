import { FC, useContext, Context } from 'react'

import { RingLoader } from 'react-spinners'
import DarkThemeContext from '../../context/ThemeContext'
import { IDarkThemeContext } from '../../ts/interfaces/IDarkThemeContext/IDarkThemeContext';

import "./Spinner.scss";

const Spinner: FC = (): JSX.Element => {
    const { darkTheme } = useContext(DarkThemeContext as Context<IDarkThemeContext>);

    return (
        <div 
            className={ darkTheme ? "spinner-dark" : "spinner" }
        >
            <RingLoader
                color="#60a5fa"
                loading
                size={70}
                speedMultiplier={1.2}
            />
        </div>
    )
}

export default Spinner