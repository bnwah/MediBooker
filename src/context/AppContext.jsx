import { createContext } from "react";
import { doctors } from "../assets/assets";

//a context shares data (state, variables, functions) across components without passing props manually at every level.
// This is a global store for certain values that can be accessed by any component in the app.
export const AppContext = createContext() 
const AppContextProvider = (props) => {

    const currencySymbol = '$'

    const value = {
        // Define any state or functions you want to provide to the context
        doctors, // value we want shared across components
        currencySymbol // shared currency symbol
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )

}

export default AppContextProvider;