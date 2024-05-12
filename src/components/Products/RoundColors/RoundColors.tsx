import { FC} from 'react'

import { colors as constColors } from '../../../constants/colors';
import { TColors } from '../../../ts/types/TColors';

interface IProps {
    articleId?: number;
    colors: TColors[];
    largeSize: boolean;
}

const RoundColors: FC<IProps> = ({ articleId, colors, largeSize }): JSX.Element => {
    return ( 
        <>
            {
                colors 
                ? colors.map((color: TColors) => {
                    return (
                        <div 
                            key={`${articleId}${color}`}
                            className={`
                            ${constColors[color]} 
                            ${largeSize ? "w-7 h-7" : "w-5 h-5"}
                            border rounded-full
                        `}/>
                    )
                })
                : null
            }
        </>
    )
}

export default RoundColors