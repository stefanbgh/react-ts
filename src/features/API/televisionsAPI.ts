import { IProduct } from "../../ts/interfaces/IProduct/IProduct";
import rootAPI from "./rootAPI";

export const televisionsAPI = rootAPI.injectEndpoints({
    endpoints: (builder) => ({
        getTelevisions: builder.query<IProduct<string>[], void>({
            query: () => "/televisions",
            providesTags: ["televisions"],
        }),
        
        getSingleTelevision: builder.query<IProduct<string>, number>({
            query: (id) => `/televisions/${id}`,
            providesTags: ["television"]
        })
    })
})

export const {
    useGetTelevisionsQuery,
    useGetSingleTelevisionQuery
} = televisionsAPI;