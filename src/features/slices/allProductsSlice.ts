import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { allProductsAPI } from "../API/allProductsAPI";
import { IAllProducts } from "../../ts/interfaces/IAllProducts/IAllProducts";
import { AllProducts } from "../../ts/types/AllProducts";

interface InitialState {
	allProducts: AllProducts[];
};

const initialState: InitialState = {
	allProducts: [],
};

export const allProductsSlice = createSlice({
	name: "all-products",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addMatcher(allProductsAPI.endpoints.getAllProducts.matchFulfilled, (state, action: PayloadAction<IAllProducts[]>) => {
			const { phones, tablets, laptops, televisions } = action.payload[0];

			state.allProducts = [...phones, ...tablets, ...laptops, ...televisions];
		});
	},
});