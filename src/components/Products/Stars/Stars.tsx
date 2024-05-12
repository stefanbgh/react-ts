import { FC, useContext, Context } from "react"

import { AiFillStar } from "react-icons/ai";
import { stars } from "../../../constants/stars";
import DarkThemeContext from "../../../context/ThemeContext";
import { IDarkThemeContext } from "../../../ts/interfaces/IDarkThemeContext/IDarkThemeContext";

interface IProps {
    rating: number;
    size: number;
};

const Stars: FC<IProps> = ({ rating, size }): JSX.Element => {
    const { darkTheme } = useContext(DarkThemeContext as Context<IDarkThemeContext>);

    return (
        <>
            {
                stars.map((star) => {
                    const { starId, starRating } = star;

                    return (
                        <AiFillStar 
                            key={starId}
                            size={size}
                            fill={  
                                rating >= starRating 
                                    ? "#ffcc00" 
                                    : darkTheme 
                                        ? "#374151"  
                                        : "#e6e6e6" 
                                }
                        />
                    )
                })
            }
        </>
    )
};

export default Stars