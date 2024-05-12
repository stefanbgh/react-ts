import { Context, FC, MouseEventHandler, useContext } from 'react'

import { BsThreeDots } from 'react-icons/bs';

import "./LoadMore.scss";
import DarkThemeContext from '../../../context/ThemeContext';
import { IDarkThemeContext } from '../../../ts/interfaces/IDarkThemeContext/IDarkThemeContext';

interface IProps {
    buttonType: "load-more" | "three-dots";
    handleLoadMore: MouseEventHandler<HTMLButtonElement | SVGElement>;
}

const LoadMore: FC<IProps> = ({ buttonType, handleLoadMore }): JSX.Element => {
    const { darkTheme } = useContext(DarkThemeContext as Context<IDarkThemeContext>);

    return (
        <>
            {
                buttonType === "load-more" ? (
                    <div className='load__more'>
                        <button 
                            className={ darkTheme ? 'load__more-button-dark' : 'load__more-button' }
                            onClick={handleLoadMore}
                        >
                            Load More
                        </button>
                    </div>
                ) : (
                    <div className='three__dots'>
                        <BsThreeDots
                            className={ darkTheme ? 'three__dots-icon-dark' : 'three__dots-icon' }
                            size={20}
                            onClick={handleLoadMore}
                        />
                    </div>
                )
            }
        </>
    )
}

export default LoadMore