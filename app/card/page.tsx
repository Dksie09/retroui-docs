"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import CopyableCode from "../components/CopyableCode";
import { Button, Card } from "pixel-retroui";
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
    shadow: "#000000",
  });

  const handleThemeChange = (theme: ThemeOptions | "custom") => {
    setSelectedTheme(theme);
  };

  const handleCustomColorChange = (colorType: string, color: string) => {
    setCustomColors((prev) => ({ ...prev, [colorType]: color }));
    setSelectedTheme("custom");
  };

  const getCardCode = () => {
    const colors =
      selectedTheme === "custom"
        ? customColors
        : themeColors[selectedTheme as ThemeOptions];
    return `<Card
  bg="${colors.bg}"
  textColor="${colors.text}"
  borderColor="${colors.border}"
  shadowColor="${colors.shadow}"
  className="p-4 text-center"
>
  <h2>Card Title</h2>
  <p>This is the card content.</p>
</Card>`;
  };

  return (
    <main className="flex min-h-screen font-minecraft flex-col w-full gap-10 p-10 xl:p-32">
      <div
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage:
            "url('https://gifdb.com/images/high/minecraft-mountain-waterfalls-7tlf1g2ya0riexqi.gif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

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

      <button
        className="flex w-56 top-5 gap-1 left-8 absolute"
        onClick={() => {
          router.push("/");
        }}
      >
        <Image src="/logo.png" className="" alt="logo" width={25} height={25} />
        <h1 className="font-minecraft-bold">RetroUI</h1>
      </button>

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

      <div className="">
        <h1 className="font-minecraft-bold text-5xl">Card</h1>
        <p className="mt-4">
          A customizable, pixel-art styled card component for containing
          content.
        </p>

        <div className="mt-12">
          <h1 className="font-minecraft-bold text-lg ml-2">Basic Usage</h1>
          <CopyableCode
            code={`import { Card } from 'pixel-retroui';

function App() {
  return (
    <Card className="p-4">
      <h2>Card Title</h2>
      <p>This is the card content.</p>
    </Card>
  );
}`}
          />
        </div>

        <div className="mt-12 z-50">
          <h1 className="font-minecraft-bold text-lg ml-2">Props</h1>
          <Card className="w-full overflow-x-auto">
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
                  <td className="px-4 py-2">Background color of the card</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">textColor</td>
                  <td className="px-4 py-2">string</td>
                  <td className="px-4 py-2">&apos;#000000&apos;</td>
                  <td className="px-4 py-2">Text color of the card content</td>
                </tr>

                <tr className="border-b">
                  <td className="px-4 py-2">borderColor</td>
                  <td className="px-4 py-2">string</td>
                  <td className="px-4 py-2">&apos;#000000&apos;</td>
                  <td className="px-4 py-2">Border color of the card</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">shadowColor</td>
                  <td className="px-4 py-2">string</td>
                  <td className="px-4 py-2">&apos;#000000&apos;</td>
                  <td className="px-4 py-2">Shadow color of the card</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">className</td>
                  <td className="px-4 py-2">string</td>
                  <td className="px-4 py-2">&apos;&apos;</td>
                  <td className="px-4 py-2">
                    Additional CSS classes to apply to the card
                  </td>
                </tr>
              </tbody>
            </table>
          </Card>
        </div>

        <div className="mt-20">
          <h1 className="font-minecraft-bold text-lg ml-2">Custom Card</h1>
          <p className="text-sm ml-2 mb-6">
            Customize your card&apos;s appearance by selecting a preset theme or
            creating your own color scheme.
          </p>
          <Card
            className={`w-full min-h-56 relative ${
              String(selectedTheme) === "dark" ? "bg-black text-white" : ""
            }`}
          >
            {/* Theme selection and custom color inputs */}
            <div className="flex justify-between">
              <div className="flex flex-col gap-1 absolute top-0 left-0">
                <p>Theme:</p>
                {Object.keys(themeColors).map((theme) => (
                  <button
                    key={theme}
                    onClick={() => handleThemeChange(theme as ThemeOptions)}
                    className={`p-3 h-1 w-1 rounded-full border ${
                      theme === selectedTheme ? "ring-2 ring-blue-500" : ""
                    }`}
                    style={{
                      borderColor: themeColors[theme as ThemeOptions].border,
                      backgroundColor: themeColors[theme as ThemeOptions].bg,
                    }}
                  ></button>
                ))}
                <button onClick={() => handleThemeChange("custom")}>
                  <img
                    src="./custom.png"
                    className="h-6 w-6"
                    alt="Custom colors"
                  />
                </button>
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
                  <div className="flex">
                    <p>Shadow color</p>
                    <input
                      type="color"
                      value={customColors.shadow}
                      className="h-6 w-6"
                      onChange={(e) =>
                        handleCustomColorChange("shadow", e.target.value)
                      }
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-center items-center my-24">
              <Card
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
                shadowColor={
                  selectedTheme === "custom"
                    ? customColors.shadow
                    : themeColors[selectedTheme as ThemeOptions].shadow
                }
                className=" p-4 text-center"
              >
                <h2 className="text-xl font-bold mb-2">Card Title</h2>
                <p>This is the card content.</p>
              </Card>
            </div>
            <div className="mt-4">
              <CopyableCode code={getCardCode()} />
            </div>
          </Card>
        </div>

        <div className="mt-12">
          <h1 className="font-minecraft-bold text-lg ml-2">
            Additional Examples
          </h1>

          <h2 className="font-minecraft text-md ml-2 mt-4">
            Card with Custom Content and Classes
          </h2>
          <Card
            className={`w-full min-h-56 relative ${
              String(selectedTheme) === "dark" ? "bg-black text-white" : ""
            }`}
          >
            <CopyableCode
              code={`<Card bg="darkgray" className="p-4 items-center flex flex-col">
        <h2 className="text-2xl font-bold mb-2">Card Title</h2>
        <p className="mb-4">This card has custom content and styling.</p>
        <Button bg="gray" onClick={() => console.log("Button clicked")}>Click me</Button>
      </Card>`}
            />
            <div className=" w-full flex items-center py-20 justify-center relative">
              <p className=" absolute top-2 left-2">Preview:</p>
              <div>
                <Card
                  className="p-4 items-center flex flex-col"
                  bg="darkgray"
                  shadowColor="black"
                >
                  <h2 className="text-2xl font-bold mb-2">Card Title</h2>
                  <p className="mb-4">
                    This card has custom content and styling.
                  </p>
                  <Button
                    onClick={() => console.log("Button clicked")}
                    bg="gray"
                  >
                    Click me
                  </Button>
                </Card>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}

export default Page;
