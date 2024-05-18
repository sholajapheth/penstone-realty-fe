"use client";
import { NewsLetter } from "@/components/common";
import {
  HotListings,
  Landing,
  Offers,
  Services,
  Showcase,
} from "@/components/home";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Cookies from "js-cookie";

export default function Home() {
  // const router = useRouter();

    useEffect(() => {
  Cookies.remove('userUser')
  Cookies.remove('token')
  Cookies.remove('userJwtToken')
    }, [])

  return (
    <main>
      {/* home */}
      <Landing />
      <Showcase />
      <HotListings />
      <Services />
      <Offers />
      <NewsLetter />
    </main>
  );
}
