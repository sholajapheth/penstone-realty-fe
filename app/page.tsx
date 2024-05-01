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

export default function Home() {
  // const router = useRouter();

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
