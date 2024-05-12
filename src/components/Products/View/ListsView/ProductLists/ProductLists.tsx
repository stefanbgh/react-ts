import { FC, useState } from 'react'

import { useAppSelector } from '../../../../../hooks/useAppSelector';
import { RootState } from '../../../../../ts/types/RootState';

import { NothingFound, Pagination, SingleProductList, Spinner } from "../../../.."
import { useAppDispatch } from '../../../../../hooks/useAppDispatch';
import { PAGINATION_CHANGE_PAGE } from '../../../../../features/slices/paginationProductsSlice';
import { loremDesc } from '../../../../../constants/loremDesc';
import { IProduct } from '../../../../../ts/interfaces/IProduct/IProduct';
import { IScreen } from '../../../../../ts/interfaces/IProduct/IScreen';

interface IProps {
    productRoute: string;
}

const ProductLists: FC<IProps> = ({ productRoute }): JSX.Element => {
    const { sortedProducts } = useAppSelector((state: RootState) => state.sorts);
    const { activePage } = useAppSelector((state: RootState) => state.pagination);

    const [ loading, setLoading ] = useState<boolean>(false);

    const dispatch = useAppDispatch();

    const productsPerPage = 5;
    const productsVisible = activePage * productsPerPage;

    const paginationProducts = sortedProducts.slice(
        productsVisible,
        productsVisible + productsPerPage
    );

    const pageCount = Math.ceil(sortedProducts.length / productsPerPage);
    const onPageChange = ({ selected }: { selected: number }) => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            dispatch(PAGINATION_CHANGE_PAGE({ pageNumber: selected }));
            window.scrollTo(0, 0);
        }, 500);
    };

    return (
        <>
            {
                loading
                    ? <Spinner/>
                    : paginationProducts.length > 0 ? (
                    <>
                        {
                            paginationProducts.map((product: IProduct<IScreen | string>) => {
                                const { articleId, articleName, status, colors, price, discount, rating, images, brand, category, quantity } = product;

                                return (
                                    <SingleProductList
                                        key={articleId}
                                        articleId={articleId}
                                        articleName={articleName}
                                        description={loremDesc}
                                        brand={brand}
                                        category={category}
                                        colors={colors}
                                        price={price}
                                        discount={discount}
                                        rating={rating}
                                        status={status}
                                        images={images}
                                        productRoute={productRoute}
                                        quantity={quantity}
                                    />
                                )
                            })
                        }
                        <div className='border-t border-t-gray-400 flex justify-center mx-2 mt-2 w-full'>
                            <Pagination
                                pageCount={pageCount}
                                onPageChange={onPageChange}
                                activePage={activePage}
                            />
                        </div>
                    </>
                ) : <NothingFound/>
            }
        </>
    )
}

export default ProductLists