import { useRef, FormEvent, useContext, Context } from "react";

import { Routes } from "../../../router/Routes";
import { AuthForm, AuthField, AuthFormButton, AuthFormSwitch, AuthFormTitle, AuthGoogleButton, AuthOr, AuthPassword, AuthResetPasswordSwitch } from "../../../components";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../firebase/config";
import { DocumentSnapshot, doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { clearAuthFormFields } from "../../../utils/helpers/clearAuthFormFields";
import DarkThemeContext from "../../../context/ThemeContext";
import { IDarkThemeContext } from "../../../ts/interfaces/IDarkThemeContext/IDarkThemeContext";

interface IProps {
	setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignIn: React.FC<IProps> = ({ setLoading }): JSX.Element => {
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);

	const { darkTheme } = useContext(DarkThemeContext as Context<IDarkThemeContext>);
	const theme = darkTheme ? "dark" : "light";

	const navigate = useNavigate();

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => { 
		e.preventDefault();
		setLoading(true);

		signInWithEmailAndPassword(auth, emailRef.current!.value, passwordRef.current!.value)
            .then((userCredential) => {
				getDoc(doc(db, "users", userCredential.user.uid))
                	.then((user: DocumentSnapshot) => {
						localStorage.setItem("token", user.data()!.token);
						localStorage.setItem("userId", userCredential.user.uid); 
						toast.success("Login successfully", { theme });
						navigate(Routes.HOME);
						setLoading(false);
					})
                	.catch(error => {
						toast.error(error, { theme });
						setLoading(false);
					});
            })
            .catch(() => {
                toast.error("Invalid email address or password", { theme });
				clearAuthFormFields(emailRef, passwordRef);
				setLoading(false);
            });
	 }

	return (
		<AuthForm handleSubmit={handleSubmit}>
            <AuthFormTitle title="Sign in to your account"/>
			<AuthField
				inputId="signInEmail"
				placeholder="example@gmail.com"
				text="Email"
				inputRef={emailRef}
			/>
			<AuthPassword
				inputRef={passwordRef}
			/>
			<AuthResetPasswordSwitch/>
			<AuthFormButton content="Sign In"/>
			<AuthFormSwitch 
				question="Don't have an account?"
				route={Routes.REGISTER}
				page="Sign Up"
			/>
            <AuthOr/>
            <AuthGoogleButton/>
		</AuthForm>
	)
};

export default SignIn;
