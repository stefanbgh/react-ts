import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { helperFilteredProducts } from "../../utils/helpers/helperFilteredProducts";
import { IProduct } from "../../ts/interfaces/IProduct/IProduct";
import { IScreen } from "../../ts/interfaces/IProduct/IScreen";
import { calculationDiscount } from "../../utils/helpers/calculationDiscount";

interface InitialState {
	filteredProducts: IProduct<IScreen | string>[] | [];
	filtersChecked: { [key: string]: boolean };
	filterCurrentPrice: number;
};

const initialState: InitialState = {
	filteredProducts: [],
	filtersChecked: {},
	filterCurrentPrice: 0
};

export const filterProductsSlice = createSlice({
	name: "filter",
	initialState,
	reducers: {
		FILTERED_PRODUCTS: (state, action: PayloadAction<{ products: IProduct<IScreen | string>[], filterName?: string, isChecked?: boolean }>) => {
			const { products, filterName, isChecked } = action.payload;
			const filtersChecked = state.filtersChecked;

			if (isChecked) state.filtersChecked[filterName!] = true;
			else state.filtersChecked[filterName!] = false;

			const filteredProducts = helperFilteredProducts(filtersChecked, products);

			if (filteredProducts.length === 0) {
				state.filteredProducts = products;

				return;
			}

            state.filteredProducts = filteredProducts;
		},
		FILTER_BY_PRICE: (state, action: PayloadAction<{ products: IProduct<IScreen | string>[], price: number, discount: number }>) => {
			const { products, price, discount } = action.payload;

			const filteredByPrice = products.filter(
				(product: IProduct<IScreen | string>) => 
					calculationDiscount(product.price, discount) <= price
			);

			state.filteredProducts = filteredByPrice;
			state.filterCurrentPrice = price;
		},
		RESET_FILTER_CURRENT_PRICE: (state) => {
			state.filterCurrentPrice = 0;
		},
        FILTERS_CHECKED: (state, action: PayloadAction<{ [key: string]: boolean }>) => {
			const { filtersChecked } = action.payload;
			
			state.filtersChecked = {...state.filtersChecked, filtersChecked};
        },
		RESET_FILTERS_CHECKED: (state, action: PayloadAction<{products: IProduct<IScreen | string>[]}>) => {
			const { products } = action.payload;

			state.filtersChecked = {};
			state.filteredProducts = products;
		}
    },
});

export const { FILTERS_CHECKED, RESET_FILTERS_CHECKED, FILTERED_PRODUCTS, FILTER_BY_PRICE, RESET_FILTER_CURRENT_PRICE } = filterProductsSlice.actions;