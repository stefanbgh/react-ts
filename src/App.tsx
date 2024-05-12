import { FC, useState } from 'react'

import Router from './router/Router'
import DarkThemeContext from './context/ThemeContext';
import { ErrorBoundary } from './components';

const App: FC = (): JSX.Element => {
    const [darkTheme, setDarkTheme] = useState<boolean>(false);

    const track = darkTheme ? "#111827" : "#ffffff";
    const thumb = `${darkTheme ? "#2563eb" : "#60a5fa"}; border-radius: 10px`;
    const thumbHover = darkTheme ? "#1d4ed8" : "#3b82f6";

    const scrollbar = `
        ::-webkit-scrollbar-track { background-color: ${track}; }
        ::-webkit-scrollbar-thumb { background-color: ${thumb}; }
        ::-webkit-scrollbar-thumb:hover { background-color: ${thumbHover} }
    `;

    return (
        <DarkThemeContext.Provider value={{ darkTheme: darkTheme, setDarkTheme: setDarkTheme }}>
            <ErrorBoundary>
            <div className={ darkTheme ? "bg-gray-900 text-gray-300" : "bg-white text-gray-700" }
            >
                <style> {scrollbar} </style>
                <Router/>
            </div>
            </ErrorBoundary>
        </DarkThemeContext.Provider>
    )
};

export default App