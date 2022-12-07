import React, { createContext } from 'react';

//globally create an authContext like this and export it
export const authContext = createContext();

const AuthProvider = ({ children }) => {

    const me = { age: 25, hight: 5.6 }

    const authInfo = {me}
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;