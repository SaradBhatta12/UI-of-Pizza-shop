import { Inter } from "next/font/google";
import "./globals.css";
import ResponsiveAppBar from "./components/Appbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ui of restrurent",
  description: "build by sarad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ResponsiveAppBar />
        {children}
      </body>
    </html>
  );
}
