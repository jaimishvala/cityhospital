import { useReducer } from "react"
import { createContext } from "react"
import { LanguageReducer } from "./reducer/language.reducer"
import { TOGGLE_LANGUAGE } from "./ActionTypes"


const initaVal = {
    language: 'english'
}

export const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
    const [state, dispatch] = useReducer(LanguageReducer, initaVal)

    const handleLanguageChange = (value) => {
        console.log("language", value);

        let newLanguage;
        if (value === 'gujarati') {
            newLanguage = 'gujarati';
        } else if (value === 'hindi') {
            newLanguage = 'hindi';
        } else if (value === 'english') {
            newLanguage = 'english';
        }

        dispatch({ type: TOGGLE_LANGUAGE, payload: newLanguage })
    }

    return (
        <LanguageContext.Provider
            value={{
                ...state,
                handleLanguageChange
            }}
        >
            {children}
        </LanguageContext.Provider>
    )

}