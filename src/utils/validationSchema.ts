import * as Yup from "yup";
import { validateEmail, usernameRules, withoutSpaceBetweenLetter, withoutWhiteSpace } from "./helpers/regexValidationSchema";

export const validationSchema = Yup.object().shape({
	username: Yup.string()
		.matches(withoutWhiteSpace, { message: "Fields cannot be empty" })
		.matches(usernameRules, { message: "The username can only contain letters, numbers, and _ without spaces" })
		.min(3, "Username must be at least 3 characters")
		.max(30, "Username must be less than 30 characters")
		.required("Required"),

	email: Yup.string()
		.matches(validateEmail, { message: "Invalid email address" } )
		.required("Required"),

	password: Yup.string()
		.matches(withoutWhiteSpace, { message: "Fields cannot be empty" })
		.matches(withoutSpaceBetweenLetter, { message: "There must be no special characters or spaces" })
		.min(6, "Password must be at least 6 characters")
		.max(30, "Password must be less than 30 characters")
		.required("Required")
});