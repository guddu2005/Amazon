import React, { createContext , useEffect , useState } from 'react';
export const AddressContext = createContext();

export const AddressProvider =({children})=>{
    const [addresses, setAddresses] = useState([]);
    useEffect(() => {
        async function fetchAddress() {
            const url = "http://localhost:5000/address/all";
            const options = {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                },
            };

            try {
                const resp = await fetch(url, options);
                if (!resp.ok) {
                    throw new Error(`HTTP error: ${resp.status}`);
                }
                const data = await resp.json();
                const {address} = data;
                setAddresses(address); 
            } catch (err) {
                console.error('Error fetching addresses:', err);
            }
        }

        fetchAddress();
    }, []);

    return(
        <AddressContext.Provider value={addresses}>
            {children}
        </AddressContext.Provider>
    )
}