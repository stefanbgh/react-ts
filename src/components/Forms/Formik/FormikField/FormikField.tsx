import { FC, ChangeEventHandler, FocusEventHandler } from 'react'

import { FormikError } from '../../..';

interface IProps {
    inputId: string;
    text: string;
    placeholder: string; 
    value: string;
    error: string | undefined;
    touched: boolean | undefined;
    handleChange: ChangeEventHandler<HTMLInputElement>;
    handleBlur: FocusEventHandler<HTMLInputElement>;
    styleDiv: string;
    requiredStar?: JSX.Element;
    disableAutoComplete?: boolean;
};

const FormikField: FC<IProps> = ({ inputId, text, placeholder, value, error, touched, handleChange, handleBlur, styleDiv, requiredStar, disableAutoComplete }): JSX.Element => {
    return (
        <div className={styleDiv}>
            <label
                className="block text-sm font-bold mb-2"
                htmlFor={inputId}
            >
                {text}{requiredStar}
            </label>
            <input
                className={`
                    shadow bg-transparent appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline
                    ${touched && error ? "border border-red-400" : null}
                `}
                id={inputId}
                type="text"
                name={inputId}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete={ disableAutoComplete ? "off" : "on" }
            />
            <FormikError error={error} touched={touched}/>
        </div>
    )
}

export default FormikField