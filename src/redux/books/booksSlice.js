import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {baseUrl} from '../../API';

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
    tagTypes: ['Plan', 'Read', 'Done'],
    keepUnusedDataFor: 1,
    endpoints: builder => ({
        getPlanBooks: builder.query({
            query: () => 'book/get-status/plan',
            providesTags: ['Plan'],
        }),
        getReadBooks: builder.query({
            query: () => '/get-status/read',
            providesTags: ['Read'],
        }),
        getDoneBooks: builder.query({
            query: () => '/get-status/done',
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
            invalidatesTags: ['Plan', 'Read'],
        }),
    }),
});

export const {
    useGetPlanBooksQuery,
    useGetReadBooksQuery,
    useGetDoneBooksQuery,
    useAddBookMutation,
    useAddPlaningMutation,
} = booksSlice;
