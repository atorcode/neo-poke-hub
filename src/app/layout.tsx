import "./globals.css";
import { Inter } from "next/font/google";
import { NavBar } from "./components/nav-bar";
import { Footer } from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NeoPokeHub",
  description: "The new hub for all things Pokemon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <div
          className="flex items-center justify-center"
          style={{ backgroundColor: "#101114" }}
        >
          <Footer />
        </div>
      </body>
    </html>
  );
}
