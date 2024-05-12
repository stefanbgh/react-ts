import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { phonesAPI } from './../API/phonesAPI';
import { IProduct } from "../../ts/interfaces/IProduct/IProduct";
import { IScreen } from "../../ts/interfaces/IProduct/IScreen";

interface InitialState {
	phones: IProduct<IScreen>[];
};

const initialState: InitialState = {
	phones: [],
};

export const phonesSlice = createSlice({
	name: "phones",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addMatcher(phonesAPI.endpoints.getPhones.matchFulfilled, (state, action: PayloadAction<IProduct<IScreen>[]>) => {
			state.phones = action.payload;
		});
	},
});