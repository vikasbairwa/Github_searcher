import React, { createContext, useReducer } from 'react'
import GithubReducer from './GithubReucer';

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
    const initialState = {
        users: [],
        user: {},
        loading: false,
        repos: []
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState)

    return <GithubContext.Provider value={{
        ...state,
        dispatch,
    }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext