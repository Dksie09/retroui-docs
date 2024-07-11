"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Card } from "pixel-retroui";
import React, { useState, useEffect, useRef } from "react";
import CopyableCode from "../components/CopyableCode";

function Page() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("");
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (index: any) => {
    setOpenItem(openItem === index ? null : index);
  };

  const sections = [
    { id: "initialize", title: "Initialize" },
    { id: "installation", title: "Installation" },
    { id: "configuration", title: "Configuration" },
    { id: "basic-usage", title: "Basic Usage" },
    { id: "customization", title: "Customization" },
    { id: "troubleshooting", title: "Troubleshooting" },
    { id: "next-steps", title: "Next Steps" },
  ];

  const troubleshootingItems = [
    {
      title: "Fonts not loading",
      content: (
        <>
          Ensure the paths to the font files are correct and that you&apos;ve
          imported the CSS file.
          <br /> Use{" "}
          <span className="font-mono bg-gray-200 p-1 rounded-md">
            font-minecraft
          </span>{" "}
          and{" "}
          <span className="font-mono bg-gray-200 p-1 rounded-md">
            font-minecraft-bold
          </span>{" "}
          to add minecraft font to your text.
        </>
      ),
    },
    {
      title: "Components not styled correctly",
      content:
        "Make sure you've imported the library's CSS file and that it's not being overridden by other styles.",
    },
    {
      title: "Tailwind classes not working",
      content: (
        <>
          Ensure that you have added{" "}
          <span className="font-mono bg-gray-200 p-1 rounded-md">
            important: true
          </span>{" "}
          in tailwind.config.ts.
        </>
      ),
    },
  ];

  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    observerRef.current = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observerRef.current?.observe(element);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <main className="flex min-h-screen font-minecraft flex-col w-full gap-5 p-8 lg:p-16 xl:p-32 relative overflow-hidden">
      {/* Background div */}
      <div
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage:
            "url('https://tse1.mm.bing.net/th?id=OIP.3TCx9qKNvsGIehvF4OZWlwHaFu&pid=15.1')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
        }}
      ></div>
      <button
        className="flex w-56 top-2 md:top-5 gap-1 left-2 md:left-8 absolute"
        onClick={() => {
          router.push("/");
        }}
      >
        <Image src="/logo.png" className="" alt="logo" width={20} height={20} />
        <h1 className="font-minecraft-bold">RetroUI</h1>
      </button>
      <div
        className="p-0 flex cursor-pointer top-2 md:top-5 gap-1 right-2 md:right-8 absolute"
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
          <span className="hidden sm:inline">Star the repo</span>
        </div>
      </div>
      <p
        className="top-14 md:top-[5vw] left-[5vw] md:left-20 absolute cursor-pointer"
        onClick={() => {
          router.push("/components");
        }}
      >
        {" "}
        {"<"} Back
      </p>

      {/* ------------------------------------------ */}
      <div className="hidden lg:block fixed right-4 top-1/2 transform z-50 -translate-y-1/2 bg-white p-4 rounded-lg shadow-md">
        <h2 className="font-minecraft-bold mb-2">Index</h2>
        <ul>
          {sections.map((section) => (
            <li key={section.id} className="mb-2">
              <button
                onClick={() => scrollToSection(section.id)}
                className={`text-left ${
                  activeSection === section.id ? "font-bold text-blue-500" : ""
                }`}
              >
                {section.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {/* ------------------------------------------ */}

      <div className="mt-16 md:mt-0 z-10">
        <h1 className="font-minecraft-bold text-3xl md:text-5xl">Setup</h1>
        <p className="mt-2 md:mt-4 text-sm md:text-base">
          Get started with RetroUI in just a few simple steps.
        </p>

        <hr className="mt-6 mb-6 md:mt-10 md:mb-10 h-2" color="black" />
        <div className="mt-6 md:mt-10">
          <div id="initialize" className="mt-6 md:mt-10">
            <div className="flex items-center">
              <div className="hidden md:flex bg-black text-white rounded-full w-10 h-10 items-center justify-center mr-4 flex-shrink-0">
                1
              </div>
              <h1 className="font-minecraft-bold text-2xl md:text-3xl">
                Initialize
              </h1>
            </div>
            <p className="mt-2 md:mt-4 md:ml-12 text-xs md:text-sm">
              Start by creating a new project. The setup requires a NextJS/
              ReactJS app with Typescript & Tailwind.
            </p>
            <div className="md:ml-12">
              <div className="flex flex-col mt-4 md:mt-6 w-full">
                <div className="w-full md:w-1/2">
                  <h2 className="text-xs">For NextJS:</h2>
                  <CopyableCode
                    code={`npx create-next-app@latest my-app --typescript --tailwindcss`}
                    className="mt-3 md:mt-5"
                  />
                </div>
                <div className="w-full md:w-1/2 mt-3">
                  <h2 className="text-xs mt-2 md:mt-4">For ReactJS:</h2>
                  <CopyableCode
                    code={`npx create-react-app my-app --template typescript`}
                    className="mt-3 md:mt-5"
                  />
                  <p className="text-xs md:text-sm mt-2 md:mt-3 ml-1">
                    to add tailwind, you can follow{" "}
                    <a
                      href="https://tailwindcss.com/docs/guides/create-react-app"
                      className="underline"
                    >
                      these
                    </a>{" "}
                    docs.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr className="mt-6 mb-6 md:mt-10 md:mb-10 h-1" color="black" />
          <div id="installation" className="mt-6 md:mt-10">
            <div className="flex items-center">
              <div className="hidden md:flex bg-black text-white rounded-full w-10 h-10 items-center justify-center mr-4 flex-shrink-0">
                2
              </div>
              <h1 className="font-minecraft-bold text-2xl md:text-3xl">
                Installation
              </h1>
            </div>
            <div className="md:ml-12">
              <div>
                <p className="mt-2 md:mt-4 text-xs md:text-sm">
                  Install Pixel RetroUI using npm:
                </p>
              </div>
              <CopyableCode
                code={`npm i pixel-retroui@latest`}
                className="w-full md:w-1/2 mt-3 md:mt-5"
              />
            </div>
          </div>
          <hr className="mt-6 mb-6 md:mt-10 md:mb-10 h-1" color="black" />
          <div id="configuration" className="mt-6 md:mt-10">
            <div className="flex items-center">
              <div className="hidden md:flex bg-black text-white rounded-full w-10 h-10 items-center justify-center mr-4 flex-shrink-0">
                3
              </div>
              <h1 className="font-minecraft-bold text-2xl md:text-3xl">
                Configuration
              </h1>
            </div>
            <div className="mt-4 md:mt-6 md:ml-12">
              <h2 className="font-minecraft-bold text-xl md:text-2xl">
                1. Importing Styles
              </h2>
              <p className="mt-2 md:mt-4 text-xs md:text-sm">
                Add the following import to your main CSS file (e.g.,
                `globals.css` in Next.js or `index.css` in React):
              </p>
              <CopyableCode
                code="@import 'pixel-retroui/dist/index.css';"
                className="w-full md:w-1/2 mt-3 md:mt-5"
              />
            </div>

            <div className="mt-4 md:mt-6 md:ml-12">
              <h2 className="font-minecraft-bold text-xl md:text-2xl">
                2. Setting Up Fonts
              </h2>
              <p className="mt-2 md:mt-4 text-xs md:text-sm">
                RetroUI uses the Minecraft font by default. Add this to your
                global CSS file:
              </p>
              <CopyableCode
                code={`@font-face {
  font-family: 'Minecraft';
  src: url('/node_modules/pixel-retroui/fonts/Minecraft.otf') format('opentype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Minecraft';
  src: url('/node_modules/pixel-retroui/fonts/Minecraft-Bold.otf') format('opentype');
  font-weight: bold;
  font-style: normal;
}

body {
  font-family: 'Minecraft', sans-serif;
}`}
                className="w-full md:w-3/4 mt-3 md:mt-5"
              />
            </div>

            <div className="mt-4 md:mt-6 md:ml-12">
              <h2 className="font-minecraft-bold text-xl md:text-2xl">
                3. Tailwind CSS Configuration
              </h2>
              <p className="mt-2 md:mt-4 text-xs md:text-sm">
                Update your `tailwind.config.js` to include the Minecraft font:
              </p>
              <CopyableCode
                code={`module.exports = {
  theme: {
    extend: {
     fontFamily: {
        minecraft: ["Minecraft", "sans-serif"],
        "minecraft-bold": ["MinecraftBold", "sans-serif"],
      },
    },
  },
  important: true,
  // ... other configurations
}`}
                className="w-full md:w-3/4 mt-3 md:mt-5"
              />
            </div>

            <hr className="mt-6 mb-6 md:mt-10 md:mb-10 h-1" color="black" />
            <div id="basic-usage" className="mt-6 md:mt-10">
              <h1 className="font-minecraft-bold text-2xl md:text-3xl">
                Basic Usage
              </h1>
              <p className="mt-2 md:mt-4 text-xs md:text-sm">
                Now you can use the{" "}
                <a href="/components" className=" underline">
                  components
                </a>{" "}
                in your React application:
              </p>
              <CopyableCode
                code={`import React from 'react';
import { Button } from 'pixel-retroui';

function App() {
  return (
    <div>
      <h1 className="text-2xl font-minecraft mb-4">Welcome to My Retro App</h1>
      <Button>Click me!</Button>
    </div>
  );
}

export default App;`}
                className="w-full md:w-3/4 mt-3 md:mt-5"
              />
            </div>
            <hr className="mt-6 mb-6 md:mt-10 md:mb-10 h-1" color="black" />
            <div id="customization" className="mt-6 md:mt-10">
              <h1 className="font-minecraft-bold text-2xl md:text-3xl">
                Customization
              </h1>
              <p className="mt-2 md:mt-4 text-xs md:text-sm">
                RetroUI components can be customized using props and TailwindCSS
                classes. Here&apos;s an example of customizing a button:
              </p>
              <CopyableCode
                code={`<Button 
  bg="#c381b5" 
  textColor="#fefcd0"
  shadow="#fefcd0"
  className="px-6 py-2"
>
  Custom Button
</Button>`}
                className="w-full md:w-3/4 mt-3 md:mt-5"
              />
            </div>
          </div>
          <hr className="mt-6 mb-6 md:mt-10 md:mb-10 h-1" color="black" />
          <div id="troubleshooting" className="mt-6 md:mt-10">
            <h1 className="font-minecraft-bold text-2xl md:text-3xl mb-6">
              Troubleshooting
            </h1>
            <div className=" space-y-8">
              {troubleshootingItems.map((item, index) => (
                <Card key={index} className="lg:w-1/2 overflow-hidden">
                  <button
                    className="flex gap-4 items-center w-full p-4 text-left font-minecraft-bold text-lg md:text-xl"
                    onClick={() => toggleItem(index)}
                  >
                    <div
                      className="w-6 h-6 relative transition-transform duration-300 ease-in-out"
                      style={{
                        transform:
                          openItem === index ? "rotate(90deg)" : "rotate(0deg)",
                      }}
                    >
                      <Image
                        src="/arrow.png"
                        alt="Toggle"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                    {item.title}
                  </button>
                  <div
                    className="transition-all duration-300 ease-in-out"
                    style={{
                      maxHeight: openItem === index ? "1000px" : "0",
                      opacity: openItem === index ? 1 : 0,
                      overflow: "hidden",
                    }}
                  >
                    <div className="p-4 text-xs md:text-sm border-t border-gray-200">
                      {item.content}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          <hr className="mt-6 mb-6 md:mt-10 md:mb-10 h-1" color="black" />
          <div id="next-steps" className="mt-6 md:mt-10">
            <h1 className="font-minecraft-bold text-2xl md:text-3xl">
              Next Steps
            </h1>
            <ul className="list-disc list-inside mt-2 md:mt-4 text-xs md:text-sm">
              <li>
                Explore our{" "}
                <a href="/components" className="underline">
                  Components
                </a>{" "}
                to see what&apos;s available
              </li>
              <li>
                {/* Check out our{" "}
                <a href="/theming" className="underline">
                  Theming Guide
                </a>{" "}
                for more advanced customization options */}
              </li>
              <li>
                Visit our{" "}
                <a
                  href="https://github.com/Dksie09/RetroUI"
                  className="underline"
                  target="_blank"
                >
                  GitHub repository
                </a>{" "}
                for the latest updates and to report issues
              </li>
            </ul>

            <p className="mt-4 md:mt-6 text-xs md:text-sm">
              Need more help? Feel free to{" "}
              <a
                href="https://github.com/Dksie09/RetroUI/issues"
                className="underline"
                target="_blank"
              >
                open an issue
              </a>{" "}
              on GitHub or drop a dm on{" "}
              <a
                href="https://dm.new/duck"
                target="_blank"
                className="underline"
              >
                Twitter
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Page;
