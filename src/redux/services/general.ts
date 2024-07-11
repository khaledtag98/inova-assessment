import { createApi } from "@reduxjs/toolkit/query/react";

import { customBaseQuery as pmsBaseQuery } from "../helpers/baseQuery";

export const generalAPI = createApi({
  reducerPath: "generalAPI",
  refetchOnReconnect: true,
  tagTypes: [],
  baseQuery: pmsBaseQuery,
  endpoints: (build) => ({
    getData: build.query({
      query: (companyID: number) => ({
        url: `/cities/${companyID}`,
        params: { listing: "1" },
      }),
      transformResponse: (res: any) => res.data,
    }),
  }),
});

export const { usegetDataQuery } = generalAPI;
