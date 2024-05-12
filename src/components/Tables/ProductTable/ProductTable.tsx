import { FC, useState, useRef } from "react";

import { AdminSearch, AdminSort, NothingFound, Pagination, Spinner, TableHead, TableRows } from "../../../components"
import { useAppSelector } from "../../../hooks/useAppSelector";
import { RootState } from "../../../ts/types/RootState";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { PAGINATION_CHANGE_PAGE } from "../../../features/slices/paginationProductsSlice";
import { AllProducts } from "../../../ts/types/AllProducts";

interface IProps {
	allProducts: AllProducts[]; 
}

const ProductTable: FC<IProps> = ({ allProducts }): JSX.Element => {
    const { activePage } = useAppSelector((state: RootState) => state.pagination);

	const [ products, setProducts ] = useState<AllProducts[]>(allProducts);
	const [ sortBy, setSortBy ] = useState<string>("all");
    const [ loading, setLoading ] = useState<boolean>(false);

	const searchRef = useRef<HTMLInputElement>(null);

    const dispatch = useAppDispatch();

    const productsPerPage = 5;
    const productsVisible = activePage * productsPerPage;

    const paginationProducts = products.slice(
        productsVisible,
        productsVisible + productsPerPage
    );

    const pageCount = Math.ceil(products.length / productsPerPage);
    const onPageChange = ({ selected }: { selected: number }) => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            dispatch(PAGINATION_CHANGE_PAGE({ pageNumber: selected }));
        }, 500);
    };

	console.log(sortBy);

	return (
		<>
			<div>
				<div className="flex justify-between w-full mb-6">
					<AdminSearch
						allProducts={allProducts}
						setProducts={setProducts}
						searchRef={searchRef}
						setSortBy={setSortBy}
					/>
					<AdminSort
						allProducts={allProducts}
						setProducts={setProducts}
						searchRef={searchRef}
						sortBy={sortBy}
						setSortBy={setSortBy}
					/>
				</div>
				{
					paginationProducts.length > 0 ? (
						<>
							<div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-6">
								<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
									<TableHead
										colOne="Article Name"
										colTwo="Quantity"
										colThree="Category"
										colFour="Price"
									/>
									<tbody>
										<TableRows
											allProducts={paginationProducts}
										/>
									</tbody>
								</table>
							</div>
							<Pagination
								activePage={activePage}
								onPageChange={onPageChange}
								pageCount={pageCount}
							/>
						</>
					) : <div className="border"><NothingFound/></div>
				}
				</div>
			{ loading && <Spinner/> }
		</>
	);
};

export default ProductTable;
