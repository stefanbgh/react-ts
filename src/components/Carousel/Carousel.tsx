import { FC, useContext, Context } from 'react'

import { skillsData } from '../../pages/Home/skillsData';
import DarkThemeContext from '../../context/ThemeContext';
import { IDarkThemeContext } from '../../ts/interfaces/IDarkThemeContext/IDarkThemeContext';
import "./Carousel.scss";

const Carousel: FC = (): JSX.Element => {
    const { darkTheme } = useContext(DarkThemeContext as Context<IDarkThemeContext>);

    return (
        <div className={darkTheme ? "carousel-dark" : "carousel"}>
            <p className="text-center text-2xl mb-2">Skills:</p>
            <div className="carousel__slide">
                {
                    skillsData.map((skill) => {
                        const { id, icon } = skill;

                        return (
                            <div className="carousel__slide-icon" key={id}>{icon}</div>
                        )
                    })
                }
            </div>
            <div className="carousel__slide">
                {
                    skillsData.map((skill) => {
                        const { id, icon } = skill;

                        return (
                            <div className="carousel__slide-icon" key={id}>{icon}</div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Carousel