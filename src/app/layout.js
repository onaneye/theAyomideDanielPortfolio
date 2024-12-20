import localFont from "next/font/local";
import "./globals.css";
import { CssBaseline } from "@mui/material";

// Define Montserrat with multiple weights
const montserrat = localFont({
  src: [
    {
      path: "./fonts/Montserrat-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Montserrat-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "AyomideDaniel",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased bg-[#15171c]`}>
        <CssBaseline />
        {children}
      </body>
    </html>
  );
}
