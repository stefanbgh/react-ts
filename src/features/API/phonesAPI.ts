import { IProduct } from "../../ts/interfaces/IProduct/IProduct";
import { IScreen } from "../../ts/interfaces/IProduct/IScreen";
import rootAPI from "./rootAPI";

export const phonesAPI = rootAPI.injectEndpoints({
    endpoints: (builder) => ({
        getPhones: builder.query<IProduct<IScreen>[], void>({
            query: () => "/phones",
            providesTags: ["phones"],
        }),
        
        getSinglePhone: builder.query<IProduct<IScreen>, number>({
            query: (id) => `/phones/${id}`,
            providesTags: ["phone"]
        }),
    })
})

export const {
    useGetPhonesQuery,
    useGetSinglePhoneQuery
} = phonesAPI;