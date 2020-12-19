import React, { useState } from 'react';
import useToast from '../hooks/use-toast';

export const CartContext = React.createContext({
    orders: [],
    addToCart: (item) => { },
    changeQuantity: (item, count) => { },
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
            changeQuantity: async (item, count) => {
                let orders_ = orders;
                let index = orders_.indexOf(item);
                orders_[index].count = count;
                setOrders(orders_);
            },
            removeFromCart: async (item) => {
                let orders_ = orders;
                let index = orders_.indexOf(item);
                orders_.splice(index, 1);
                setOrders(orders_);
            }
        }}>
            {children}
        </CartContext.Provider>
    );
}
