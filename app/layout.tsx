import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adillion- Software Agency and creative IT solution HTML Template",
  description: "Adillion Software Agency and creative IT solution website",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Bootstrap CSS */}
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        {/* Swiper slider CSS */}
        <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
        {/* Style CSS */}
        <link rel="stylesheet" href="/assets/css/style2.css" />
        {/* Boxicons CSS */}
        <link
          rel="stylesheet"
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        />
      </head>
      <body className="bg-6">{children}</body>
    </html>
  );
}
