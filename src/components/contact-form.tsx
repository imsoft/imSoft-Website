"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

interface ContactFormProps {
  dictionary: {
    name: string;
    email: string;
    phone: string;
    message: string;
    privacyPolicy: string;
    privacyLink: string;
    privacyError: string;
    submit: string;
    successMessage: {
      title: string;
      description: string;
    };
    errorMessage: {
      title: string;
      description: string;
    };
  };
}

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "El nombre debe tener al menos 2 caracteres." })
    .max(50, { message: "El nombre no puede exceder los 50 caracteres." }),
  email: z.string().email({ message: "Correo electrónico inválido." }),
  phone: z
    .string()
    .min(10, { message: "El teléfono debe tener al menos 10 dígitos." })
    .max(15, { message: "El teléfono no puede exceder los 15 dígitos." })
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .min(10, { message: "El mensaje debe tener al menos 10 caracteres." })
    .max(500, { message: "El mensaje no puede exceder los 500 caracteres." }),
  privacyPolicy: z.boolean().refine((value) => value === true, {
    message: "Debes aceptar el aviso de privacidad para continuar.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm({ dictionary }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      privacyPolicy: false,
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
        }),
      });

      if (!response.ok) {
        throw new Error("No se pudo enviar el mensaje.");
      }

      toast(dictionary.successMessage.title, {
        description: dictionary.successMessage.description,
        duration: 5000,
      });

      form.reset();
    } catch (error) {
      console.error(error);

      toast(dictionary.errorMessage.title, {
        description: dictionary.errorMessage.description,
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="px-6 pt-20 lg:px-8">
      <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Nombre */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block text-sm font-semibold text-primary dark:text-primary">
                    {dictionary.name}
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="mt-2.5 block w-full rounded-md bg-background border border-input px-3.5 py-2 text-base text-foreground dark:text-foreground shadow-sm focus:ring-1 focus:ring-blue-600 dark:focus:ring-blue-400"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs mt-1 text-destructive dark:text-destructive" />
                </FormItem>
              )}
            />

            {/* Correo */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block text-sm font-semibold text-primary dark:text-primary">
                    {dictionary.email}
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      className="mt-2.5 block w-full rounded-md bg-background border border-input px-3.5 py-2 text-base text-foreground dark:text-foreground shadow-sm focus:ring-1 focus:ring-blue-600 dark:focus:ring-blue-400"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs mt-1 text-destructive dark:text-destructive" />
                </FormItem>
              )}
            />

            {/* Teléfono */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block text-sm font-semibold text-primary dark:text-primary">
                    {dictionary.phone}
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="mt-2.5 block w-full rounded-md bg-background border border-input px-3.5 py-2 text-base text-foreground dark:text-foreground shadow-sm focus:ring-1 focus:ring-blue-600 dark:focus:ring-blue-400"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs mt-1 text-destructive dark:text-destructive" />
                </FormItem>
              )}
            />

            {/* Mensaje */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block text-sm font-semibold text-primary dark:text-primary">
                    {dictionary.message}
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      className="mt-2.5 block w-full rounded-md bg-background border border-input px-3.5 py-2 text-base text-foreground dark:text-foreground shadow-sm focus:ring-1 focus:ring-blue-600 dark:focus:ring-blue-400 min-h-[120px] resize-y"
                      {...field}
                    />
                  </FormControl>
                  <div className="flex justify-end mt-1">
                    <span
                      className={`text-xs ${
                        field.value.length > 500
                          ? "text-destructive dark:text-destructive"
                          : "text-muted-foreground dark:text-muted-foreground"
                      }`}
                    >
                      {field.value.length}/500
                    </span>
                  </div>
                  <FormMessage className="text-xs mt-1 text-destructive dark:text-destructive" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="privacyPolicy"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-4 border border-input dark:border-border">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      id="privacyPolicy"
                      className="
            data-[state=checked]:bg-blue-600 dark:data-[state=checked]:bg-blue-500 
            data-[state=checked]:border-blue-600 dark:data-[state=checked]:border-blue-500 
            focus:ring-1 focus:ring-blue-600 dark:focus:ring-blue-500
          "
                    />
                  </FormControl>

                  <div className="space-y-1 leading-none">
                    <FormLabel
                      htmlFor="privacyPolicy"
                      className="text-sm font-medium text-foreground dark:text-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {dictionary.privacyPolicy}{" "}
                      <Link
                        href={`/es/privacy-notice`}
                        className="
              text-blue-600 dark:text-blue-500 
              hover:text-blue-500 dark:hover:text-blue-400 
              underline underline-offset-2
            "
                        target="_blank"
                      >
                        {dictionary.privacyLink}
                      </Link>
                    </FormLabel>

                    <FormMessage className="text-xs text-destructive dark:text-destructive mt-1" />
                  </div>
                </FormItem>
              )}
            />

            {/* Botón Enviar */}
            <div className="mt-8 flex justify-end">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="rounded-md bg-blue-600 px-5 py-2.5 text-center text-sm font-semibold text-white dark:bg-blue-500 hover:bg-blue-500 dark:hover:bg-blue-400 focus:ring-1 focus:ring-blue-600 dark:focus:ring-blue-400"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {dictionary.submit}
                  </>
                ) : (
                  "Enviar mensaje"
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
