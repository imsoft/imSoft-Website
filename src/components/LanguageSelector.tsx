"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languages = [
  { code: "es", label: "Español", flag: "🇲🇽" },
  { code: "zh", label: "中文 (简体)", flag: "🇨🇳" },
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "ru", label: "Русский", flag: "🇷🇺" },
];

export const LanguageSelector = () => {
  const router = useRouter();
  const pathname = usePathname();

  const currentLangCode = pathname.split("/")[1];
  const currentLang =
    languages.find((l) => l.code === currentLangCode) || languages[0];
  const [selectedLang, setSelectedLang] = useState(currentLang);

  const handleSelect = (lang: (typeof languages)[0]) => {
    setSelectedLang(lang);

    const pathWithoutLang = pathname.split("/").slice(2).join("/") || "";
    const newPath = `/${lang.code}/${pathWithoutLang}`;
    router.push(newPath);
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="text-xl">
            {selectedLang.flag}
            <span className="sr-only">Seleccionar idioma</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-auto">
          {languages.map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => handleSelect(lang)}
              className="text-xl flex items-center gap-2 cursor-pointer"
            >
              {lang.flag} <span className="text-sm">{lang.label}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
