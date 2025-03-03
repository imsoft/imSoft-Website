import Image from "next/image";
import Link from "next/link";
import { SquareArrowOutUpRight } from "lucide-react";

interface PortfolioCardProps {
  name: string;
  type: string;
  href: string;
  alt: string;
  imageUrl: string;
}

export const PortfolioCard = ({
  name,
  type,
  href,
  alt,
  imageUrl,
}: PortfolioCardProps) => {
  return (
    <>
      <li key={name} aria-label={`Proyecto ${name}, tipo: ${type}`}>
        <div className="space-y-4">
          <div className="aspect-w-3 aspect-h-2">
            <Image
              className="rounded-lg object-cover shadow-lg"
              src={imageUrl}
              alt={alt}
              width={354}
              height={193}
            />
          </div>
          <div className="space-y-2">
            <div className="space-y-1 text-lg font-medium leading-6">
              <Link
                href={href}
                aria-label={`Ver más detalles sobre el proyecto ${name}`}
              >
                <div className="inline-flex">
                  <h3 className="text-foreground">{name}</h3>
                  <SquareArrowOutUpRight
                    className="ml-1 mt-1 h-4 w-4 text-foreground"
                    aria-hidden="true"
                  />
                </div>
              </Link>
              <p className="text-primary-600 text-xs">{type}</p>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};
