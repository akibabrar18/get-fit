import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import NavBar from "@/components/homePage/NavBar";
import Footer from "@/components/homePage/Footer";
import WorkoutContextProvider from "@/context/WorkoutContextProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "FITLOG",
  description: "Track your workouts and fitness plans with FITLOG.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`scroll-smooth ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-[#000000] text-white">
        <WorkoutContextProvider>
          <NavBar />
          {children}
          <ToastContainer />
          <Footer />
        </WorkoutContextProvider>
      </body>
    </html>
  );
}