import {createApi,fetchBaseQuery}  from "@reduxjs/toolkit/query/react";
/*
using Redux Toolkit Query to manilulate state ;) :)
*/
export const api = createApi({

baseQuery: fetchBaseQuery({baseUrl: "http://localhost:5001"}), 
reducerPath:"adminApi", 
tagTypes: ["Products","ProductStats","ProductsStat","Customers","Transactions","Kpis","GeneralStats","RecentTransac"], 
endpoints: (build)=>({

getKpis: build.query({


  query: ()=>"api/kpis", 
  providesTags: ["Kpis"]

}),

getProducts: build.query({

  query: ()=> "api/products", 
  providesTags: ["Products"]

}), 
getProductStats: build.query({

 query: ()=>"api/productstats", 
 providesTags: ["ProductStats"]

}), 
getCustomers: build.query({


  query: ()=> "api/customers", 
  providesTags: ["Customers"]

}),
getTransactions: build.query({
 
  query: ()=>"api/transactions", 
  providesTags: ["Transactions"]

}),
getWithStat: build.query({


  query: ()=> "api/client/products", 

   providesTags: ["ProductsStat"]
}), 

getGeneralStats: build.query({

    query: ()=> "api/generalstats", 
    providesTags:["GeneralStats"]
}), 
getRecentTransac: build.query({


    query: ()=> "api/recentTransactions", 
    providesTags: ["RecentTransac"]
})


})

})


export const {


useGetProductsQuery, 
useGetProductStatsQuery,
useGetWithStatQuery,
useGetCustomersQuery, 
useGetTransactionsQuery, 
useGetKpisQuery, 
useGetGeneralStatsQuery, 
useGetRecentTransacQuery
} = api;



