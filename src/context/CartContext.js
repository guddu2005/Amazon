import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

// Create the CartContext
export const CartContext = createContext();

// CartProvider component
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Function to add a product to the cart
    const addToCart = async (cartItem) => {
        const url = "http://localhost:5000/cart/add";
        const options = {
            method: "POST",
            headers: {
                'Content-Type': "application/json", 
            },
            body: JSON.stringify({
                userId: cartItem.userId,
                productId: cartItem.productId,
                quantity: cartItem.quantity
            })
        };
    
        try {
            const resp = await fetch(url, options);
            console.log("resp of cart", resp);
            if (!resp.ok) {
                // Throwing a more informative error
                throw new Error(`Error ${resp.status}: ${resp.statusText}`);
            }
            const data = await resp.json();
            console.log("Product added to cart", data);
        } catch (error) {
            console.error('Error adding product to cart:', error);
        }
    };

    // Function to remove a product from the cart
    const removeFromCart = async (userId, productId) => {
        try {
            const response = await axios.delete('http://localhost:3000/cart/delete', {
                data: {
                    userId,
                    productId
                }
            });
            setCart(response.data.items); // Assuming the response contains the updated cart items
        } catch (error) {
            console.error('Error removing product from cart:', error);
            // Handle error as needed
        }
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};