import { IProduct } from "../../ts/interfaces/IProduct/IProduct";
import rootAPI from "./rootAPI";

export const laptopsAPI = rootAPI.injectEndpoints({
    endpoints: (builder) => ({
        getLaptops: builder.query<IProduct<string>[], void>({
            query: () => "/laptops",
            providesTags: ["laptops"],
        }),
        
        getSingleLaptop: builder.query<IProduct<string>, number>({
            query: (id) => `/laptops/${id}`,
            providesTags: ["laptop"]
        }),
    })
})

export const {
    useGetLaptopsQuery,
    useGetSingleLaptopQuery
} = laptopsAPI;