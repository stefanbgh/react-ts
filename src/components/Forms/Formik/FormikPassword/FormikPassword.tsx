import React, { ChangeEventHandler, FocusEventHandler } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

import { FormikError } from '../../..';

interface IProps {
    inputId: string;
    value: string;
    error: string | undefined;
    touched: boolean | undefined;
    handleChange: ChangeEventHandler<HTMLInputElement>;
    handleBlur: FocusEventHandler<HTMLInputElement>;
};

const FormikPassword = ({ inputId, value, touched, error, handleChange, handleBlur }: IProps) => {
    const [passwordVisible, setPasswordVisible] = React.useState(false);

    const handleChangeVisible = () => setPasswordVisible(!passwordVisible);

    return (
        <div className="mb-6">
            <label
                className="block text-sm font-bold mb-2"
                htmlFor={inputId}
            >
                Password
            </label>
            <div className="relative">
                <input
                    className={`
                        shadow bg-transparent appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline
                        ${touched && error ? "border border-red-400" : null}
                    `}
                    id={inputId}
                    type={passwordVisible ? "text" : "password"}
                    name={inputId}
                    placeholder="*********"
                    value={value}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="off"
                />
                <button 
                    type="button" 
                    className="absolute top-2.5 right-2.5"
                    onClick={handleChangeVisible}
                >
                    {
                        passwordVisible 
                            ? <AiFillEye size={20} color="gray"/>
                            : <AiFillEyeInvisible size={20} color="gray"/>
                    }
                </button>
            </div>
            <FormikError error={error} touched={touched}/>
        </div>
    )
}

export default FormikPassword