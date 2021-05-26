import React, { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            const newTotalAmount = state.totalAmount + action.item.price * action.item.amount;

            const existingCartItemIndex = state.items.findIndex(
                item => item.id === action.item.id
            );
            const existingCartItem = state.items[existingCartItemIndex];
            let updatedItems;
            
            if(existingCartItem) {
                const updatedItem = {
                    ...existingCartItem,
                    amount: existingCartItem.amount + action.item.amount
                };
                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem;
            }
            else {
                updatedItems = state.items.concat(action.item);
            }

            return {
                items: updatedItems,
                totalAmount: newTotalAmount
            };

        case 'REMOVE':
            const existingCartItemIndexRem = state.items.findIndex(
                item => item.id === action.id
            );
            const existingItem = state.items[existingCartItemIndexRem];
            const newTotalAmountRem = state.totalAmount - existingItem.price;

            let updatedItemsRem;
            if(existingItem.amount === 1){
                updatedItemsRem = state.items.filter(item => item.id !== action.id);
            }
            else {
                const updatedItem = {
                    ...existingItem,
                    amount: existingItem.amount - 1
                };
                updatedItemsRem = [...state.items];
                updatedItemsRem[existingCartItemIndexRem] = updatedItem;
            }

            return {
                items: updatedItemsRem,
                totalAmount: newTotalAmountRem
            };

        default: return defaultCartState;
    }
};

const CartProvider = props => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item) => {
        dispatchCartAction({
            type: 'ADD',
            item: item
        });
    };

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({
            type: 'REMOVE',
            id: id
        });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;