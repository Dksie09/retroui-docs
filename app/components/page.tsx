"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "pixel-retroui";
import React, { useState, useEffect } from "react";
import ComponentGrid from "./ComponentGrid";
import { ThemeOptions, themeColors } from "../themes";

function Page() {
  const router = useRouter();
  const [theme, setTheme] = useState<ThemeOptions>("pop");
  const colors = themeColors[theme];

  useEffect(() => {
    document.body.style.backgroundColor = colors.pageBg;
    document.body.style.color = colors.text;
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, [colors.pageBg, colors.text]);

  return (
    <main
      className="flex z-10 min-h-screen font-minecraft flex-col w-full gap-10 p-10 xl:p-32  bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
      style={{ backgroundColor: colors.pageBg, color: colors.text }}
    >
      <button
        className="flex w-56 top-5 gap-1 left-8 absolute"
        onClick={() => {
          router.push("/");
        }}
      >
        <Image src="/logo.png" className="" alt="logo" width={25} height={25} />
        <h1 className="font-minecraft-bold">RetroUI</h1>
      </button>
      <div
        className="p-0 flex cursor-pointer top-5 gap-1 right-8 absolute"
        onClick={() => {
          window.open("https://github.com/Dksie09/RetroUI", "_blank");
        }}
      >
        <div className="flex items-center justify-center gap-1">
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
        <h1 className="font-minecraft-bold text-5xl">Components</h1>

        <p className="mt-2">
          Each component is built to bring nostalgic charm to your modern web
          applications.
        </p>
        <div className="sm:flex mt-8 justify-between">
          <div className=" flex">
            <img
              src="https://cdn.discordapp.com/emojis/838344630268461066.gif"
              className="cursor-pointer"
              onClick={() => {
                router.push("/installation");
              }}
              alt="logo"
            />
            <div
              className={`
    nes-balloon h-16 py-1 text-center from-left 
    ${
      String(theme) === "dark"
        ? "is-dark rounded-corners-dark"
        : "rounded-corners"
    }
  `}
            >
              <p>
                Click me
                <br /> to setup your project
              </p>
            </div>
          </div>

          <div className="flex gap-2 sm:mt-0 mt-5">
            themes:
            <button
              onClick={() => setTheme("pop")}
              id="pop"
              className="p-3 h-1 rounded-full border border-[#fefcd0] bg-[#c381b5]"
            ></button>
            <button
              onClick={() => setTheme("muddy")}
              id="muddy"
              className="p-3 h-1 rounded-full border border-[#ddceb4] bg-[#62471f]"
            ></button>
            <button
              onClick={() => setTheme("light")}
              id="light"
              className="p-3 h-1 rounded-full border border-black bg-[#fffefd]"
            ></button>
            <button
              onClick={() => setTheme("dark")}
              id="dark"
              className="p-3 h-1 rounded-full border border-white bg-[#000000]"
            ></button>
          </div>
        </div>
        <div className="flex mt-10">
          <ComponentGrid theme={theme} />
        </div>
      </div>
    </main>
  );
}

export default Page;
