import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "गणपती बाप्पाचे आगमन",
  description: "गणपती उत्सवाचे मनःपूर्वक आमंत्रण",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="mr">
      <body>{children}</body>
    </html>
  );
}
