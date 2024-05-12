import { FC, useContext, Context } from "react"

import DarkThemeContext from "../../../../context/ThemeContext";
import { IDarkThemeContext } from "../../../../ts/interfaces/IDarkThemeContext/IDarkThemeContext";

interface IProps {
    content: string;
}

const AuthFormButton: FC<IProps> = ({ content }): JSX.Element => {
    const { darkTheme } = useContext(DarkThemeContext as Context<IDarkThemeContext>);

    return (
        <div className="flex mb-4">
            <button
                className={`
                    ${ darkTheme ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-400 hover:bg-blue-500" }
                    text-gray-100 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full transition-all
                `}
                type="submit"
            >
                    {content}
            </button>
        </div>
    )
}

export default AuthFormButton