import { FC, ChangeEvent, RefObject, Dispatch, SetStateAction } from "react";

import { AllProducts } from "../../../ts/types/AllProducts";
import { PAGINATION_RESET_TO_FIRST_PAGE } from "../../../features/slices/paginationProductsSlice";
import { useAppDispatch } from "../../../hooks/useAppDispatch";

interface IProps {
	allProducts: AllProducts[];
	searchRef: RefObject<HTMLInputElement>;
    setProducts: Dispatch<SetStateAction<AllProducts[]>>;
	sortBy: string;
	setSortBy: Dispatch<SetStateAction<string>>;
}

const AdminSort: FC<IProps> = ({ allProducts, searchRef, setProducts, sortBy, setSortBy }): JSX.Element => {
	const dispatch = useAppDispatch();

	const handleSortChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const category = e.target.value;

		dispatch(PAGINATION_RESET_TO_FIRST_PAGE());
        setSortBy(category);

		if (category === "all") {
			setProducts(allProducts);

			return;
		}

        const sortedProducts = allProducts.filter((product: AllProducts) => product.category === category);
        setProducts(sortedProducts);
		searchRef.current!.value = "";
	};

	return (
		<div className="flex items-center">
			<p>Sort by: </p>
			<select
				className="ml-2 py-0.5 px-1 border border-gray-400 cursor-pointe bg-transparent cursor-pointer"
				id="sortProducts"
				onChange={handleSortChange}
				value={sortBy}
			>
				<option value="all">All</option>
				<option value="phones">Phones</option>
				<option value="tablets">Tablets</option>
				<option value="laptops">Laptops</option>
				<option value="televisions">Televisions</option>
			</select>
		</div>
	);
};

export default AdminSort;
