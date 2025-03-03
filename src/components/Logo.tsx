"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface LogoProps {
  light: string;
  dark: string;
  width?: number;
  height?: number;
}

export const Logo = ({ light, dark, width, height }: LogoProps) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const logoSrc = !mounted ? light : resolvedTheme === "dark" ? dark : light;

  return (
    <Image
      alt="imSoft logo"
      src={logoSrc}
      className="h-16 w-auto transition-opacity duration-300"
      width={width}
      height={height}
      priority
    />
  );
};
