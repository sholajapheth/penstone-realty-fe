import { axiosWithToken } from "../lib/axios";
import { Apply } from "./dtos/Apply";

export async function userApply(data: Apply, token: string) {
  const response = await axiosWithToken(token).post("/user/apply", { data });

  return response.data;
}