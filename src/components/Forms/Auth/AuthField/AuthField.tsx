import { LegacyRef } from 'react'

interface IProps {
    inputId: string;
    text: string;
    placeholder: string;
    inputRef: LegacyRef<HTMLInputElement>;
}

const AuthField = ({ inputId, text, placeholder, inputRef }: IProps) => {
    return (
        <div className="mb-4">
            <label
                className="block text-sm font-bold mb-2"
                htmlFor={inputId}
            >
                {text}
            </label>
            <input
                ref={inputRef}
                className="shadow bg-transparent appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline"
                id={inputId}
                type="text"
                placeholder={placeholder}
            />
        </div>
    )
}

export default AuthField