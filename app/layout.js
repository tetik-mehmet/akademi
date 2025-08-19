import { Nunito } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "600", "700", "800"],
});

export const metadata = {
  title: "Tega – Çocuklar için Akıllı Öğrenme",
  description: "0–17 yaş için sıcak, güvenli ve oyunlaştırılmış öğrenme deneyimi.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body
        className={`${nunito.variable} antialiased bg-gradient-to-b from-orange-50/60 via-pink-50/50 to-sky-50/60`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
