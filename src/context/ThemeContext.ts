import { createContext } from "react";

const DarkThemeContext = createContext({
    darkTheme: false,
    setDarkTheme: (arg: boolean) => {console.log(arg)}
});

export default DarkThemeContext;