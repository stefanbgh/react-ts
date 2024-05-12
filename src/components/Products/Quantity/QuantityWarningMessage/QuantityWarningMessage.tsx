import { FC} from 'react'

interface IProps {
    disabledDecrement: boolean;
    disabledIncrement: boolean;
}

const QuantityWarningMessage: FC<IProps> = ({ disabledDecrement, disabledIncrement }): JSX.Element => {
    return (
        <>
            {
                disabledDecrement && <p className='ml-2 text-red-500 font-bold'>The minimum quantity you can enter is 1!</p>
            }
            {
                disabledIncrement && <p className='ml-2 text-red-500 font-bold'>The maximum quantity you can enter is 20!</p>
            }
        </>
    )
}

export default QuantityWarningMessage