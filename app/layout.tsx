import type { Metadata } from "next";
import '@/assets/style/globals.css';
import {Inter} from 'next/font/google';
import { APP_DESCRIPTION, APP_NAME, SERVER_URL } from "@/lib/constants"; 

const inter = Inter({
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: {
    template: `%s | EcoTrack`,
    default: APP_NAME
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(SERVER_URL)
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter} antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}