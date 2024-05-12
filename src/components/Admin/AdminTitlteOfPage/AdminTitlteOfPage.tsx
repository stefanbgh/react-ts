import { Link } from 'react-router-dom';
import { Routes } from '../../../router/Routes';

interface IProps {
    title: string;
}

const AdminTitlteOfPage = ({ title }: IProps) => {
    return (
        <div className='mb-4 flex items-center gap-2'>
            {
                title !== "Dashboard" && (
                    <Link
                        className='hover:text-blue-400 transition-all'
                        to={Routes.DASHBOARD}
                    >
                        <p>Dashboard &rarr;</p>
                    </Link>
                )
            }
            <p>{title}</p>
        </div>
    )
}

export default AdminTitlteOfPage