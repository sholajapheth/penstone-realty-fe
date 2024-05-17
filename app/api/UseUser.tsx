import { axiosWithToken, axiosWithoutToken } from "../lib/axios";
import { Apply } from "./dtos/Apply";
import { Listings } from "./dtos/Listing";
import { SellProperty } from "./dtos/SellProperty";

export async function userApply(data: Apply, token: string) {
  const response = await axiosWithToken(token).post("/user/property/apply", { data });

  return response.data;
}

export async function sellForm(data: SellProperty, token: string) {
  const response = await axiosWithToken(token).post("/user/for-sale", { data });

  return response.data;
}

export async function listings(rank: string | undefined, order: string | undefined, data?: Listings) {
  const response = await axiosWithoutToken().post(
    `/public/properties/all?sortBy=${rank}&order=${order}`,
    data 
  );

  return response.data;
}

export async function singleList(id:string) {
  const response = await axiosWithoutToken().get(
    `/public/properties/${id}`
  );

  return response.data;
}

export async function sendRequest(data: Listings, token: string) {
  const response = await axiosWithToken(token).post(`/user/requests`, { data });

  return response.data;
}
