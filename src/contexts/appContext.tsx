import React, { createContext, useState } from 'react';

interface Props {
    children: React.ReactNode,
}

interface Context {
    base: string,
    sub: string,
    query: string,
    count: number,
    setContext: Function,
}

const initialState: Context = {
    base: 'https://www.reddit.com',
    sub: '/r/programminghumor',
    query: '/top.json?t=week',
    count: 10,
    setContext: (updates: Object) => {},
};

const AppContext = createContext(initialState);

const AppProvider = ({ children }: Props) => {
    const [state, setState] = useState(initialState);

    const setContext = (updates: Object) => (
        setState({
            ...state,
            ...updates,
        })
    );

    return (
        <AppContext.Provider value={{ ...state, setContext }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppProvider };
export default AppContext;