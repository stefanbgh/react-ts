import { FC, ChangeEventHandler, FocusEventHandler } from 'react'

import { FormikError } from "../../../../components"

interface IProps {
    inputId: string;
    text: string;
    placeholder: string; 
    value: string;
    error: string | undefined;
    touched: boolean | undefined;
    handleChange: ChangeEventHandler<HTMLTextAreaElement>;
    handleBlur: FocusEventHandler<HTMLTextAreaElement>;
    styleDiv: string;
    requiredStar?: JSX.Element;
    rows: number;
};

const FormikTextArea: FC<IProps> = ({ inputId, text, placeholder, value, error, touched, handleChange, handleBlur, styleDiv, requiredStar, rows }) => {
    return (
        <div className={styleDiv}>
            <label
                className="block tracking-wide text-sm font-bold mb-2"
                htmlFor={inputId}
            >
                {text}{requiredStar}
            </label>
            <textarea
                className={`
                    appearance-none bg-transparent resize-none block w-full border border-gray-200 rounded py-3 px-4 focus:outline-none focus:border-gray-500
                    ${touched && error ? "border border-red-400" : null}
                `}
                id={inputId}
                name={inputId}
                placeholder={placeholder}
                value={value}
                rows={rows}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            <FormikError error={error} touched={touched}/>
        </div>
    )
}

export default FormikTextArea