import { ReactNode } from 'react'
import { NotAuthorized } from '../../pages';

interface IProps {
    children: ReactNode
}

const AdminLayout = ({ children }: IProps) => {
    const token = localStorage.getItem("token");

    if (token === import.meta.env.VITE_ADMIN_TOKEN) {
        return <div>{children}</div>
    }

    return <NotAuthorized />
}

export default AdminLayout