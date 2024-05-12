import { IAllProducts } from "../../ts/interfaces/IAllProducts/IAllProducts";
import rootAPI from "./rootAPI";

export const allProductsAPI = rootAPI.injectEndpoints({
    endpoints: (builder) => ({
        getAllProducts: builder.query<IAllProducts[], void>({
            query: () => "/all_products",
            providesTags: ["all-products"]
        }),
    })
})

export const {
    useGetAllProductsQuery
} = allProductsAPI;