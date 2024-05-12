import { IAddToCart } from "../../ts/interfaces/ICart/IAddToCart";
import { ICart } from "../../ts/interfaces/ICart/ICart";
import rootAPI from "./rootAPI";

export const cartAPI = rootAPI.injectEndpoints({
    endpoints: (builder) => ({
        getAllCarts: builder.query<ICart[], void>({
            query: () => "/cart",
            providesTags: ["cart"]
        }),

        addToCart: builder.mutation<ICart, IAddToCart>({
            query: (dto) => ({
                method: "POST",
                url: "/cart",
                body: dto
            }),
            invalidatesTags: ["cart"]
        }),

        deleteFromCart: builder.mutation<{ success: true }, number>({
            query: (cartId) => ({
                method: "DELETE",
                url: `/cart/${cartId}`
            }),
            invalidatesTags: ["cart"]
        })
    })
})

export const {
    useGetAllCartsQuery,
    useAddToCartMutation,
    useDeleteFromCartMutation
} = cartAPI;