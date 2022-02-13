import axios from "axios";

const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337/api";

export const strapi = axios.create({
  baseURL: STRAPI_URL,
});
