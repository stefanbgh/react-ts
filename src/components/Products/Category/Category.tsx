import { FC, useContext, Context } from 'react'

import { Link } from 'react-router-dom'
import { categoryWidthImage } from '../../../constants/categoryWidthImage';
import "./Category.scss"
import DarkThemeContext from '../../../context/ThemeContext';
import { IDarkThemeContext } from '../../../ts/interfaces/IDarkThemeContext/IDarkThemeContext';

interface IProps {
    route: string;
    categoryName: string;
    image: string;
}

const Category: FC<IProps> = ({ route, categoryName, image }): JSX.Element => {
    const { darkTheme } = useContext(DarkThemeContext as Context<IDarkThemeContext>);
    const lowerCaseCategoryName = categoryName.toLowerCase();

    return (
        <Link to={route}>
            <div className={`
                    w-full h-full p-8 flex flex-col justify-between
                    ${darkTheme ? "bg-blue-600" : "bg-blue-400 border border-gray-200"}
                `}>
                <p className='text-white he'>{categoryName}</p>
                <div className='flex items-center justify-center w-full h-full'>
                    <img 
                        className={`
                            ${categoryWidthImage[lowerCaseCategoryName]}
                            ds
                        `} 
                        src={image} 
                        alt="img" 
                        loading="lazy"
                    />
                </div>
            </div>
        </Link>
    )
}

export default Category