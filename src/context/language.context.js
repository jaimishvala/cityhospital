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

        dispatch({ type: TOGGLE_LANGUAGE, payload: value })
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