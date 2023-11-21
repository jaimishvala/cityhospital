import { createContext, useReducer } from "react"
import { ThemeReducer } from "./reducer/context.reducer";
import { TOGGLE_THEME } from "./ActionTypes";


const initaVal = {
    theme: 'light',
}

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ThemeReducer, initaVal);

    const toggleTheme = (val) => {
        console.log("hsgdf", val);

        let newTheme = val === 'light' ? 'dark' : 'light';
        console.log(newTheme);

        dispatch({ type: TOGGLE_THEME, payload: newTheme });

    }

    return (
        <ThemeContext.Provider
            value={{
                ...state,
                toggleTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    )

}

export default ThemeContext;