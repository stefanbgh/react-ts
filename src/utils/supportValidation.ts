import * as Yup from "yup";
import { validateEmail, withoutWhiteSpace } from "./helpers/regexValidationSchema";

export const supportValidation = Yup.object().shape({
	supportFirstName: Yup.string()
		.matches(withoutWhiteSpace, { message: "Fields cannot be empty" })
		.min(3, "First name must be at least 3 characters")
		.max(30, "First name must be less than 30 characters")
		.required("Required"),

	supportEmail: Yup.string()
		.matches(validateEmail, { message: "Invalid email address" } )
		.required("Required"),

    supportTitle: Yup.string()
		.matches(withoutWhiteSpace, { message: "Fields cannot be empty" })
		.min(3, "Title must be at least 3 characters")
		.max(16, "Title must be less than 16 characters")
		.required("Required"),

	supportMessage: Yup.string()
		.matches(withoutWhiteSpace, { message: "Fields cannot be empty" })
		.min(6, "Message must be at least 6 characters")
		.max(700, "Message must be less than 700 characters")
		.required("Required")
});