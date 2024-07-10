import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Button,
  Input,
  Card,
  ProgressBar,
  TextArea,
  Popup,
} from "pixel-retroui";
import { ThemeOptions, themeColors } from "../themes";
import CopyableCode from "./CopyableCode";
import { useRouter } from "next/navigation";

interface ComponentGridProps {
  theme: ThemeOptions;
}

const ComponentGrid: React.FC<ComponentGridProps> = ({ theme }) => {
  const router = useRouter();
  const [selectedComponent, setSelectedComponent] = useState<string | null>(
    null
  );
  const colors = themeColors[theme];

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

  const renderComponentPreview = (name: string, Component: any) => {
    switch (name) {
      case "Button":
        return (
          <div className="flex space-x-4">
            <Component
              className=""
              borderColor={colors.border}
              bg={colors.bg}
              shadow={colors.shadow}
              textColor={colors.text}
            >
              Click me
            </Component>
            <Component
              className="py-1 px-2"
              borderColor={colors.border}
              bg={colors.shadow}
              shadow={colors.bg}
              textColor={colors.bg}
            >
              Accent
            </Component>
          </div>
        );

      case "Input":
        return (
          <Component
            placeholder="Type here..."
            bg={colors.textareaBg}
            textColor={colors.text}
            borderColor={colors.border}
            className="w-full max-w-xs"
          />
        );

      case "Card":
        return (
          <Component
            className="w-full max-w-xs p-4 flex items-center justify-center"
            bg={colors.bg}
            textColor={colors.text}
            borderColor={colors.border}
            shadowColor={colors.shadow}
          >
            <p>Card Content</p>
          </Component>
        );

      case "ProgressBar":
        return (
          <div className="w-full max-w-xs">
            <Component
              progress={65}
              color={colors.shadow}
              borderColor={colors.border}
            />
          </div>
        );

      case "TextArea":
        return (
          <Component
            className="w-full max-w-xs h-24"
            bg={colors.textareaBg}
            textColor={colors.text}
            borderColor={colors.border}
            placeholder="Enter multiple lines..."
          />
        );

      case "Popup":
        return (
          <div
            className="relative w-full max-w-xs h-36 border-4 border-dashed"
            style={{ borderColor: colors.border }}
          >
            <div className="absolute top-1/2 -left-8 transform -translate-x-1/2 -translate-y-1/2">
              <Component
                isOpen={true}
                onClose={() => {}}
                bg={colors.bg}
                textColor={colors.text}
                borderColor={colors.border}
                baseBg={colors.shadow}
                className=" text-center w-96"
              >
                <p className="">
                  Popup content goes
                  <br /> here
                </p>
              </Component>
            </div>
          </div>
        );

      default:
        return <div>Preview not available</div>;
    }
  };

  // const renderDetailedView = (name: string, Component: any) => {
  //   const getPropsTable = () => {
  //     // This is a placeholder. You should replace this with actual prop documentation for each component.
  //     const propsDocs = {
  //       Button: [
  //         {
  //           name: "bg",
  //           type: "string",
  //           default: "white",
  //           description: "Background color of the button",
  //         },
  //         {
  //           name: "textColor",
  //           type: "string",
  //           default: "black",
  //           description: "Text color of the button",
  //         },
  //         {
  //           name: "borderColor",
  //           type: "string",
  //           default: "black",
  //           description: "Border color of the button",
  //         },
  //         {
  //           name: "shadow",
  //           type: "string",
  //           default: "gray",
  //           description: "Shadow color of the button",
  //         },
  //         {
  //           name: "className",
  //           type: "string",
  //           default: "",
  //           description: "Additional tailwind + CSS classes",
  //         },
  //       ],
  //       Input: [
  //         {
  //           name: "bg",
  //           type: "string",
  //           default: "white",
  //           description: "Background color of the input",
  //         },
  //         {
  //           name: "textColor",
  //           type: "string",
  //           default: "black",
  //           description: "Text color of the input",
  //         },
  //         {
  //           name: "borderColor",
  //           type: "string",
  //           default: "black",
  //           description: "Border color of the input",
  //         },
  //         {
  //           name: "icon",
  //           type: "string",
  //           default: "",
  //           description: "Icon on the right of the input",
  //         },
  //         {
  //           name: "placeholder",
  //           type: "string",
  //           default: "",
  //           description: "Placeholder text",
  //         },
  //         {
  //           name: "className",
  //           type: "string",
  //           default: "",
  //           description: "Additional tailwind + CSS classes",
  //         },
  //       ],
  //       Card: [
  //         {
  //           name: "bg",
  //           type: "string",
  //           default: "white",
  //           description: "Background color of the input",
  //         },
  //         {
  //           name: "textColor",
  //           type: "string",
  //           default: "black",
  //           description: "Text color of the input",
  //         },
  //         {
  //           name: "borderColor",
  //           type: "string",
  //           default: "black",
  //           description: "Border color of the input",
  //         },
  //         {
  //           name: "shadow",
  //           type: "string",
  //           default: "gray",
  //           description: "Shadow color of the input",
  //         },
  //         {
  //           name: "className",
  //           type: "string",
  //           default: "",
  //           description: "Additional tailwind + CSS classes",
  //         },
  //       ],
  //       ProgressBar: [
  //         {
  //           name: "progress",
  //           type: "number",
  //           default: "",
  //           description: "Progress in percentage of the progress bar",
  //         },
  //         {
  //           name: "color",
  //           type: "string",
  //           default: "black",
  //           description: "Color of the progress bar",
  //         },
  //         {
  //           name: "borderColor",
  //           type: "string",
  //           default: "black",
  //           description: "Border color of the progress bar",
  //         },
  //         {
  //           name: "size",
  //           type: '"md" | "sm" | "lg"',
  //           default: "md",
  //           description: "Size of the progress bar",
  //         },
  //         {
  //           name: "className",
  //           type: "string",
  //           default: "",
  //           description: "Additional tailwind + CSS classes",
  //         },
  //       ],
  //       // Add prop documentation for other components here
  //     };

  //     const props = propsDocs[name as keyof typeof propsDocs] || [];

  //     return (
  //       <table className="w-full border-collapse border border-gray-300 mb-4">
  //         <thead>
  //           <tr
  //             className={`bg-gray-100 ${
  //               String(theme) === "dark" ? " text-black" : ""
  //             }`}
  //           >
  //             <th className="border border-gray-300 p-2">Prop</th>
  //             <th className="border border-gray-300 p-2">Type</th>
  //             <th className="border border-gray-300 p-2">Default</th>
  //             <th className="border border-gray-300 p-2">Description</th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //           {props.map((prop, index) => (
  //             <tr key={index}>
  //               <td className="border border-gray-300 p-2 font-minecraft-bold">
  //                 {prop.name}
  //               </td>
  //               <td className="border border-gray-300 p-2">{prop.type}</td>
  //               <td className="border border-gray-300 p-2">{prop.default}</td>
  //               <td className="border border-gray-300 p-2">
  //                 {prop.description}
  //               </td>
  //             </tr>
  //           ))}
  //         </tbody>
  //       </table>
  //     );
  //   };

  //   const getUsageExample = () => {
  //     // This is a placeholder. You should replace this with actual usage examples for each component.
  //     const examples = {
  //       Button: `
  // import { Button } from 'pixel-retroui';

  // function MyComponent() {
  //   return (
  //     <Button
  //       bg="#ff0000"
  //       textColor="white"
  //       borderColor="black"
  //       shadow="darkred"
  //       className="my-custom-class"
  //     >
  //       Click me!
  //     </Button>
  //   );
  // }
  //       `,
  //       Card: `
  // import { Card } from 'pixel-retroui';

  // function MyComponent() {
  //   return (
  //     <Card
  //       bg="#ff0000"
  //       textColor="white"
  //       borderColor="black"
  //       shadow="darkred"
  //       className="my-custom-class"
  //     >
  //       This is a card!!
  //     </Card>
  //   );
  // }
  //       `,
  //       Input: `
  // import { Input } from 'pixel-retroui';

  // function MyComponent() {
  //   return (
  //     <Input
  //       bg="#ff0000"
  //       textColor="white"
  //       borderColor="black"
  //       placeholder="Type here..."
  //       className="my-custom-class"
  //     />
  //   );
  // }
  //       `,
  //       ProgressBar: `
  // import { ProgressBar } from 'pixel-retroui';

  // function MyComponent() {
  //   return (
  //     <ProgressBar size="sm" color="blue" className="w-full" progress={50} />
  //   );
  // }
  //       `,
  //       // Add usage examples for other components here
  //     };

  //     return examples[name as keyof typeof examples] || "";
  //   };

  //   return (
  //     <div className="w-full">
  //       <h2 className="text-3xl font-minecraft-bold mb-4">{name}</h2>

  //       <section className="mb-8">
  //         <h3 className="text-2xl font-minecraft-bold mb-2">Preview</h3>
  //         <div className="border border-gray-300 p-4 rounded">
  //           {renderComponentPreview(name, Component)}
  //         </div>
  //       </section>

  //       <section className="mb-8">
  //         <h3 className="text-2xl font-minecraft-bold mb-2">Props</h3>
  //         {getPropsTable()}
  //       </section>

  //       <section className="mb-8">
  //         <h3 className="text-2xl font-minecraft-bold mb-2">Usage Example</h3>
  //         <CopyableCode
  //           code={getUsageExample()}
  //           className={`${
  //             String(theme) === "dark" ? " text-black bg-white" : ""
  //           }`}
  //         />
  //       </section>

  //       <section>
  //         <h3 className="text-2xl font-minecraft-bold mb-2">Description</h3>
  //         <p>
  //           {/* Add a detailed description of the component here */}
  //           The {name} component is a customizable, pixel-art styled element
  //           that brings a retro feel to your user interface. It&apos;s designed
  //           to be flexible and easy to use, with various props for
  //           customization.
  //         </p>
  //       </section>
  //     </div>
  //   );
  // };

  return (
    <div className="flex flex-col-reverse md:flex-row">
      <div className="flex-grow overflow-y-auto">
        <AnimatePresence>
          <motion.div
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-4"
          >
            {components.map(({ name, description, Component }) => (
              <motion.div
                key={name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setSelectedComponent(name);
                  router.push(`/${name}`);
                }}
              >
                <Card
                  className="border-4 p-4 cursor-pointer transition-colors duration-200"
                  bg={colors.cardBg}
                  textColor={colors.text}
                  borderColor={colors.border}
                  shadowColor={colors.shadow}
                >
                  <div className="h-36 flex items-center justify-center mb-2">
                    {renderComponentPreview(name, Component)}
                  </div>
                  <h3 className="font-minecraft-bold text-xl mb-1">{name}</h3>
                  <p className="text-sm">{description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ComponentGrid;
