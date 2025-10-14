import { useEffect, useState } from "react";

interface SkillsProps {
  skill: string;
  target: number;
  color: string;
  start: boolean;
  delay?: number;
}

export default function Skills({
  skill,
  target,
  color,
  start,
  delay = 0,
}: SkillsProps) {
  const [progress, setProgress] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [barWidth, setBarWidth] = useState(40);

  useEffect(() => {
    const updateBarWidth = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 480) {
        setBarWidth(20);
      } else if (screenWidth < 768) {
        setBarWidth(30);
      } else {
        setBarWidth(40);
      }
    };

    updateBarWidth();
    window.addEventListener("resize", updateBarWidth);
    return () => window.removeEventListener("resize", updateBarWidth);
  }, []);

  useEffect(() => {
    if (!start) return;

    const timeout = setTimeout(() => {
      setIsActive(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, [start, delay]);

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= target) {
          clearInterval(interval);
          return target;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [isActive, target]);

  const filledBlocks = Math.round((progress / 100) * barWidth);
  const bar = "█".repeat(filledBlocks) + "░".repeat(barWidth - filledBlocks);

  return (
    <div
      className="flex flex-col items-center gap-3"
      style={{ fontFamily: "Fira Code, monospace" }}
    >
      <div className="text-center px-2">
        <span
          style={{ color }}
          className="font-medium text-sm sm:text-base md:text-lg"
        >
          {skill}
          {progress === target && (
            <span className="ml-1 sm:ml-2 text-green-400">✓</span>
          )}
        </span>
      </div>
      <div className="flex items-center gap-2 sm:gap-4 w-full justify-center">
        <div className="text-xs sm:text-sm bg-gray-800 rounded px-1 sm:px-2 py-1 overflow-hidden min-w-0 flex-shrink">
          <span style={{ color, marginRight: "4px" }} className="block">
            {bar}
          </span>
        </div>
        <span
          style={{ color }}
          className="text-xs sm:text-sm font-medium flex-shrink-0"
        >
          {progress}%
        </span>
      </div>
    </div>
  );
}
