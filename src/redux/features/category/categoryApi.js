import { api } from "@/redux/api";

const categoryApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCategory: build.query({
      query: () => "/category",
    }),
  }),
  overrideExisting: false,
});

export const { useGetCategoryQuery } = categoryApi;
