import { Resend } from "resend";
import { NextResponse, NextRequest } from "next/server";
import { getDictionary } from "@/app/i18n/dictionary";
import type { Lang } from "@/types/Lang";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, phone, message, lang = "en" } = await req.json();

  const validLangs: Lang[] = ["en", "es", "ru", "zh"];
  const validatedLang: Lang = validLangs.includes(lang as Lang)
    ? (lang as Lang)
    : "en";

  try {
    const dictionary = await getDictionary(validatedLang);
    const emailContent = dictionary.company.contact.confirmationEmail;

    const year = new Date().getFullYear();

    // Enviar correo a imSoft
    await resend.emails.send({
      from: "imSoft <no-reply@imsoft.io>",
      to: "contacto@imsoft.io",
      subject: `Nuevo mensaje de contacto de ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Nuevo mensaje de contacto - imSoft</title>
            <style>
              body {
                font-family: 'Segoe UI', Roboto, Ubuntu, 'Open Sans', sans-serif;
                background-color: #0f172a;
                color: #e2e8f0;
                margin: 0;
                padding: 0;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #1e293b;
                border-radius: 8px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              }
              .header {
                text-align: center;
                padding: 20px;
                background-color: #2563eb;
                border-radius: 8px 8px 0 0;
              }
              .header img {
                width: 120px;
                margin-bottom: 10px;
              }
              .header h1 {
                margin: 0;
                font-size: 24px;
                color: #ffffff;
              }
              .content {
                padding: 20px;
              }
              .field {
                margin-bottom: 15px;
                background-color: #1e293b;
                padding: 15px;
                border-radius: 8px;
                border: 1px solid #2563eb;
                color: #e2e8f0;
              }
              .footer {
                text-align: center;
                margin-top: 20px;
                color: #94a3b8;
                font-size: 14px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <img src="https://res.cloudinary.com/https-imsoft-io/image/upload/v1740964323/imsoft-images/imsoft/logotipo-imsoft-white.png" alt="imSoft Logo">
                <h1>Nuevo mensaje de contacto</h1>
              </div>
              <div class="content">
                <div class="field"><strong>Nombre:</strong> ${name}</div>
                <div class="field"><strong>Email:</strong> <a href="mailto:${email}" style="color: #60a5fa;">${email}</a></div>
                <div class="field"><strong>Teléfono:</strong> ${
                  phone || "No proporcionado"
                }</div>
                <div class="field"><strong>Idioma:</strong> ${lang.toUpperCase()}</div>
                <div class="field"><strong>Mensaje:</strong><p>${message.replace(
                  /\n/g,
                  "<br>"
                )}</p></div>
              </div>
              <div class="footer">© ${year} imSoft. Todos los derechos reservados.</div>
            </div>
          </body>
        </html>
      `,
    });

    // Correo de confirmación para el usuario
    await resend.emails.send({
      from: "imSoft <no-reply@imsoft.io>",
      to: email,
      subject: emailContent.subject,
      html: `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${emailContent.subject}</title>
        <style>
          body {
            font-family: 'Segoe UI', Roboto, Ubuntu, 'Open Sans', sans-serif;
            background-color: #0f172a; /* Zinc-900 */
            color: #e2e8f0; /* Zinc-300 */
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #1e293b; /* Zinc-800 */
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          .header {
            text-align: center;
            padding: 20px;
            background-color: #2563eb; /* Blue-600 */
            border-radius: 8px 8px 0 0;
          }
          .header img {
            width: 120px;
            margin-bottom: 10px;
          }
          .header h1 {
            margin: 0;
            font-size: 24px;
            color: #ffffff; /* White */
            font-weight: bold;
          }
          .content {
            padding: 20px;
            text-align: center;
          }
          .content p {
            color: #e2e8f0; /* Zinc-300 */
            font-size: 16px;
            line-height: 1.5;
            margin-bottom: 15px;
          }
          .content .greeting {
            color: #93c5fd; /* Blue-300 */
            font-weight: bold;
          }
          .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #2563eb; /* Blue-600 */
            color: #ffffff; /* White */
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
            transition: background-color 0.3s ease;
          }
          .button:hover {
            background-color: #1d4ed8; /* Blue-700 */
          }
          .footer {
            text-align: center;
            margin-top: 20px;
            color: #94a3b8; /* Zinc-400 */
            font-size: 14px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <img src="https://res.cloudinary.com/https-imsoft-io/image/upload/v1740964323/imsoft-images/imsoft/logotipo-imsoft-white.png" alt="imSoft Logo">
            <h1>${emailContent.subject}</h1>
          </div>

          <div class="content">
            <p class="greeting">${emailContent.greeting.replace(
              "{name}",
              name
            )}</p>
            <p>${emailContent.message}</p>

            <div style="margin-top: 20px;">
  <a
    href="https://imsoft.io"
    style="
      display: inline-block;
      padding: 10px 20px;
      background-color: #2563eb;
      color: #ffffff !important;
      text-decoration: none;
      border-radius: 5px;
      font-weight: bold;
      font-family: 'Segoe UI', Roboto, Ubuntu, 'Open Sans', sans-serif;
      transition: background-color 0.3s ease;
    "
  >
    ${emailContent.buttonText}
  </a>
</div>

          </div>

          <div class="footer">
            ${emailContent.footer.replace("{year}", String(year))}
          </div>
        </div>
      </body>
    </html>
  `,
    });

    return NextResponse.json({ message: "Mensajes enviados con éxito" });
  } catch (error) {
    console.error("Error al enviar correo:", error);
    return NextResponse.json(
      { message: "Error al enviar correo" },
      { status: 500 }
    );
  }
}
