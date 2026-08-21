import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Сезон прогулок — летний гид #Sekta",
  description: "Летний гид по активности и перекусам от #Sekta и Mary’s Recipes.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "Сезон прогулок — летний гид #Sekta",
    description: "Летний гид по активности и перекусам от #Sekta и Mary’s Recipes.",
    images: [{ url: "/walk-images/p3-04.jpg", width: 1200, height: 1600, alt: "Прогулка в парке" }],
  },
  twitter: { card: "summary_large_image", images: ["/walk-images/p3-04.jpg"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>{children}</body></html>;
}
