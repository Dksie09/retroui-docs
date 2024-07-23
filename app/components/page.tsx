"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "pixel-retroui";
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
      className="flex z-10 min-h-screen font-minecraft flex-col w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
      style={{ backgroundColor: colors.pageBg, color: colors.text }}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <button
            className="flex items-center gap-2 mb-4 sm:mb-0"
            onClick={() => router.push("/")}
          >
            <Image src="/logo.png" alt="logo" width={25} height={25} />
            <h1 className="font-minecraft-bold text-lg sm:text-xl">RetroUI</h1>
          </button>
          <button
            className="flex items-center gap-2 text-sm sm:text-base"
            onClick={() =>
              window.open("https://github.com/Dksie09/RetroUI", "_blank")
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M21 5L20 5 19 5 19 3 18 3 17 3 15 3 15 5 14 5 13 5 13 8 12 8 11 8 11 6 11 5 9 5 9 3 7 3 6 3 5 3 5 5 3 5 3 14 5 14 5 16 7 16 7 18 10 18 10 21 12 21 14 21 14 18 17 18 17 16 19 16 19 14 21 14z"></path>
            </svg>
            Star the repo
          </button>
        </div>

        <div className="mb-8">
          <h1 className="font-minecraft-bold text-3xl sm:text-4xl md:text-5xl mb-4">
            Components
          </h1>
          <p className="text-sm sm:text-base">
            Each component is built to bring nostalgic charm to your modern web
            applications.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div className="flex items-center mb-4 sm:mb-0">
            <img
              src="https://cdn.discordapp.com/emojis/838344630268461066.gif"
              className="cursor-pointer w-24 h-24 sm:w-32 sm:h-32"
              onClick={() => router.push("/installation")}
              alt="setup"
            />
            <div
              onClick={() => router.push("/installation")}
              className={`
                balloon py-1 px-2 cursor-pointer text-center from-left ml-2
                ${
                  theme === "dark"
                    ? "is-dark rounded-corners-dark"
                    : "rounded-corners"
                }
              `}
            >
              <p className="text-xs sm:text-sm">
                Click me
                <br />
                to setup your project
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm sm:text-base mr-2">themes:</span>
            {["pop", "muddy", "light", "dark"].map((themeOption) => (
              <button
                key={themeOption}
                onClick={() => setTheme(themeOption as ThemeOptions)}
                className={`w-6 h-6 rounded-full border ${
                  themeOption === "pop"
                    ? "border-[#fefcd0] bg-[#c381b5]"
                    : themeOption === "muddy"
                    ? "border-[#ddceb4] bg-[#62471f]"
                    : themeOption === "light"
                    ? "border-black bg-[#fffefd]"
                    : "border-white bg-[#000000]"
                }`}
              ></button>
            ))}
          </div>
        </div>

        <ComponentGrid theme={theme} />
      </div>
    </main>
  );
}

export default Page;
