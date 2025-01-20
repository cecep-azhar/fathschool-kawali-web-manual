import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "SMKN 1 Kawali",
  description: "SMKN 1 Kawali adalah sekolah menengah kejuruan unggulan yang berfokus pada pendidikan berkualitas dan pengembangan keterampilan siswa.",
  keywords: [
    "SMKN 1 Kawali",
    "Sekolah Menengah Kejuruan",
    "Pendidikan Kejuruan",
    "Kawali",
    "Sekolah Terbaik",
    "SMK Unggulan",
  ],
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
  openGraph: {
    title: "SMKN 1 Kawali - Sekolah Menengah Kejuruan Unggulan",
    description:
      "Selamat datang di SMKN 1 Kawali, tempat belajar dan berkembang menuju masa depan yang cerah.",
    url: "https://smkn1kawali.sch.id",
    siteName: "SMKN 1 Kawali",
    type: "website",
  },
  alternates: {
    canonical: "https://smkn1kawali.sch.id/",
    languages: {
      "id-ID": "https://smkn1kawali.sch.id/",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
