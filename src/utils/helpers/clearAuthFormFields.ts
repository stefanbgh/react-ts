import { RefObject } from "react";

export const clearAuthFormFields = (email: RefObject<HTMLInputElement>, password: RefObject<HTMLInputElement>) => {
    email.current!.value = "";
    password.current!.value = "";
};