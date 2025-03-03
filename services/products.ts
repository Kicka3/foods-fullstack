import { ApiRoutes } from "../services/constants";
import { axiosInstance } from "./axios-instance";
import { Product } from "@prisma/client";

export const search = async (query: string): Promise<Product[]> => {
  return (
    await axiosInstance.get<Product[]>(ApiRoutes.SEARCH_PRODUCTS, {
      params: { query },
    })
  ).data;
};
