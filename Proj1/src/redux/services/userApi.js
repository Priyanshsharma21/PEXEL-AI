import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseUrl = 'https://instagram130.p.rapidapi.com'


export const userApi = createApi({
    reducerPath : 'userApi',
    baseQuery : fetchBaseQuery({
        baseUrl : baseUrl,
        prepareHeaders : (headers)=>{
            headers.set('X-RapidAPI-Key',
            'c4f5254226msh10570caa9c1f5f8p1def93jsnb6055c72ecd0')
            return headers;
        }
    }),
    
    endpoints : (builder)=>({
        getUserData : builder.query({query : ({q})=>`/account-info?username=${q}` }),
    })
})

export const { useGetUserDataQuery } = userApi

