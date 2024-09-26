import React, { createContext, useState } from 'react';

// Create context
export const AuthContext = createContext();

// Context provider
export const AuthProvider = ({ children }) => {
    const [detail, setDetail] = useState('');

    const addDetail = (email) => {
        setDetail(email);
    };

    return (
        <AuthContext.Provider value={{ detail, addDetail }}>
            {children}
        </AuthContext.Provider>
    );
};
