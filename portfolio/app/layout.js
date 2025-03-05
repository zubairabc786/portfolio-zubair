import { Sora } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "./component/Home/Navbar/ResponsiveNav";
import Footer from "./component/Home/footer/Footer";
import ScrollToTop from "./component/Helper/ScrollToTop";
import AnimatedCursor from "react-animated-cursor";

const font = Sora({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio",
  description: "WebDev Portfolio by Rizki Fauzi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="custom-scrollbar">
      <body className={`${font.className} `}>
        <div className="hidden md:block">
          <AnimatedCursor
            innerSize={8}
            outerSize={35}
            innerScale={2}
            outerScale={2}
            innerStyle={{
              backgroundColor: "white",
            }}
            outerStyle={{
              border: "3px solid white",
            }}
          />
        </div>

        <ResponsiveNav />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
