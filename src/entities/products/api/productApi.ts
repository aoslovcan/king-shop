import { baseApi, PRODUCT_TAG } from "shared/api";
import { mergeRTKCache } from "../model/meargeRTK.ts";
import {Categories, DataWithMeta, Product} from "../model/types.ts";

export const productApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getProducts: build.query<
            DataWithMeta<Product>,
            Array<Product>
        >({
            query: (params) => ({
                url: `/products`,
                method: 'GET',
                params: params,
            }),
            serializeQueryArgs: ({ endpointName }) => {
                return endpointName;
            },
            merge: (currentCache, newItems, { arg }) => {
                mergeRTKCache(currentCache, newItems, arg);
            },
            providesTags: [PRODUCT_TAG],
            // Refetch when the page arg changes
            forceRefetch({ currentArg, previousArg }) {
                return currentArg !== previousArg;
            },
        }),

        searchForProduct: build.query<
            DataWithMeta<Product>,
            Array<Product>
        >({
            query: (params) => ({
                url: `/products/search`,
                method: 'GET',
                params: params,
            }),
        }),

        getCategories: build.query<
            Array<Categories>
        >({
            query: () => ({
                url: `/products/categories`,
                method: 'GET',
            }),
        }),
    }),
});

// Correctly export the hook for the query
export const { useGetProductsQuery, useSearchForProductQuery, useGetCategoriesQuery } = productApi;
