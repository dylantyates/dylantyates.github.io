import {
    // types
    ReactNode,
    //context
    createContext,
    // state
    useState
} from 'react';
import GLOBAL from '../global.tsx';

export const ThemeContext = createContext({
    theme: GLOBAL.THEMES.DEFAULT,
    updateTheme: (theme: string) => theme
});

export declare interface Props {
    children: ReactNode
}

function Theme({children}: Props) {
    
    const [theme, setTheme] = useState(GLOBAL.THEMES.DEFAULT);

    const updateTheme = (newTheme: string) => {
        setTheme(newTheme)
        return newTheme;
    }

    return (
        <ThemeContext.Provider value={{theme, updateTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default Theme;