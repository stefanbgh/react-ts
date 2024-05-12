import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { televisionsAPI } from "../API/televisionsAPI";
import { IProduct } from "../../ts/interfaces/IProduct/IProduct";

interface InitialState {
	televisions: IProduct<string>[];
};

const initialState: InitialState = {
	televisions: [],
};

export const televisionsSlice = createSlice({
	name: "televisions",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addMatcher(televisionsAPI.endpoints.getTelevisions.matchFulfilled, (state, action: PayloadAction<IProduct<string>[]>) => {
			state.televisions = action.payload;
		});
	},
});