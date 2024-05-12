import { FC, useContext, Context } from 'react'
import DarkThemeContext from '../../../context/ThemeContext';
import { IDarkThemeContext } from '../../../ts/interfaces/IDarkThemeContext/IDarkThemeContext';

interface IProps {
    title: string;
    info: string;
    icon: JSX.Element;
}

const SupportSingleInformation: FC<IProps> = ({ title, info, icon }): JSX.Element => {
    const { darkTheme } = useContext(DarkThemeContext as Context<IDarkThemeContext>);

    return (
        <div className='flex p-6 gap-4 border border-gray-400'>
            <div className={`
                ${ darkTheme ? "bg-gray-700" : "bg-red-100" }
                flex items-center justify-center p-5 rounded-sm
            `}>
                {icon}
            </div>
            <div className='flex flex-col justify-around'>
                <p className='font-bold'>{title}</p>
                <p className='text-gray-400 text-sm'>{info}</p>
            </div>
        </div>
    )
}

export default SupportSingleInformation