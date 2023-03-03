import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Products {
    products: object[]
}

export const productsSlice = createApi({
    reducerPath: 'product',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000',
        // prepareHeaders(headers) {
        //     headers.set('X-Shopify-Access-Token', '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')
        // }
    }),
    endpoints(builder) {
        return {
            fetchProducts: builder.query<Products, void>({
                query() {
                    return {
                        url: `/fetch/get`,
                        // When performing a mutation, you typically use a method of
                        // PATCH/PUT/POST/DELETE for REST endpoints
                        method: 'POST',
                        // fetchBaseQuery automatically adds `content-type: application/json` to
                        // the Headers and calls `JSON.stringify(patch)`
                        body: {
                            "url": "https://luhh-2842.myshopify.com/admin/api/2023-01/products.json",
                            "headers": {
                                "X-Shopify-Access-Token": "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"
                            }
                        },
                    }
                },
            }),
        };
    },
});

export const { useFetchProductsQuery } = productsSlice;
export default productsSlice.reducer; 
