import { FC, MouseEventHandler, Dispatch, SetStateAction } from 'react'

import { IUser } from '../../../ts/interfaces/IUser/IUser';
import { useFormik } from 'formik';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../../firebase/config';
import { Theme, toast } from 'react-toastify';
import { FormikField, PersonalInfoEditButtons, PersonalInfoEditTitle } from "../../../components";
import { personalInfoValidateSchema } from '../../../utils/personalInfoValidateSchema';

import "./ModalPersonalInfoEdit.scss";

interface IProps {
    handleCloseModal: MouseEventHandler<HTMLButtonElement>;
    setModalIsOpen: Dispatch<SetStateAction<boolean>>;
    darkTheme: boolean;
    toastTheme: Theme;
    user: IUser;
}

const ModalPersonalInfoEdit: FC<IProps> = ({ handleCloseModal, setModalIsOpen, toastTheme, darkTheme, user }): JSX.Element => {
    const userId = localStorage.getItem("userId") as string;
    
    const { firstName, lastName } = user;
    const formTheme = darkTheme ? "modal__personal-info-edit-dark" : "modal__personal-info-edit";
    const fieldsTheme = darkTheme ? "modal__personal-info-edit__field-dark" : "modal__personal-info-edit__field";

    const initialValues = {
        personalInfoEditFirstName: firstName, 
        personalInfoEditLastName: lastName
    }
    
    const { handleSubmit, values, handleChange, handleBlur, touched, errors } = useFormik({
        initialValues,
        validationSchema: personalInfoValidateSchema,
        onSubmit: (values) => {
            const { personalInfoEditFirstName, personalInfoEditLastName } = values;
            const samePersonalInfo = personalInfoEditFirstName === firstName && personalInfoEditLastName === lastName;

            setModalIsOpen(false);

            if (samePersonalInfo) {
                toast.info("Your personal information won't be updated if it remains the same", { theme: toastTheme });

                return;
            }
			
			updateDoc(doc(db, "users", userId), {
                firstName: personalInfoEditFirstName,
                lastName: personalInfoEditLastName
            })
            .then(() => {
                toast.success("You have successfully changed your personal information", { theme: toastTheme });
            })
            .catch(error => {
                toast.error(error, { theme: toastTheme })
            })

            return;
        }
    });

    return (
        <form className={formTheme} onSubmit={handleSubmit}>
            <PersonalInfoEditTitle/>
            <div className={fieldsTheme}>
                <FormikField
                    inputId="personalInfoEditFirstName"
				    text="First Name:"
				    placeholder="First Name"
				    value={values.personalInfoEditFirstName}
                    error={errors.personalInfoEditFirstName}
                    touched={touched.personalInfoEditFirstName}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    styleDiv="mb-4"
                />
                <FormikField
                    inputId="personalInfoEditLastName"
				    text="Last Name:"
				    placeholder="Last Name"
				    value={values.personalInfoEditLastName}
                    error={errors.personalInfoEditLastName}
                    touched={touched.personalInfoEditLastName}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    styleDiv="mb-4"
                />
            </div>
            <PersonalInfoEditButtons
                handleCloseModal={handleCloseModal}
                darkTheme={darkTheme}
            />
        </form>
    )
}

export default ModalPersonalInfoEdit