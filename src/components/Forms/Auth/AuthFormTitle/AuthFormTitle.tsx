

interface IProps {
    title: string;
}

const AuthFormTitle = ({ title }: IProps) => {
    return (
        <p className="text-2xl font-bold mb-6">{title}</p>
    )
}

export default AuthFormTitle