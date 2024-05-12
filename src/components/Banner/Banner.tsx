import { FC, useContext, Context } from 'react'

import { BannerNavigation } from "../../components"
import { IBannerNavigation } from '../../ts/interfaces/IBanner/IBannerNavigation';
import DarkThemeContext from '../../context/ThemeContext';
import { IDarkThemeContext } from '../../ts/interfaces/IDarkThemeContext/IDarkThemeContext';

interface IProps {
    title: string;
    desc?: string;
    navigation?: IBannerNavigation[];
    bgPosition?: string;
    bgNoRepeat?: string;
    image?: string;
}

const Banner: FC<IProps> = ({ title, desc, navigation, bgPosition, bgNoRepeat, image }): JSX.Element => {
    const { darkTheme } = useContext(DarkThemeContext as Context<IDarkThemeContext>);

    const lightBgImage = `linear-gradient(90deg, rgba(45,139,255,.9) 40%, rgba(96,165,250,.9) 80%), url(${image})`;
    const darkBgImage = `linear-gradient(90deg, rgba(29,78,216,.9) 0%, rgba(37,99,235,.9) 100%), url(${image})`;

    const bgImage = darkTheme ? darkBgImage : lightBgImage;

    return (
        <div
            style={{ backgroundImage: bgImage }} 
            className={`${bgPosition} ${bgNoRepeat} h-[200px] w-full flex flex-col items-center justify-center text-white`}
        >
            <h1 className="text-white font-normal">{title}</h1>
            {
                navigation
                ? <BannerNavigation navigation={navigation}/>
                : null
            }
            {
                desc ? <p className="text-gray-100 pt-2">{desc}</p> : null
            }
        </div>
    )
}

export default Banner