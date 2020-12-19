import React, { useState } from 'react';
import useToast from '../hooks/use-toast';

export const CartContext = React.createContext({
    orders: [],
    addToCart: (item) => { },
    changeQuantity: (item, count) => { },
    removeFromCart: (item) => { },
    deleteOrder: () => { }
});

export const CartProvider = ({ children }) => {
    const [orders, setOrders] = useState([]);

    return (
        <CartContext.Provider value={{
            orders: orders,
            addToCart: (item) => {
                let orders_ = orders;
                if (orders_.length > 0) {
                    let order_ = orders_[0];
                    let restaurant = order_.restaurant;
                    if (restaurant != item.restaurant) {
                        useToast({
                            type: "error",
                            text1: "Please choose only one restaurant",
                            text2: "You have products from other restaurant in your cart."
                        })
                        return;
                    }
                }

                for (const order_ of orders_) {
                    if (order_.id == item.id) {
                        useToast({
                            type: "info",
                            text1: "This item is already in your cart.",
                            text2: ""
                        });
                        return;
                    }
                }

                orders_.push(item);
                setOrders(orders_);
                useToast({
                    type: "success",
                    text1: "Added to cart.",
                    text2: "Enjoy your food 👋",
                })
            },
            changeQuantity: (item, count) => {
                let orders_ = orders;
                let index = orders_.indexOf(item);
                orders_[index].count = count;
                setOrders(orders_);
            },
            removeFromCart: (item) => {
                let orders_ = orders;
                let index = orders_.indexOf(item);
                orders_.splice(index, 1);
                setOrders(orders_);
            },
            deleteOrder: () => {
                let orders_ = [];
                setOrders(orders_);
                useToast({
                    type: "success",
                    text1: "Order deleted.",
                    text2: "Lets start again. 👋",
                })
            }
        }}>
            {children}
        </CartContext.Provider>
    );
}
