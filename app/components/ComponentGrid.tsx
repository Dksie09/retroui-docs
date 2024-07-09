import React from "react";
import { useRouter } from "next/navigation";
import "../globals.css";
import {
  Button,
  Input,
  Card,
  ProgressBar,
  TextArea,
  Popup,
} from "pixel-retroui";
import { ThemeOptions, themeColors } from "../themes";

interface ComponentGridProps {
  theme: ThemeOptions;
}

const ComponentGrid: React.FC<ComponentGridProps> = ({ theme }) => {
  const router = useRouter();
  const colors = themeColors[theme];

  React.useEffect(() => {
    document.body.style.backgroundColor = colors.pageBg;
    document.body.style.color = colors.text;
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, [colors.pageBg, colors.text]);

  const components = [
    {
      name: "Button",
      description: "Customizable, pixel-art styled buttons",
      Component: Button,
    },
    {
      name: "Input",
      description: "Retro-styled input fields for user",
      Component: Input,
    },
    {
      name: "Card",
      description: "Pixel-perfect content containers",
      Component: Card,
    },
    {
      name: "ProgressBar",
      description: "Nostalgic progress indicators",
      Component: ProgressBar,
    },
    {
      name: "TextArea",
      description: "Multi-line input with retro charm",
      Component: TextArea,
    },
    {
      name: "Popup",
      description: "Retro-inspired modal dialogs",
      Component: Popup,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {components.map(({ name, description, Component }) => (
        <div
          key={name}
          onClick={() => router.push(`/components/${name.toLowerCase()}`)}
        >
          <Card
            className="border-4 p-4 cursor-pointer transition-colors duration-200"
            bg={colors.cardBg}
            textColor={colors.text}
            borderColor={colors.border}
            shadowColor={colors.shadow}
          >
            <div className="h-36 flex items-center justify-center mb-2">
              {name === "Button" && (
                <Button
                  className="py-0 px-1"
                  borderColor={colors.border}
                  bg={colors.bg}
                  shadow={colors.shadow}
                  textColor={colors.text}
                >
                  Click me
                </Button>
              )}
              {name === "Input" && (
                <Input
                  placeholder="Type here..."
                  bg={colors.textareaBg}
                  textColor={colors.text}
                  borderColor={colors.border}
                />
              )}
              {name === "Card" && (
                <Card
                  className="w-full h-2/3 flex items-center justify-center"
                  bg={colors.bg}
                  textColor={colors.text}
                  borderColor={colors.border}
                  shadowColor={colors.shadow}
                >
                  This is a card!
                </Card>
              )}
              {name === "ProgressBar" && (
                <ProgressBar
                  progress={50}
                  color={colors.shadow}
                  borderColor={colors.border}
                />
              )}
              {name === "TextArea" && (
                <TextArea
                  className="mb-2 h-1/3"
                  bg={colors.textareaBg}
                  textColor={colors.text}
                  borderColor={colors.border}
                  placeholder="Type here..."
                />
              )}
              {name === "Popup" && (
                <Button
                  className="py-0 px-1"
                  bg={colors.bg}
                  textColor={colors.text}
                  borderColor={colors.border}
                  shadow={colors.shadow}
                >
                  popup trigger
                </Button>
              )}
            </div>
            <h3 className="font-minecraft-bold text-xl mb-1">{name}</h3>
            <p className="text-sm">{description}</p>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default ComponentGrid;
