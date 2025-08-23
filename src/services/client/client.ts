import { PRODUCTS_URL } from "@/utils/utils";
import axios from "axios";

export const productsApi = axios.create({
  baseURL: PRODUCTS_URL,
});
