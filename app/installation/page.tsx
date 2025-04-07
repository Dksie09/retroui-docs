"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button, Card } from "pixel-retroui";
import React, { useState, useEffect, useRef } from "react";
import CopyableCode from "../../components/CopyableCode";
import Navbar from "../../components/Navbar";

function Page() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("");
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (index: any) => {
    setOpenItem(openItem === index ? null : index);
  };

  const sections = [
    { id: "initialize", title: "Initialize" },
    { id: "setup", title: "Setup" },
    { id: "cli-setup", title: "CLI Setup" },
    { id: "manual-setup", title: "Manual Setup" },
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
          For the most reliable font loading, use our CLI setup:{" "}
          <span className="font-mono bg-gray-200 p-1 rounded-md">
            npx pixel-retroui
          </span>
          <br />
          <br />
          In manual, make sure you&apos;re using the correct path in your
          imports:
          <span className="font-mono bg-gray-200 p-1 rounded-md block mt-2">
            @import &apos;pixel-retroui/dist/fonts.css&apos;;
          </span>
          <span className="mt-2 text-red-600 block">Common mistake:</span>
          <span className="font-mono bg-gray-200 p-1 rounded-md block mt-1 line-through">
            @import &apos;pixel-retroui/dist.fonts.css&apos;;
          </span>
          <br />
          <p className="mt-2">
            Use{" "}
            <span className="font-mono bg-gray-200 p-1 rounded-md">
              font-minecraft
            </span>{" "}
            to add Minecraft font to your text.
          </p>
        </>
      ),
    },
    {
      title: "Components not styled correctly",
      content: (
        <>
          Make sure you&apos;ve imported the library&apos;s CSS file in your
          main CSS file:
          <br />
          <br />
          <span className="font-mono bg-gray-200 p-1 rounded-md block mb-2">
            @import &apos;pixel-retroui/dist/index.css&apos;;
          </span>
          If you&apos;re using the Minecraft font:
          <br />
          <span className="font-mono bg-gray-200 p-1 rounded-md block">
            @import &apos;pixel-retroui/dist/fonts.css&apos;;
          </span>
        </>
      ),
    },
    {
      title: "Tailwind classes not working",
      content: (
        <>
          Ensure that you have added{" "}
          <span className="font-mono bg-gray-200 p-1 rounded-md">
            important: true
          </span>{" "}
          in tailwind.config.ts to ensure our styles don&apos;t get overridden.
        </>
      ),
    },
    {
      title: "TypeScript errors with Next.js",
      content: (
        <>
          If you&apos;re seeing TypeScript errors with Next.js 19+ or React 19+,
          make sure you&apos;re using pixel-retroui v2.1.0 or higher, which
          includes improved TypeScript compatibility.
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

  const scrollToSection = (id: string, offset: number = 80) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen font-minecraft flex-col w-full gap-5 p-4 md:p-8 lg:p-16 xl:p-32 relative overflow-hidden pt-16">
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
          className="absolute top-20 left-2 md:left-8 underline font-minecraft text-sm flex items-center"
          onClick={() => router.push("/components")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Components
        </button>

        {/* ------------------------------------------ */}
        <div className="hidden lg:block fixed right-4 top-1/2 transform z-50 -translate-y-1/2 bg-white p-4 rounded-lg shadow-md">
          <h2 className="font-minecraft-bold mb-2">Index</h2>
          <ul>
            {sections.map((section) => (
              <li key={section.id} className="mb-2">
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`text-left ${
                    activeSection === section.id
                      ? "font-bold text-blue-500"
                      : ""
                  }`}
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
        {/* ------------------------------------------ */}

        <div className="mt-32 sm:mt-20 md:mt-20 lg:mt-10 z-10">
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
                Start by creating a new project. The setup requires a Next.js/
                React app with Typescript & Tailwind.
              </p>
              <div className="md:ml-12">
                <div className="flex flex-col mt-4 md:mt-6 w-full">
                  <div className="w-full md:w-1/2">
                    <h2 className="text-xs">
                      For{" "}
                      <span className="bg-slate-300 p-1 rounded-md mt-2 inline-block">
                        Next.js
                      </span>
                      :
                    </h2>
                    <CopyableCode
                      code={`npx create-next-app@latest my-app --typescript --tailwindcss`}
                      className="mt-3 md:mt-5"
                    />
                  </div>
                  <div className="w-full md:w-1/2 mt-3">
                    <h2 className="text-xs mt-2 md:mt-4">
                      For{" "}
                      <span className="bg-slate-300 p-1 rounded-md mt-2 inline-block">
                        React
                      </span>
                      :
                    </h2>
                    <CopyableCode
                      code={`npx create-react-app my-app --template typescript`}
                      className="mt-3 md:mt-5"
                    />
                    <p className="text-xs md:text-sm mt-2 md:mt-3 ml-1">
                      To add tailwind, you can follow{" "}
                      <a
                        href="https://tailwindcss.com/docs/guides/create-react-app"
                        className="text-blue-600 underline cursor-pointer"
                        target="_blank"
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
            <div id="setup" className="mt-6 md:mt-10">
              <div className="flex items-center">
                <div className="hidden md:flex bg-black text-white rounded-full w-10 h-10 items-center justify-center mr-4 flex-shrink-0">
                  2
                </div>
                <h1 className="font-minecraft-bold text-2xl md:text-3xl">
                  Setup
                </h1>
              </div>

              <p className="mt-2 md:mt-4 md:ml-12 text-xs md:text-sm">
                Choose one of the following setup methods:
              </p>
            </div>

            <div id="cli-setup" className="mt-6 md:mt-10 md:ml-12">
              <h2 className="font-minecraft-bold text-xl md:text-2xl">
                CLI Setup (Recommended)
              </h2>

              <div className="mt-4 space-y-6">
                {/* Step 1 */}
                <div className="flex">
                  {/* <div className="hidden md:flex bg-black text-white rounded-full w-6 h-6 items-center justify-center mr-3 flex-shrink-0 mt-1">
                    1
                  </div> */}
                  <div className="w-full">
                    <h2 className="text-xs md:text-sm  pb-1">
                      1. Run the CLI setup tool
                    </h2>
                    <CopyableCode
                      code="npx pixel-retroui"
                      className="w-full md:w-1/2 mt-2"
                    />
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex">
                  {/* <div className="hidden md:flex bg-black text-white rounded-full w-6 h-6 items-center justify-center mr-3 flex-shrink-0 mt-1">
                    2
                  </div> */}
                  <div>
                    <p className="text-xs md:text-sm ">
                      2.
                      <span className="">
                        {" "}
                        The CLI will automatically install the package and
                        configure files based on your preferences.
                      </span>
                    </p>

                    <div className="mt-4 p-3 bg-gray-100 rounded-md border border-gray-200 text-xs md:text-sm">
                      <div className="font-minecraft text-xs opacity-75 mb-2">
                        CLI output preview:
                      </div>
                      <pre className="text-xs overflow-x-auto">
                        {`      ▄▀▄─────▄▀▄
     ▄█░░▀▀▀▀▀░░█▄
─▄▄──█░░░░░░░░░░░█──▄▄
█▄▄█─█░░▀░░┬░░▀░░█─█▄▄█
Setting up pixel-retroui...
Installing pixel-retroui...
Would you like to use the default Minecraft font?
Which framework are you using?
.
.
.
🎉 Setup complete! Enjoy using pixel-retroui!
`}
                      </pre>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex">
                  {/* <div className="hidden md:flex bg-black text-white rounded-full w-6 h-6 items-center justify-center mr-3 flex-shrink-0 mt-1">
                    3
                  </div> */}
                  <div className="w-full">
                    <div className="flex flex-col mt-4 md:mt-6 w-full">
                      <div className="w-full md:w-1/2">
                        <p className="text-xs md:text-sm mb-2">
                          3.{" "}
                          <span className="bg-slate-300 p-1 rounded-md mt-2 inline-block">
                            For Next.js
                          </span>
                          , in your{" "}
                          <span className="bg-slate-300 p-1 rounded-md mt-2 inline-block">
                            layout.tsx
                          </span>{" "}
                          file:
                        </p>
                        <CopyableCode
                          code={`import '@/lib/pixel-retroui-setup.js';`}
                          className="mt-3 md:mt-5"
                        />
                      </div>
                    </div>

                    <div className="mt-4 p-3 flex flex-col gap-2 bg-green-50 border-l-4 border-green-500 rounded-r text-xs md:text-sm">
                      <p className="text-green-800 ">
                        <span className="font-minecraft-bold">
                          Setup Complete!
                        </span>
                      </p>
                      <p className="text-green-800 ">
                        You&apos;re now ready to use RetroUI components in your
                        project.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="font-minecraft-bold mt-8 md:mt-10 md:ml-12">Or</h2>

            <div id="manual-setup" className="mt-8  md:ml-12">
              <h2 className="font-minecraft-bold text-xl md:text-2xl">
                Manual Setup
              </h2>
              <p className="mt-2 md:mt-4 text-xs md:text-sm">
                1. Install RetroUI:
              </p>
              <CopyableCode
                code={`npm i pixel-retroui@latest`}
                className="w-full md:w-1/2 mt-3 md:mt-5"
              />
              <p className="mt-6 md:mt-4 text-xs md:text-sm">
                2. Add the following import to your main CSS file:
                <br />
                <span className="bg-slate-300 p-1 rounded-md mt-2 inline-block">
                  globals.css
                </span>{" "}
                in Next.js or{" "}
                <span className="bg-slate-300 p-1 rounded-md inline-block">
                  index.css
                </span>{" "}
                in React
              </p>
              <CopyableCode
                code="@import 'pixel-retroui/dist/index.css';"
                className="w-full md:w-1/2 mt-3 md:mt-5"
              />
              <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded-r max-w-5xl">
                <h3 className="font-minecraft-bold text-sm md:text-base text-yellow-800">
                  In manual setup,
                </h3>
                <p className="mt-2 text-xs md:text-sm text-yellow-700">
                  If you want to use the default Minecraft font, add this to
                  your CSS too:
                  <br />
                  <CopyableCode
                    code={" @import 'pixel-retroui/dist/fonts.css';"}
                    className=" mt-3"
                  />
                </p>
              </div>
            </div>

            <hr className="mt-6 mb-6 md:mt-10 md:mb-10 h-1" color="black" />
            <div id="basic-usage" className="mt-6 md:mt-10">
              <h1 className="font-minecraft-bold text-2xl md:text-3xl">
                Basic Usage
              </h1>
              <p className="mt-2 md:mt-4 text-xs md:text-sm">
                Now you can use the{" "}
                <a href="/components" className="underline">
                  components
                </a>{" "}
                in your React application:
              </p>
              <CopyableCode
                code={`import React from 'react';
import { Button, Card } from 'pixel-retroui';

function App() {
  return (
    <div>
      <h1 className="text-2xl font-minecraft mb-4">Welcome to My Retro App</h1>
      <Card className="p-4 mb-4">
        <h2>This is a pixel-styled card</h2>
        <p>You can put anything inside!</p>
      </Card>
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

            <hr className="mt-6 mb-6 md:mt-10 md:mb-10 h-1" color="black" />
            <div id="troubleshooting" className="mt-6 md:mt-10">
              <h1 className="font-minecraft-bold text-2xl md:text-3xl mb-6">
                Troubleshooting
              </h1>
              <div className="space-y-8">
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
                            openItem === index
                              ? "rotate(90deg)"
                              : "rotate(0deg)",
                        }}
                      >
                        <Image
                          src="/arrow.svg"
                          alt="Toggle"
                          width={24}
                          height={24}
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="p-5 md:border-r md:border-black">
                  <h3 className="font-minecraft-bold mb-3">Explore</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">→</span>
                      <a
                        href="/components"
                        className="text-blue-600 hover:underline"
                      >
                        Browse all components
                      </a>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">→</span>
                      <a
                        href="https://github.com/Dksie09/RetroUI"
                        className="text-blue-600 hover:underline"
                        target="_blank"
                      >
                        GitHub repository
                      </a>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">→</span>
                      <a
                        href="https://github.com/Dksie09/retroui-docs"
                        className="text-blue-600 hover:underline"
                        target="_blank"
                      >
                        Documentation source
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="p-5">
                  <h3 className="font-minecraft-bold mb-3">Contribute</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">→</span>
                      <a
                        href="https://github.com/Dksie09/RetroUI/blob/main/CONTRIBUTING.md"
                        className="text-blue-600 hover:underline"
                        target="_blank"
                      >
                        Contribution guidelines
                      </a>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">→</span>
                      <a
                        href="https://github.com/Dksie09/RetroUI/issues"
                        className="text-blue-600 hover:underline"
                        target="_blank"
                      >
                        Report issues
                      </a>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">→</span>
                      <a
                        href="https://dm.new/duck"
                        className="text-blue-600 hover:underline"
                        target="_blank"
                      >
                        Contact on Twitter
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

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

              <div className="mt-8 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r max-w-5xl">
                <h3 className="font-minecraft-bold text-sm md:text-base text-blue-800">
                  Support the project ☕
                </h3>
                <p className="text-sm mb-4">
                  If you find this library useful, consider supporting its
                  development!
                </p>
                <Button
                  bg="#5F7FFF"
                  textColor="#FFFFFF"
                  // as="a"
                  // href="https://buymeacoffee.com/dakshiegoel"
                  // target="_blank"
                  onClick={() => {
                    window.open(
                      "https://buymeacoffee.com/dakshiegoel",
                      "_blank"
                    );
                  }}
                  className="inline-flex items-center"
                >
                  Buy me a coffee
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Page;
