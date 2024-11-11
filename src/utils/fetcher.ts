import axios from "axios";
import { Car } from "@/models/car";
import { PaginatedResponse } from "./paginatedResponse";

export const fetcher = async (url: string): Promise<PaginatedResponse<Car>> => {
  const res = await axios(url);
  return res.data;
};
