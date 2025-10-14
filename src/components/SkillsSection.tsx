import { useState, useEffect } from "react";
import Skills from "./Skills";

export default function SkillsSection() {
  const [startLoading, setStartLoading] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStartLoading(true);
    }, 400);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex justify-center p-2 sm:p-4">
      <div
        className="p-4 sm:p-6 rounded-2xl shadow-lg border w-full"
        style={{
          width: "95%",
          maxWidth: "700px",
          backgroundColor: "#000000",
          color: "#ffffff",
          borderColor: "#6b7280",
          fontFamily: "Fira Code, monospace",
        }}
      >
        <div className="text-base sm:text-lg mb-4 sm:mb-6 text-left">
          {"> loading skills..."}
        </div>

        <div className="space-y-3 sm:space-y-4">
          <Skills
            skill="Backend: .NET, C#, TypeScript, Ruby"
            target={70}
            color="#4ade80"
            start={startLoading}
            delay={0}
          />
          <Skills
            skill="Frontend: React, Angular"
            target={50}
            color="#fbbf24"
            start={startLoading}
            delay={1000}
          />
          <div style={{ paddingBottom: "15px" }}>
            <Skills
              skill="DevOps: Docker, Kubernetes, AWS, Azure"
              target={60}
              color="#22d3ee"
              start={startLoading}
              delay={1200}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
