"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import CopyableCode from "../components/CopyableCode";
import { Card, Input } from "pixel-retroui";
import { themeColors, ThemeOptions } from "../themes";

function Page() {
  const router = useRouter();
  const [selectedTheme, setSelectedTheme] = useState<ThemeOptions | "custom">(
    "pop"
  );
  const [customColors, setCustomColors] = useState({
    bg: "#ffffff",
    text: "#000000",
    border: "#000000",
  });

  const handleThemeChange = (theme: ThemeOptions | "custom") => {
    setSelectedTheme(theme);
  };

  const handleCustomColorChange = (colorType: string, color: string) => {
    setCustomColors((prev) => ({ ...prev, [colorType]: color }));
    setSelectedTheme("custom");
  };

  const getInputCode = () => {
    const colors =
      selectedTheme === "custom"
        ? customColors
        : themeColors[selectedTheme as ThemeOptions];
    return `<Input
    bg="${colors.bg}"
    textColor="${colors.text}"
    borderColor="${colors.border}"
    placeholder="Enter text..."
    onChange={(e) => console.log(e.target.value)}
  />`;
  };

  return (
    <main className="flex min-h-screen font-minecraft flex-col w-full gap-10 p-10 xl:p-32 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
      <div
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage:
            "url('https://64.media.tumblr.com/c01a845f9fec26ec9e9cc49f50af7bab/dc03a43699102c61-f4/s540x810/194151cfe619ebb21bd1a97ddb13a70460a0522f.gif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

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

      <button
        className="absolute top-20 left-8 underline font-minecraft text-sm flex items-center"
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

      <div className="z-10">
        <h1 className="font-minecraft-bold text-5xl">Input</h1>
        <p className="mt-4">
          A customizable, pixel-art styled input component with optional icon.
        </p>

        <div className="mt-12">
          <h1 className="font-minecraft-bold text-lg ml-2">Basic Usage</h1>
          <CopyableCode
            code={`import { Input } from 'pixel-retroui';

function App() {
  return (
    <Input 
      placeholder="Enter text..." 
      onChange={(e) => console.log(e.target.value)}
    />
  );
}`}
          />
        </div>

        <div className="mt-12">
          <h1 className="font-minecraft-bold text-lg ml-2">Props</h1>
          <Card
            className="w-full overflow-x-auto bg-opacity-30 bg-white"
            bg="transparent"
          >
            <table className="min-w-full">
              <thead>
                <tr className="border-b">
                  <th className="px-4 py-2 text-left">Prop</th>
                  <th className="px-4 py-2 text-left">Type</th>
                  <th className="px-4 py-2 text-left">Default</th>
                  <th className="px-4 py-2 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-2">bg</td>
                  <td className="px-4 py-2">string</td>
                  <td className="px-4 py-2">&apos;#ffffff&apos;</td>
                  <td className="px-4 py-2">Background color of the input</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">textColor</td>
                  <td className="px-4 py-2">string</td>
                  <td className="px-4 py-2">&apos;#000000&apos;</td>
                  <td className="px-4 py-2">Text color of the input</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">borderColor</td>
                  <td className="px-4 py-2">string</td>
                  <td className="px-4 py-2">&apos;#000000&apos;</td>
                  <td className="px-4 py-2">Border color of the input</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">icon</td>
                  <td className="px-4 py-2">string</td>
                  <td className="px-4 py-2">undefined</td>
                  <td className="px-4 py-2">URL of the icon to display</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">onChange</td>
                  <td className="px-4 py-2">function</td>
                  <td className="px-4 py-2">undefined</td>
                  <td className="px-4 py-2">
                    Function to call when the input value changes
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2">className</td>
                  <td className="px-4 py-2">string</td>
                  <td className="px-4 py-2">&apos;&apos;</td>
                  <td className="px-4 py-2">
                    Additional CSS classes to apply to the input
                  </td>
                </tr>
              </tbody>
            </table>
          </Card>
        </div>

        <div className="mt-20">
          <h1 className="font-minecraft-bold text-lg ml-2">Custom Input</h1>
          <p className="text-sm ml-2 mb-6">
            Customize your input&apos;s appearance by selecting a preset theme
            or creating your own color scheme.
          </p>
          <Card
            className={`w-full min-h-56 relative ${
              String(selectedTheme) === "dark" ? "bg-black text-white" : ""
            }`}
          >
            <div className="flex justify-between">
              <div className="flex flex-col gap-1 absolute top-0 left-0">
                <p>
                  Theme: <span className="font-bold">{selectedTheme}</span>
                </p>
                {Object.keys(themeColors).map((theme) => (
                  <div key={theme} className="flex items-center gap-2">
                    <button
                      onClick={() => handleThemeChange(theme as ThemeOptions)}
                      className={`p-3 h-1 w-1 rounded-full border ${
                        theme === selectedTheme ? "ring-2 ring-blue-500" : ""
                      }`}
                      style={{
                        borderColor: themeColors[theme as ThemeOptions].border,
                        backgroundColor: themeColors[theme as ThemeOptions].bg,
                      }}
                    ></button>
                    {theme === selectedTheme && (
                      <span className="text-sm capitalize">{theme}</span>
                    )}
                  </div>
                ))}
                <div className="flex items-center gap-2">
                  <button onClick={() => handleThemeChange("custom")}>
                    <img
                      src="./custom.png"
                      className="h-6 w-6"
                      alt="Custom colors"
                    />
                  </button>
                  {selectedTheme === "custom" && (
                    <span className="text-sm">Custom</span>
                  )}
                </div>
              </div>
              {selectedTheme === "custom" && (
                <div className="flex flex-col gap-2 items-end absolute top-0 right-0">
                  <div className="flex">
                    <p>Bg color</p>
                    <input
                      type="color"
                      value={customColors.bg}
                      className="h-6 w-6"
                      onChange={(e) =>
                        handleCustomColorChange("bg", e.target.value)
                      }
                    />
                  </div>
                  <div className="flex">
                    <p>Text color</p>
                    <input
                      type="color"
                      value={customColors.text}
                      className="h-6 w-6"
                      onChange={(e) =>
                        handleCustomColorChange("text", e.target.value)
                      }
                    />
                  </div>
                  <div className="flex">
                    <p>Border color</p>
                    <input
                      type="color"
                      value={customColors.border}
                      className="h-6 w-6"
                      onChange={(e) =>
                        handleCustomColorChange("border", e.target.value)
                      }
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-center items-center my-24">
              <Input
                bg={
                  selectedTheme === "custom"
                    ? customColors.bg
                    : themeColors[selectedTheme as ThemeOptions].bg
                }
                textColor={
                  selectedTheme === "custom"
                    ? customColors.text
                    : themeColors[selectedTheme as ThemeOptions].text
                }
                borderColor={
                  selectedTheme === "custom"
                    ? customColors.border
                    : themeColors[selectedTheme as ThemeOptions].border
                }
                placeholder="Enter text..."
              />
            </div>
            <div className="mt-4">
              <CopyableCode code={getInputCode()} />
            </div>
          </Card>
        </div>

        <div className="mt-12">
          <h1 className="font-minecraft-bold text-lg ml-2">
            Additional Examples
          </h1>

          <h2 className="font-minecraft text-md ml-2 mt-4">With Icon</h2>
          <Card
            className={`w-full min-h-56 relative ${
              String(selectedTheme) === "dark" ? "bg-black text-white" : ""
            }`}
          >
            <CopyableCode
              code={`<Input 
  icon="/path/to/search-icon.svg"
  placeholder="Search..."
/>`}
            />
            <div className=" w-full flex flex-col gap-4 items-center py-20 justify-center relative">
              <p className=" absolute top-2 left-2">Preview:</p>
              <Input icon="./search.svg" placeholder="Search..." />
            </div>
          </Card>

          <h2 className="font-minecraft text-md ml-2 mt-4">
            With Custom Styling
          </h2>
          <Card
            className={`w-full min-h-56 relative ${
              String(selectedTheme) === "dark" ? "bg-black text-white" : ""
            }`}
          >
            <CopyableCode
              code={`<Input
  className=" w-1/3"
  bg="#d1edda"
  textColor="#44573c"
  borderColor="#44573c"
  placeholder="Type something..."
/>`}
            />
            <div className=" w-full flex flex-col gap-4 items-center py-20 justify-center relative">
              <p className=" absolute top-2 left-2">Preview:</p>
              <Input
                className=" w-1/3"
                bg="#d1edda"
                textColor="#44573c"
                borderColor="#44573c"
                placeholder="Type something..."
              />
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}

export default Page;