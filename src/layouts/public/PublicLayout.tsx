import { useEffect, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom';
import { Routes } from '../../router/Routes';

interface IProps {
    children: ReactNode
}

const PublicLayout = ({ children }: IProps): JSX.Element | null => {
    const token = localStorage.getItem("token");

    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            navigate(Routes.HOME);

            return;
        }

        //eslint-disable-next-line
    }, [token]);

    if (!token) return <div>{children}</div>
        
    return null;
}

export default PublicLayout