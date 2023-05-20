

import { createContext, useReducer } from "react"

export const NavbarContext = createContext()

export const navbarReducer = (state, action) => {
    switch (action.type) {
        case 'SET_PAGE':
            return {
                activeUser: action.payload
            }
        default:
            return state
    }
}

export const NavbarContextProvider = ({children}) => {
    const [state, dispatchNavbar] = useReducer(navbarReducer, {
        currentPage: null,
    })

    return (
        <NavbarContext.Provider value={{...state, dispatchNavbar}}>
            {children}
        </NavbarContext.Provider>
    )
}