import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(()=>{
        const users = JSON.parse(localStorage.getItem('user'));
        return users || null;
    });
    useEffect(()=>{
        localStorage.setItem('user' , JSON.stringify(user));
    },[user]);
    useEffect(() => {
        (async function fetchUser() {

            const token = localStorage.getItem('authToken');
            console.log("Token" ,token)
            const options ={
                method:"GET",
                headers: { 'UnAuthorization': `Bearer ${token}` }
            }
            const url="http://localhost:5000/user/logged";
            try {
                const resp = await fetch(url ,options);
                if(!resp.ok){
                    throw new Error(`Error in finding token : ${resp.status}`);
                }
                const data = await resp.json();
                console.log("Ye user ka data:" , data)
                setUser(data);
            } catch (err) {
                console.error('Internal Error:' , err);
            }
        })();
      }, []); 

    return (
        <UserContext.Provider value={{ user }}>
            {children}
        </UserContext.Provider>
    );
};
