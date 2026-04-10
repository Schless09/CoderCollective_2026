"use client";

import { useEffect, useState } from "react";

interface CodeLine {
  text: string;
  type: "command" | "output" | "comment";
  delay: number;
}

const Terminal = () => {
  const [displayedLines, setDisplayedLines] = useState<
    Array<{ text: string; type: string; complete: boolean }>
  >([]);
  const [isTyping, setIsTyping] = useState(true);

  const codeLines: CodeLine[] = [
    {
      text: "npm install --save coder-collective",
      type: "command",
      delay: 0,
    },
    {
      text: "Connecting to exclusive career network...",
      type: "output",
      delay: 500,
    },
    {
      text: "✓ Access to senior engineers network",
      type: "output",
      delay: 800,
    },
    {
      text: "✓ Verified opportunities at top startups",
      type: "output",
      delay: 1100,
    },
    {
      text: "✓ Direct matches with leading tech companies",
      type: "output",
      delay: 1400,
    },
    { text: "", type: "comment", delay: 1700 },
    {
      text: "find --opportunities --senior-engineer --top-companies",
      type: "command",
      delay: 2000,
    },
    {
      text: "Searching exclusive career opportunities...",
      type: "output",
      delay: 2500,
    },
    {
      text: "Found 7 perfect matches for your profile",
      type: "output",
      delay: 2800,
    },
    { text: "", type: "comment", delay: 3100 },
    {
      text: "// Get matched with top career opportunities",
      type: "comment",
      delay: 3400,
    },
    {
      text: "const career = new CoderCollective();",
      type: "command",
      delay: 3700,
    },
    {
      text: "career.connect(); // Free for engineers",
      type: "output",
      delay: 4000,
    },
  ];

  useEffect(() => {
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    const processLine = (lineIdx: number) => {
      if (lineIdx >= codeLines.length) {
        setIsTyping(false);
        return;
      }

      const line = codeLines[lineIdx];

      const delayTimeout = setTimeout(() => {
        setDisplayedLines((prev) => [
          ...prev,
          { text: "", type: line.type, complete: false },
        ]);

        const typeChar = (charIdx: number) => {
          if (charIdx < line.text.length) {
            const partialText = line.text.slice(0, charIdx + 1);
            setDisplayedLines((prev) => {
              const newLines = [...prev];
              newLines[lineIdx] = {
                text: partialText,
                type: line.type,
                complete: false,
              };
              return newLines;
            });
            const charTimeout = setTimeout(() => typeChar(charIdx + 1), 30);
            timeouts.push(charTimeout);
          } else {
            setDisplayedLines((prev) => {
              const newLines = [...prev];
              newLines[lineIdx] = {
                ...newLines[lineIdx],
                complete: true,
              };
              return newLines;
            });
            const nextLineTimeout = setTimeout(
              () => processLine(lineIdx + 1),
              200
            );
            timeouts.push(nextLineTimeout);
          }
        };

        typeChar(0);
      }, line.delay);
      timeouts.push(delayTimeout);
    };

    processLine(0);

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, []);

  const getLineColor = (type: string) => {
    switch (type) {
      case "command":
        return "text-purple-400";
      case "output":
        return "text-blue-400";
      case "comment":
        return "text-gray-400";
      default:
        return "text-white";
    }
  };

  const getPrompt = (type: string) => {
    if (type === "command") return "$ ";
    if (type === "output") return "→ ";
    if (type === "comment") return "// ";
    return "";
  };

  return (
    <div className="h-full w-full overflow-hidden rounded-2xl border border-gray-700 bg-gray-900 shadow-2xl">
      <div className="flex items-center gap-2 border-b border-gray-700 bg-gray-800 px-4 py-3">
        <div className="flex flex-shrink-0 items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div
            className="h-3 w-3 rounded-full"
            style={{
              backgroundColor: "#22c55e",
              display: "block",
              visibility: "visible",
              opacity: "1",
            }}
          />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>
        <div className="ml-6 flex min-w-0 flex-1 items-center gap-2">
          <div className="h-2 w-2 flex-shrink-0 animate-pulse rounded-full bg-green-500" />
          <span
            className="truncate text-xs text-gray-400"
            style={{
              fontFamily:
                "'Courier New', 'Monaco', 'Menlo', 'Consolas', monospace",
            }}
          >
            coder-collective@terminal
          </span>
        </div>
      </div>

      <div
        className="h-[500px] overflow-y-auto p-6 text-sm"
        style={{
          fontFamily: "'Courier New', 'Monaco', 'Menlo', 'Consolas', monospace",
        }}
      >
        <div className="space-y-1">
          {displayedLines.map((line, index) => (
            <div key={index} className="flex items-start">
              <span className="mr-2 text-white/60">{getPrompt(line.type)}</span>
              <span className={getLineColor(line.type)}>{line.text}</span>
              {index === displayedLines.length - 1 &&
                isTyping &&
                !line.complete && (
                  <span className="ml-1 animate-blink text-purple-400">▊</span>
                )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Terminal;
