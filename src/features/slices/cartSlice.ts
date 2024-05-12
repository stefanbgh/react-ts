import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { cartAPI } from "../API/cartAPI";
import { ICart } from "../../ts/interfaces/ICart/ICart";

interface InitialState {
    cart: ICart[];
    myCart: ICart[];
    totalAmount: number;
}

const initialState: InitialState = {
    cart: [],
    myCart: [],
    totalAmount: 0
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
            MY_CART: (state, action: PayloadAction<ICart[]>) => {
                state.myCart = action.payload;
            },
            UPDATE_SINGLE_ARTICLE: (state, action: PayloadAction<{cartId: number, count: number, price?: number}>) => {
                const { cartId, count, price } = action.payload;

                state.myCart = state.myCart.map((myCart: ICart) => {
                    if (myCart.cartId === cartId) {
                        return {
                            ...myCart,
                            count,
                            totalPrice: price ? price * count : myCart.price
                        };
                    };

                    return myCart;
                });
            },
            UPDATE_TOTAL_AMOUNT: (state, action: PayloadAction<ICart[]>) => {
                const myCart = action.payload;
                
                state.totalAmount = myCart
                                        .map(({ totalPrice }) => totalPrice)
                                        .reduce((prev, next) => prev + next);
            },
            RESET_TOTAL_AMOUNT: (state) => {
                state.totalAmount = 0;
            }
    },
    extraReducers: (builder) => {
		builder.addMatcher(cartAPI.endpoints.getAllCarts.matchFulfilled, (state, action: PayloadAction<ICart[]>) => {
			state.cart = action.payload;
		});
	},
})

export const { MY_CART, UPDATE_SINGLE_ARTICLE, UPDATE_TOTAL_AMOUNT, RESET_TOTAL_AMOUNT } = cartSlice.actions;