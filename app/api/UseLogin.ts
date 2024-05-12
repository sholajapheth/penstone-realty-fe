import {
  signInWithPopup,
  onAuthStateChanged,
  User,
  AuthError,
} from "firebase/auth";
import { auth, provider } from "../lib/firebase/config";
import Cookies from "js-cookie";
import { axiosForAuth } from "../lib/axios";
import { Login, Register } from "./dtos/Login";

export async function userLogin(data: Login, token: string) {
  const response = await axiosForAuth(token).post("/user/login", { data });

  return response.data;
}

export async function userRegister(data: Register, token: string) {
  const response = await axiosForAuth(token).post("/user/register", { data });

  return response.data;
}
export async function handleSignInAndStoreData(): Promise<void | Error> {
  try {
    const userCredential = await signInWithPopup(auth, provider);
    const user = userCredential.user;

    const token = await user.getIdToken(true);

    Cookies.set("token", token, { expires: 1 });

    if (user.metadata.creationTime !== user.metadata.lastSignInTime) {
      userLogin({ email: user.email }, token).then((response) => {
        console.log(response);
        Cookies.set("jwtToken", response.token);
        Cookies.set("user", JSON.stringify(user), { expires: 5 });
      });
    } else {
      userRegister({ image: user.photoURL, name: user.displayName, email: user.email }, token).then(response => {
        console.log(response.data)
        Cookies.set("jwtToken", response.token)
      })
      Cookies.set("user", JSON.stringify(user), { expires: 5 });
    }
    console.log("User is signed in:", user);
  } catch (error: any) {
    const authError = error as AuthError;
    console.error("Sign-in error:", authError.code, authError.message);
    return error;
  }
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User state change: User is signed in", user);
     Cookies.set("user", JSON.stringify(user), { expires: 5 });
  } else {
    console.log("User state change: User is not signed in");
  }
});
