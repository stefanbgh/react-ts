import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import rootAPI from "../features/API/rootAPI";

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(rootAPI.middleware)
	}
});


