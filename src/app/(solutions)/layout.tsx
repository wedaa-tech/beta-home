import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";

const font = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WeDAA | Solutions",
  description: "Grow your business with WeDAA, a design & development platform.",
  openGraph: {
    images: [
      {
        url: '',
        width: 1200,
        height: 630,
        alt: 'WeDAA Logo',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>

        {children}

      </body>
    </html>
  );
}
