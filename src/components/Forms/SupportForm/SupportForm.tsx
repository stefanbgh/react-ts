import { FC, useState, useEffect } from "react";

import { FormikField, FormikTextArea, Spinner, SupportFormButton, SupportFormTitle } from "../../../components"
import { useFormik } from "formik";
import { supportValidation } from "../../../utils/supportValidation";
import { Theme, toast } from "react-toastify";
import { useAddSingleMessageForSupportMutation } from "../../../features/API/supportMessagesAPI";
import { ISupportInitialValues } from "../../../ts/interfaces/ISupport/ISupportInitialValues";
import { requiredStar } from "../../../constants/requiredStar";

interface IProps {
	theme: Theme;
	initialValues: ISupportInitialValues;
}

const SupportForm: FC<IProps> = ({ theme, initialValues }): JSX.Element => {
	const userId = localStorage.getItem("userId") as string;

	const [ loading, setLoading ] = useState<boolean>(false);
	const [ addSingleMessageForSupport ] = useAddSingleMessageForSupportMutation();

	// eslint-disable-next-line
	useEffect(() => { setValues(initialValues); }, [initialValues]);

	const { handleSubmit, values, handleChange, handleBlur, touched, errors, setValues } = useFormik({
        initialValues,
        validationSchema: supportValidation,
        onSubmit: async (values, { resetForm }) => {
            const { supportFirstName, supportEmail, supportTitle, supportMessage } = values;
			setLoading(true);
			
			const timestamp = new Date().getTime();

			addSingleMessageForSupport({
				firstName: supportFirstName,
				email: supportEmail,
				title: supportTitle,
				message: supportMessage,
				timestamp,
				changeTimestamp: timestamp,
				userId
			});

			setLoading(false);
			toast.success("You have successfully sent us a message", { position: "top-left", theme });
			toast.info(" We will respond as soon as possible", { position: "top-left", theme });

			window.scrollTo(0, 0);
			resetForm();
        }
    });

	return (
		<>
			<form className="w-full" onSubmit={handleSubmit}>
				<SupportFormTitle/>
				<div className="flex flex-wrap -mx-3">
					<FormikField
						inputId="supportFirstName"
						text="First Name:"
						placeholder="First Name"
						value={values.supportFirstName}
						error={errors.supportFirstName}
						touched={touched.supportFirstName}
						handleChange={handleChange}
						handleBlur={handleBlur}
						styleDiv="w-full md:w-1/2 px-3 mb-6"
						requiredStar={requiredStar}
					/>
					<FormikField
						inputId="supportEmail"
						text="Email:"
						placeholder="example@gmail.com"
						value={values.supportEmail}
						error={errors.supportEmail}
						touched={touched.supportEmail}
						handleChange={handleChange}
						handleBlur={handleBlur}
						styleDiv="w-full md:w-1/2 px-3"
						requiredStar={requiredStar}
					/>
				</div>
				<div className="flex flex-wrap -mx-3 mb-6">
					<FormikField
						inputId="supportTitle"
						text="Title:"
						placeholder="Title"
						value={values.supportTitle}
						error={errors.supportTitle}
						touched={touched.supportTitle}
						handleChange={handleChange}
						handleBlur={handleBlur}
						styleDiv="w-full px-3"
						requiredStar={requiredStar}
						disableAutoComplete={true}
					/>
				</div>
				<div className="flex flex-wrap -mx-3 mb-4">
					<FormikTextArea
						inputId="supportMessage"
						text="Message:"
						placeholder="Enter your message..."
						rows={6}
						value={values.supportMessage}
						error={errors.supportMessage}
						touched={touched.supportMessage}
						handleChange={handleChange}
						handleBlur={handleBlur}
						styleDiv="w-full px-3"
						requiredStar={requiredStar}
					/>
				</div>
				<SupportFormButton/>
			</form>
			{ loading && <Spinner/> }
		</>
	);
};

export default SupportForm;
