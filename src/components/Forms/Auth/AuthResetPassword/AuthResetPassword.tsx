import { FC, Dispatch, SetStateAction, FormEvent, useRef, useContext, Context } from 'react'
import { AuthField, AuthForm, AuthFormButton, AuthFormSwitch, AuthFormTitle, AuthOr } from '../../../../components'
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../../../firebase/config';
import { toast } from 'react-toastify';
import { Routes } from '../../../../router/Routes';
import { useNavigate } from 'react-router-dom';
import DarkThemeContext from '../../../../context/ThemeContext';
import { IDarkThemeContext } from '../../../../ts/interfaces/IDarkThemeContext/IDarkThemeContext';

interface IProps {
    setLoading: Dispatch<SetStateAction<boolean>>;
}

export const AuthResetPassword: FC<IProps> = ({ setLoading }): JSX.Element => {
    const { darkTheme } = useContext(DarkThemeContext as Context<IDarkThemeContext>);
    const emailRef = useRef<HTMLInputElement>(null);

    const navigate = useNavigate();
    const theme = darkTheme ? "dark" : "light";

    const handleResetPassword = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
    
        sendPasswordResetEmail(auth, emailRef.current!.value)
            .then(() => {
                toast.success("Check your email for a reset link", { theme });
                navigate(Routes.LOGIN);
                setLoading(false);
            })
            .catch((error) => {
                toast.error(error.message, { theme });
                setLoading(false);
            });
    };

    return (
        <AuthForm handleSubmit={handleResetPassword}>
            <AuthFormTitle title='Reset your Password'/>
            <AuthField
                inputId="resetPassword"
                inputRef={emailRef}
                placeholder="example@gmail.com"
                text='Email'
            />
            <AuthFormButton
                content='Send instructions'
            />
            <AuthOr/>
            <AuthFormSwitch
                question='Back to'
                route={Routes.LOGIN}
                page='Sign In'
            />
        </AuthForm>
    )
}

export default AuthResetPassword