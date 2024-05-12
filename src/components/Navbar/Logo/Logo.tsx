import { FC} from 'react'

import { Link } from 'react-router-dom'
import { Routes } from '../../../router/Routes'

import logo from "../../../assets/logo.webp";

const Logo: FC = (): JSX.Element => {
    return (
        <div className="cursor-pointer py-2">
            <Link to={Routes.HOME}>
                <img width={230} src={logo} alt="logo.webp" loading="lazy"/>
            </Link>
        </div>
    )
}

export default Logo