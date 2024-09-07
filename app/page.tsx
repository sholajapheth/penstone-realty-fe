"use client";
import { NewsLetter } from "@/components/common";
import {
  HotListings,
  Landing,
  Offers,
  Services,
  Showcase,
} from "@/components/home";

export default function Home() {


  return (
    <main>
      <Landing />
      <Showcase />
      <HotListings />
      <Services />
      <Offers />
      <NewsLetter />
    </main>
  );
}
