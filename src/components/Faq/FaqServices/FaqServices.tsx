import { FC, useContext, Context } from 'react'

import { faqServicesData } from './faqServicesData'
import "./FaqServices.scss"
import DarkThemeContext from '../../../context/ThemeContext'
import { IDarkThemeContext } from '../../../ts/interfaces/IDarkThemeContext/IDarkThemeContext'

const FaqServices: FC = (): JSX.Element => {
    const { darkTheme } = useContext(DarkThemeContext as Context<IDarkThemeContext>);

    return (
        <>
            {
                faqServicesData.map((service) => {
                    const { id, icon, text } = service;

                    return (
                        <div
                            key={id} 
                            className={ darkTheme ? "faq__services-dark" : "faq__services"}
                        >
                            <div className={ darkTheme ? "faq__services-dark-icon" : "faq__services-icon" }>
                                {icon}
                            </div>
                            <p className={ darkTheme ? "faq__services-dark-text" : "faq__services-text" }>{text}</p>
                        </div>
                    )   
                })
            }
        </>
    )
}

export default FaqServices