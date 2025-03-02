import Image from "next/image";
import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "/servicios" },
  { name: "Portafolio", href: "/portafolio" },
  { name: "Blog", href: "/blog" },
  { name: "Historia", href: "/historia" },
  { name: "Contacto", href: "/contacto" },
];

export const Header = () => {
  return (
    <header className="w-full bg-white fixed top-0 left-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between py-4 px-6 lg:px-12">
        <div className="-ml-3 flex lg:flex-1">
          <Link href={"/"}>
            <Image
              alt="imSoft logo"
              src="https://res.cloudinary.com/https-imsoft-io/image/upload/v1706594670/imsoft-images/imsoft/isotipo-imsoft-transparente-azul-cuadrado.png"
              className="h-16 w-auto"
              width={64}
              height={64}
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {navigation.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      {item.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="flex flex-col space-y-4 px-6 py-6"
            >
              <SheetHeader className="mt-10 items-start space-x-1">
                <SheetTitle>imSoft</SheetTitle>
                <SheetDescription>
                  Transformamos Ideas en Software
                </SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <SheetClose asChild key={item.name}>
                    <Link
                      href={item.href}
                      className="text-lg hover:text-gray-600"
                    >
                      {item.name}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
