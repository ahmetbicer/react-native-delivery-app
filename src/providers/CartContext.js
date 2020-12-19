import React, { useState } from 'react';
import useToast from '../hooks/use-toast';

export const CartContext = React.createContext({
    orders: [],
    addToCart: (item) => { },
    removeFromCart: (item) => { },
});

export const CartProvider = ({ children }) => {
    const [orders, setOrders] = useState([]);

    return (
        <CartContext.Provider value={{
            orders: orders,
            addToCart: async (item) => {
                let orders_ = orders;
                let index = orders_.indexOf(item);
                if (index == -1) {
                    orders_.push(item);
                    setOrders(orders_);
                    useToast("Added to cart.")
                }
                else {
                    useToast("This item is already in cart.");
                }
            },
            removeFromCart: async (item) => {
                console.log("cartcontext-r", item);
            }
        }}>
            {children}
        </CartContext.Provider>
    );
}
