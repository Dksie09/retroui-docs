import React, { useState } from "react";
import { Card } from "pixel-retroui";
import Image from "next/image";

interface CopyableCodeProps {
  code: string;
  className?: string;
}

const CopyableCode: React.FC<CopyableCodeProps> = ({ code, className }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <Card className={`relative ${className}`}>
      <pre className="p-4 whitespace-pre-wrap break-words text-sm">
        <code>{code}</code>
      </pre>
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 p-1 rounded-md hover:bg-gray-200"
      >
        {copied ? (
          <span className="text-xs font-minecraft">Copied!</span>
        ) : (
          <Image src="/copy.svg" alt="Copy" width={16} height={16} />
        )}
      </button>
    </Card>
  );
};

export default CopyableCode;
