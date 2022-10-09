import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../../API';

export const booksSlice = createApi({
    reducerPath: 'books',
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: (headers, { getState }) => {
            const token = getState().auth.token;

            // If we have a token set in state, let's assume that we should be passing it.
            if (token) {
                headers.set('authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    tagTypes: ['Plan', 'Read', 'Done', 'Planning'],
    keepUnusedDataFor: 3000,
    endpoints: builder => ({
        getPlanBooks: builder.query({
            query: () => 'book/get-status/plan',
            providesTags: ['Plan'],
        }),
        getReadBooks: builder.query({
            query: () => 'book/get-status/read',
            providesTags: ['Read'],
        }),
        getDoneBooks: builder.query({
            query: () => 'book/get-status/done',
            providesTags: ['Done'],
        }),
        addBook: builder.mutation({
            query: book => ({
                url: '/book',
                method: 'POST',
                body: book,
            }),
            invalidatesTags: ['Plan'],
        }),
        addPlaning: builder.mutation({
            query: planing => ({
                url: '/user/planning',
                method: 'POST',
                body: planing,
            }),
            invalidatesTags: ['Plan', 'Read', 'Planning'],
        }),
        getPlanning: builder.query({
            query: () => ({
                url: '/user/planning',
                invalidatesTags: ['Planning'],
            }),
        }),
        addBookReview: builder.mutation({
            query: review => {
                const { rating, id, resume } = review;
                const response = {
                    rating,
                    resume,
                };
                return {
                    url: `/book/${id}`,
                    method: 'PUT',
                    body: response,
                };
            },
            invalidatesTags: ['Done'],
        }),
        addUpdateStatistic: builder.mutation({
            query: info => {
                return {
                    url: `/user/planning`,
                    method: 'PATCH',
                    body: info,
                };
            },
            invalidatesTags: ['Planning'],
        }),
    }),
});

export const {
    useGetPlanBooksQuery,
    useGetReadBooksQuery,
    useGetDoneBooksQuery,
    useGetPlanningQuery,
    useAddBookMutation,
    useAddPlaningMutation,
    useAddBookReviewMutation,
    useAddUpdateStatisticMutation,
} = booksSlice;
