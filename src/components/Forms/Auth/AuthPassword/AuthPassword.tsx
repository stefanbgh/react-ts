import React, { LegacyRef } from 'react'

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

interface IProps {
    inputRef: LegacyRef<HTMLInputElement>;
}

const AuthPassword = ({ inputRef }: IProps) => {
    const [passwordVisible, setPasswordVisible] = React.useState(false);

    const handleChangeVisible = () => setPasswordVisible(!passwordVisible);

    return (
        <div className="mb-6">
            <div></div>
            <label
                className="block text-sm font-bold mb-2"
                htmlFor="signInPassword"
            >
                Password
            </label>
            <div className="relative">
                <input
                    ref={inputRef}
                    className="shadow bg-transparent appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline"
                    id="signInPassword"
                    type={passwordVisible ? "text" : "password"}
                    placeholder="********"
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
        </div>
    )
}

export default AuthPassword