import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pollocks School - Excellence Hub",
  description:
    "At Pollocks International School, we nurture global minds through creative excellence, rigorous academics, and character building since 1985.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700;800;900&family=Gochi+Hand&family=Architects+Daughter&family=Patrick+Hand&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="paper-texture font-display text-slate-800">
        {children}
      </body>
    </html>
  );
}
