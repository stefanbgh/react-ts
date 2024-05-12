import { FC} from 'react'

interface IProps {
    status: string;
    darkTheme: boolean;
}

const WishlistStatus: FC<IProps> = ({ status, darkTheme }): JSX.Element => {
    return (
        <div className='w-1/12'>
            <p 
                className={`
                    ${ darkTheme ? "text-green-300 bg-green-800" : "text-green-800 bg-green-300" }
                    border py-0.5 px-2 rounded-md inline-block
                `}>
                    {status}
                </p>
        </div>
    )
}

export default WishlistStatus