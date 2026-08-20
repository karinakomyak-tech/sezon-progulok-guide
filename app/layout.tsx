import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Сезон прогулок — три упаковки гайда",
  description: "Летний гид по активности и перекусам от #Sekta и Mary’s Recipes.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "Сезон прогулок — один гайд, три упаковки",
    description: "Летний гид по активности и перекусам от #Sekta и Mary’s Recipes.",
    images: [{ url: "/og.png", width: 1536, height: 869, alt: "Сезон прогулок" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>{children}</body></html>;
}
