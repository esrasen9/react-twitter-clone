import React from 'react';

export const Context = React.createContext(null);

const Provider = ({children}) => {
    const store = {
    }
    return (
        <Context.Provider value={store}>
            {children}
        </Context.Provider>
    )
}

export default Provider;