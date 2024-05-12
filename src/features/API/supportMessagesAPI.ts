import { ISupportMessage } from "../../ts/interfaces/ISupport/ISupportMessage";
import { AddSingleMessageForSupportDTO } from "../../ts/dtos/Support/AddSingleMessageForSupportDTO";
import { UpdateSeenInSingleMessageForSupportDTO } from "../../ts/dtos/Support/UpdateSeenInSingleMessageForSupportDTO";
import { UpdateYourAnswerForSupportMessageDTO } from "../../ts/dtos/Support/UpdateYourAnswerForSupportMessageDTO";
import rootAPI from "./rootAPI";

export const supportMessagesAPI = rootAPI.injectEndpoints({
    endpoints: (builder) => ({
        getAllMessagesForSupport: builder.query<ISupportMessage[], void>({
            query: () => "/support_messages",
            providesTags: ["support-messages"] 
        }),

        getMyMessagesForSupport: builder.query<ISupportMessage[], string>({
            query: () => "/support_messages",
            providesTags: ["support-messages"],
            transformResponse: (response: ISupportMessage[], _queryApi, _arg) => {
                const userId: string = _arg;
                const getMyMessages: ISupportMessage[] = response.filter((message: ISupportMessage) => message.userId === userId);

                return getMyMessages;
            },
        }),

        getSingleMessageForSupport: builder.query<ISupportMessage, number>({
            query: (messageId) => `/support_messages/${messageId}`,
            providesTags: ["support-messages"]
        }),

        addSingleMessageForSupport: builder.mutation<{}, AddSingleMessageForSupportDTO>({
            query: (dto) => ({
                method: "POST",
                url: "/support_messages",
                body: dto
            }),
            invalidatesTags: ["support-messages"]
        }),

        updateSeenInSingleMessageForSupport: builder.mutation<{}, UpdateSeenInSingleMessageForSupportDTO>({
            query: (dto) => ({
                method: "PATCH",
                url: `/support_messages/${dto.messageId}`,
                body: dto
            }),
            invalidatesTags: ["support-messages"]
        }),

        updateYourAnswerForSupportMessage: builder.mutation<{}, UpdateYourAnswerForSupportMessageDTO>({
            query: (dto) => ({
                method: "PATCH",
                url: `/support_messages/${dto.messageId}`,
                body: dto
            }),
            invalidatesTags: ["support-messages"]
        })
    })
})

export const {
    useGetAllMessagesForSupportQuery,
    useGetMyMessagesForSupportQuery,
    useGetSingleMessageForSupportQuery,
    useAddSingleMessageForSupportMutation,
    useUpdateSeenInSingleMessageForSupportMutation,
    useUpdateYourAnswerForSupportMessageMutation
} = supportMessagesAPI;