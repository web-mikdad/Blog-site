"use client";

import { useTheme } from "../Provider/theme-provider"
import DotPattern from "../components/ui/dot-pattern";
import Particles from "../components/ui/particles";


export const BackgroundPattern = () => {
  const { theme } = useTheme();
  const isLightTheme = theme === "light";

  return (
    <>
      <DotPattern
        width={20}
        height={40}
        cx={1}
        cy={1}
        cr={1}
        className="mask-[radial-gradient(ellipse,rgba(0,0,0,0.3)_30%,black_50%)] dark:fill-slate-700"
      />
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={isLightTheme ? "#000" : "#fff"}
        refresh
      />
    </>
  );
};
