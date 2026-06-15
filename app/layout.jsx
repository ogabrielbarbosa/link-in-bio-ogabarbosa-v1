import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space",
  display: "swap",
});

export const metadata = {
  // defina NEXT_PUBLIC_SITE_URL no deploy para resolver a imagem OG por URL absoluta
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "ogabarbosa — Freela de Elite",
  description: "devs que viram freelancers de elite.",
  openGraph: {
    title: "ogabarbosa — Freela de Elite",
    description: "devs que viram freelancers de elite.",
    images: ["/cover.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${jetbrainsMono.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}
