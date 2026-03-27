import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import * as Sentry from "@sentry/nextjs";

const inter = Inter({ subsets: ["latin"] });

export function generateMetadata(): Metadata {
  return {
    title: 'Ali Ahmed | Full-Stack Software Engineer | React & Next.js',
    description: 'I build clean, high-performance web applications, scalable MVPs, and digital solutions using React, Next.js, Node.js, and Laravel for businesses in Egypt and the MENA region.',
    
    applicationName: 'Ali Ahmed Portfolio',
    authors: [{ name: 'Ali Ahmed', url: 'https://aliahmed-portfolio.vercel.app/' }],
    creator: 'Ali Ahmed',
    
    keywords: [
      'Ali Ahmed', 
      'Ali Ahmed Developer',
      'Full-Stack Developer Egypt', 
      'Software Engineer MENA', 
      'React Developer',
      'Next.js Developer',
      'Node.js',
      'Laravel',
      'Freelance Web Developer'
    ],
    
    alternates: {
      canonical: 'https://aliahmed-portfolio.vercel.app/',
    },
    
    openGraph: {
      title: 'Ali Ahmed | Full-Stack Software Engineer',
      description: 'Building clean, high-performance web applications and scalable MVPs for the MENA region.',
      url: 'https://aliahmed-portfolio.vercel.app/',
      siteName: 'Ali Ahmed | Portfolio',
      images: [
        {
          url: '/og.png', 
          width: 1200,
          height: 630,
          alt: 'Ali Ahmed - Full-Stack Software Engineer',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },

    icons: {
      icon: {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    },

    other: {
      ...Sentry.getTraceData(),
    },

    verification: {
      google: 'bnN3IjVyT0shChYcMPCqEJF_SqcsUdGgReUBtNYLQsw', 
    },
  };
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}