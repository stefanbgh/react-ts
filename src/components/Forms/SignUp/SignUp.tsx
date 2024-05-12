import { FC, Dispatch, SetStateAction, useContext, Context } from "react";

import { AuthForm, AuthFormButton, FormikField, FormPassword, AuthFormSwitch, AuthFormTitle } from "../../../components";
import { initialValues } from "../../../constants/initialValues";
import { validationSchema } from "../../../utils/validationSchema";
import { useFormik } from "formik";
import { Routes } from "../../../router/Routes";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../firebase/config";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import DarkThemeContext from "../../../context/ThemeContext";
import { IDarkThemeContext } from "../../../ts/interfaces/IDarkThemeContext/IDarkThemeContext";

interface IProps {
    setLoading: Dispatch<SetStateAction<boolean>>;
}

const SignUp: FC<IProps> = ({ setLoading }): JSX.Element => {
    const { darkTheme } = useContext(DarkThemeContext as Context<IDarkThemeContext>);
	const theme = darkTheme ? "dark" : "light";

    const navigate = useNavigate();

	const { handleSubmit, values, handleChange, handleBlur, touched, errors } = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            const { username, email, password } = values;
            setLoading(true);
			
			createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                toast.success("Register successfully", { theme });
				navigate(Routes.LOGIN);
                setLoading(false);

                const userId = userCredential.user.uid;
                const timestamp = new Date().getTime();

				userCredential.user.getIdToken().then((token) => {
					setDoc(doc(db, "users", userId), {
                        userId,
                        firstName: "",
                        lastName: "",
						username,
						email,
                        sinceMember: timestamp,
						token
					})
				});
            })
            .catch((error) => {
                toast.error(error.message, { theme });
                setLoading(false);
            });
        }
    });

	return (
		<AuthForm handleSubmit={handleSubmit}>
            <AuthFormTitle title="Sign up to your account"/>
            <FormikField
                inputId="username"
				text="Username:"
				placeholder="eliot404"
				value={values.username}
                error={errors.username}
                touched={touched.username}
                handleChange={handleChange}
                handleBlur={handleBlur}
                styleDiv="mb-4"
            />
            <FormikField
                inputId="email"
				text="Email:"
				placeholder="stefan@gmail.com"
				value={values.email}
                error={errors.email}
                touched={touched.email}
                handleChange={handleChange}
                handleBlur={handleBlur}
                styleDiv="mb-4"
            />
			<FormPassword
                inputId="password"
                value={values.password}
                error={errors.password}
                touched={touched.password}
                handleChange={handleChange}
                handleBlur={handleBlur}
            />
            <AuthFormButton content="Sign Up"/>
            <AuthFormSwitch
                question="Have an account?"
                page="Sign In"
                route={Routes.LOGIN}
            />
		</AuthForm>
	);
};

export default SignUp;
