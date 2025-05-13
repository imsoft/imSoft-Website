import { Phone, Mail } from "lucide-react";

interface ContactInfoProps {
  dictionary: {
    title: string;
    description: string;
    phoneLabel: string;
    emailLabel: string;
  };
}

export function ContactInfo({ dictionary }: ContactInfoProps) {
  return (
    <div className="relative px-6 pt-24 lg:static lg:px-8">
      <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
        <h2 className="text-pretty text-4xl font-semibold tracking-tight text-primary dark:text-primary sm:text-5xl">
          {dictionary.title}
        </h2>
        <p className="mt-6 text-lg/8 text-secondary-foreground dark:text-secondary-foreground">
           {dictionary.description}
        </p>
        <dl className="mt-10 space-y-6 text-base/7 text-muted-foreground dark:text-muted-foreground">
          <div className="flex gap-x-4 items-center">
            <dt className="flex-none">
              <span className="sr-only">{dictionary.phoneLabel}</span>
              <Phone className="h-7 w-6 text-blue-500 dark:text-blue-400" />
            </dt>
            <dd>
              <a
                href="tel:+523325365558"
                className="hover:text-primary dark:hover:text-primary flex items-center transition-colors"
              >
                <span className="text-lg font-medium text-foreground dark:text-foreground">
                  33 2536 5558
                </span>
              </a>
            </dd>
          </div>
          <div className="flex gap-x-4 items-center">
            <dt className="flex-none">
              <span className="sr-only">{dictionary.emailLabel}</span>
              <Mail className="h-7 w-6 text-blue-500 dark:text-blue-400" />
            </dt>
            <dd>
              <a
                href="mailto:contacto@imsoft.io"
                className="hover:text-primary dark:hover:text-primary flex items-center transition-colors"
              >
                <span className="text-lg font-medium text-foreground dark:text-foreground">
                  contacto@imsoft.io
                </span>
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
