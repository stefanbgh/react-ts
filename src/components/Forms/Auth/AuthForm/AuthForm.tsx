import { FormEventHandler, ReactNode } from 'react'

interface IProps {
    children: ReactNode;
    handleSubmit: FormEventHandler<HTMLFormElement>;
}

const AuthForm = ({ children, handleSubmit }: IProps) => {
    return (
        <form 
            onSubmit={handleSubmit}
            className="bg-transparent shadow-md rounded px-8 pt-6 pb-8 mb-4 border border-gray-300 w-1/2 min-w-[462px] ml-20"
        >
            {children}
        </form>
    )
}

export default AuthForm