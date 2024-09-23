import { Footer, Navbar } from "@/components";
import { cn } from "@/lib/utils";
import { Space_Grotesk } from "next/font/google";


const font = Space_Grotesk({
    subsets: ["latin"],
    weight: ["400", "700"], 
  });

import React from 'react'

interface Props {
    children: React.ReactNode;
}

const MarketingLayout = ({ children }: Props) => {
    return (
        <html lang="en" suppressHydrationWarning>
        <body
            className={cn(
                "min-h-screen bg-background text-foreground antialiased max-w-full overflow-x-hidden",
                font.className
            )}
        >
        
        <div className="flex flex-col items-center w-full">
            <Navbar />
            {children}
            <Footer />
        </div>
        </body>
        </html>
    )
};

export default MarketingLayout
