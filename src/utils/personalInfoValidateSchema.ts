import * as Yup from "yup";
import { lettersOnly, withoutWhiteSpace } from "./helpers/regexValidationSchema";

export const personalInfoValidateSchema = Yup.object().shape({
	personalInfoEditFirstName: Yup.string()
		.matches(withoutWhiteSpace, { message: "Fields cannot be empty" })
		.matches(lettersOnly, { message: "First Name must contain only letters" })
		.min(3, "First Name must be at least 3 characters")
		.max(30, "First Name must be less than 30 characters")
		.required("Required"),

    personalInfoEditLastName: Yup.string()
        .matches(withoutWhiteSpace, { message: "Fields cannot be empty" })
        .matches(lettersOnly, { message: "Last Name must contain only letters" })
        .min(3, "Last Name must be at least 3 characters")
        .max(30, "Last Name must be less than 30 characters")
        .required("Required")
});