import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { laptopsAPI } from "../API/laptopsAPI";
import { IProduct } from "../../ts/interfaces/IProduct/IProduct";

interface InitialState {
	laptops: IProduct<string>[];
};

const initialState: InitialState = {
	laptops: [],
};

export const laptopsSlice = createSlice({
	name: "laptops",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addMatcher(laptopsAPI.endpoints.getLaptops.matchFulfilled, (state, action: PayloadAction<IProduct<string>[]>) => {
			state.laptops = action.payload;
		});
	},
});