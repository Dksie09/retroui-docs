"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

function Page() {
  const router = useRouter();
  return (
    <main className="flex z-10 min-h-screen font-minecraft flex-col w-full gap-10 p-32 ">
      <button
        className="flex w-56 top-5 gap-1 left-8 absolute"
        onClick={() => {
          router.push("/");
        }}
      >
        <Image src="/logo.png" className="" alt="logo" width={20} height={20} />
        <h1 className="font-minecraft-bold">RetroUI</h1>
      </button>
      <div
        className=" p-0 flex cursor-pointer top-5 gap-1 right-8 absolute"
        onClick={() => {
          window.open("https://github.com/Dksie09/RetroUI", "_blank");
        }}
      >
        <div className=" flex items-center justify-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path d="M21 5L20 5 19 5 19 3 18 3 17 3 15 3 15 5 14 5 13 5 13 8 12 8 11 8 11 6 11 5 9 5 9 3 7 3 6 3 5 3 5 5 3 5 3 14 5 14 5 16 7 16 7 18 10 18 10 21 12 21 14 21 14 18 17 18 17 16 19 16 19 14 21 14z"></path>
          </svg>
          Star the repo
        </div>
      </div>
      <div className="">
        <h1 className="font-minecraft-bold text-5xl">Installation</h1>
      </div>
    </main>
  );
}

export default Page;
