"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "pixel-retroui";
import Navbar from "./components/Navbar";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <main className="flex z-10 min-h-screen flex-col w-full items-center gap-10 px-10 justify-center">
        <div className=" flex flex-col relative items-center">
          <Image
            src="/sparkle.png"
            className="absolute -top-40 md:-right-10 "
            alt="sparkle"
            width={80}
            height={80}
          />
          <Image
            src="/sparkle.png"
            className="absolute md:-bottom-48 md:opacity-100 md:-left-10 opacity-0"
            alt="sparkle"
            width={80}
            height={80}
          />
          <h1 className="md:text-7xl font-minecraft-bold text-5xl text-center">
            Retro UI
          </h1>
          <p className="md:text-2xl text-xl text-center font-minecraft">
            A simple <span className="font-minecraft-bold">pixelated</span> UI
            library.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            bg="#fefcd0"
            shadow="#c381b5"
            className="px-2"
            onClick={() => {
              router.push("/installation");
            }}
          >
            Get Started
          </Button>
          <Button
            className="px-2"
            bg="#c381b5"
            shadow="#fefcd0"
            textColor="#fefcd0"
            onClick={() => {
              window.open("https://github.com/Dksie09/RetroUI", "_blank");
            }}
          >
            GitHub
          </Button>
        </div>
        <div>{/* TODO: add demo components to play around */}</div>
      </main>
    </>
  );
}
