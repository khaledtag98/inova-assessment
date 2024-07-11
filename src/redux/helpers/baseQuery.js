import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { buildURLQueryParams } from "../../helpers/routing";
import { API_URL } from "../../config";

const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;

    headers.set("authorization", `Bearer ${token}`);

    return headers;
  },
  paramsSerializer: buildURLQueryParams,
});

export const customBaseQuery = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  return result;
};
