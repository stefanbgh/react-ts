import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { tabletsAPI } from "../API/tabletsAPI";
import { IProduct } from "../../ts/interfaces/IProduct/IProduct";
import { IScreen } from "../../ts/interfaces/IProduct/IScreen";

interface InitialState {
	tablets: IProduct<IScreen>[];
};

const initialState: InitialState = {
	tablets: [],
};

export const tabletsSlice = createSlice({
	name: "tablets",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addMatcher(tabletsAPI.endpoints.getTablets.matchFulfilled, (state, action: PayloadAction<IProduct<IScreen>[]>) => {
			state.tablets = action.payload;
		});
	},
});