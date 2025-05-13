import { Resend } from "resend";
import { NextResponse, NextRequest } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, phone, message } = await req.json();

  try {
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
                width: 150px;
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
                background-color: #0f172a;
                padding: 15px;
                border-radius: 8px;
                border: 1px solid #2563eb;
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
                <img src="https://imsoft.io/logo.png" alt="imSoft Logo">
                <h1>Nuevo mensaje de contacto</h1>
              </div>
              <div class="content">
                <div class="field">
                  <strong>Nombre:</strong> ${name}
                </div>
                <div class="field">
                  <strong>Email:</strong> ${email}
                </div>
                <div class="field">
                  <strong>Teléfono:</strong> ${phone || "No proporcionado"}
                </div>
                <div class="field">
                  <strong>Mensaje:</strong>
                  <p>${message.replace(/\n/g, "<br>")}</p>
                </div>
              </div>
              <div class="footer">
                © ${new Date().getFullYear()} imSoft. Todos los derechos reservados.
              </div>
            </div>
          </body>
        </html>
      `,
    });

    // Correo de confirmación para el usuario
    await resend.emails.send({
      from: "imSoft <no-reply@imsoft.io>",
      to: email,
      subject: "Gracias por contactarnos - imSoft",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Mensaje recibido - imSoft</title>
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
                width: 150px;
                margin-bottom: 10px;
              }
              .content {
                padding: 20px;
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
                <img src="https://imsoft.io/logo.png" alt="imSoft Logo">
                <h1>¡Mensaje Recibido!</h1>
              </div>
              <div class="content">
                <p>Hola ${name},</p>
                <p>Gracias por contactarnos. Hemos recibido tu mensaje y te responderemos lo antes posible.</p>
                <div style="text-align: center; margin-top: 20px;">
                  <a href="https://imsoft.io" style="background-color: #2563eb; color: #ffffff; padding: 10px 20px; text-decoration: none; border-radius: 5px;">
                    Visitar imSoft
                  </a>
                </div>
              </div>
              <div class="footer">
                © ${new Date().getFullYear()} imSoft. Todos los derechos reservados.
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json(
      { message: "Mensajes enviados con éxito" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error al enviar correo:", error);
    return NextResponse.json(
      { message: "Error al enviar correo" },
      { status: 500 }
    );
  }
}
