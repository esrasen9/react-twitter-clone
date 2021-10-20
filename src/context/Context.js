import React, {useState} from 'react';

export const Context = React.createContext(null);

const Provider = ({children}) => {
    const [posts,setPosts] = useState([]);

    const store = {
        postState:{posts,setPosts}
    }
    return (
        <Context.Provider value={store}>
            {children}
        </Context.Provider>
    )
}

export default Provider;