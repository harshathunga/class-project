import React, { createContext, useState } from "react";

export const AuthContext = createContext();


export const AuthProvider = ({children})=>{
    const [user, setUser] = useState(null);
    const[napi, setnapi] = useState(null);
    return(

        <AuthContext.Provider value={{ user, setUser,napi, setnapi }}>
            {children}
            </AuthContext.Provider>
        );
    };