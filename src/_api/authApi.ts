import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {EndpointBuilder} from "@reduxjs/toolkit/dist/query/endpointDefinitions";

export const authApi = createApi({
    reducerPath: "authApi",
    tagTypes: ['auth'],
    baseQuery: fetchBaseQuery({
        baseUrl: `http://localhost:5000/api/`
    }),
    endpoints: (build) => ({
        login: build.query({
            query: (data) => ({
                url: 'login',
                method: "POST",
            })
        }),
        registration: build.query({
            query: (data) => ({
                url: 'registration',
                method: "POST",
            })
        }),
    })
})