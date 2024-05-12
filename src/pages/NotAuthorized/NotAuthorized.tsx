

import { BsExclamationCircle } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { Routes } from '../../router/Routes';

const NotAuthorized = () => {
    return (
        <div className='w-full h-screen flex flex-col items-center justify-center'>
            <div className='flex items-center'>
                <BsExclamationCircle className='text-red-500' size={32}/>
                <h2 className='ml-2'>Access Denied</h2>
            </div>
            <div className='py-4 border-b border-b-gray-200'>
                <h3>You are not authorized to access this page.</h3>
            </div>
            <Link to={Routes.HOME} className='mt-2'>
                <button className='bg-red-500 hover:bg-red-600 text-white transition-all py-1 px-3 mt-2 rounded-md'>Back to Home page</button>
            </Link>
        </div>
    )
}

export default NotAuthorized