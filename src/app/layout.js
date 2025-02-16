import { Tajawal } from "next/font/google";
import "./globals.css";
import NavigationBar from "./components/NavigationBar.jsx";
import Footer from "./components/Footer";

const tajawal = Tajawal({
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "DalSeen",
  description: "Sofwear company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={tajawal.className}>
        <NavigationBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
