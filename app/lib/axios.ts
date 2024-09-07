import axios from "axios";

export const axiosWithoutToken = () => axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export const axiosWithToken = (token: string) =>
    axios.create({
        baseURL: process.env.NEXT_PUBLIC_BASE_URL,
        headers: {
            "Content-Type": "application/json",
            Authorization: token,
        },
    });

export const axiosForAuth = (token?: string) =>
    axios.create({
        baseURL: process.env.NEXT_PUBLIC_BASE_URL,
        headers: {
            "Content-Type": "application/json",
            "firebase-id-token": token,
        },
    });
