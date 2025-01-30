import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AddressContext } from '../context/AddressContext';
const AddressCard = ({ address, isDefault, onDelete }) => {
    const handleDelete = async () => {
        const url = `http://localhost:5000/address/delete/${address._id}?_method=DELETE`; // Add query parameter _method=DELETE
        const options = {
            method: "POST", // Use POST method to send the _method query parameter
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ _id: address._id }),
        };
    
        try {
            const resp = await fetch(url, options);
            if (!resp.ok) {
                throw new Error(`HTTP error: ${resp.status}`);
            }
    
            const data = await resp.json();
            console.log(data);
            onDelete(address._id);
        } catch (err) {
            console.error('Error deleting address:', err);
        }
    };
    

    return (
        <div className={`border p-4 rounded-md shadow-md ${isDefault ? 'border-blue-500' : 'border-gray-300'}`}>
            {isDefault && <span className="text-sm text-blue-500 font-semibold">Default</span>}
            <h2 className="font-bold text-lg">{address.fullName}</h2>
            <p>{address.street}</p>
            <p>{address.city}, {address.state} {address.pinCode}</p>
            <p>{address.country}</p>
            <p className="mt-2">Phone number: {address.mobileNumber1}</p>
            <div className="mt-4 flex space-x-4">
                <button className="text-blue-600 hover:underline">Edit</button>
                <button className="text-red-600 hover:underline" onClick={handleDelete}>Remove</button>
                {!isDefault && <button className="text-green-600 hover:underline">Set as Default</button>}
            </div>
        </div>
    );
};

const AddressList = () => {
   const addresses =  useContext(AddressContext);
   const setAddresses = useContext(AddressContext);
    const handleDelete = (id) => {
        setAddresses(addresses.filter(address => address._id !== id));
    };

    // useEffect(() => {
    //     async function fetchAddress() {
    //         const url = "http://localhost:5000/address/all";
    //         const options = {
    //             method: 'GET',
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //         };

    //         try {
    //             const resp = await fetch(url, options);
    //             if (!resp.ok) {
    //                 throw new Error(`HTTP error: ${resp.status}`);
    //             }
    //             const data = await resp.json();
    //             const {address} = data;
    //             setAddresses(address); 
    //         } catch (err) {
    //             console.error('Error fetching addresses:', err);
    //         }
    //     }

    //     fetchAddress();
    // }, []);

    return (
        <div className="max-w-5xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">Your Addresses</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="border-dashed border-2 border-gray-300 rounded-md flex items-center justify-center text-gray-400">
                    <Link to="/addaddress">
                        <button className="text-lg">+ Add address</button>
                    </Link>
                </div>
                {addresses.map((address) => (
                    <AddressCard key={address._id} address={address} isDefault={address.isDefault} onDelete={handleDelete} />
                ))}
            </div>
        </div>
    );
};


export default AddressList;
