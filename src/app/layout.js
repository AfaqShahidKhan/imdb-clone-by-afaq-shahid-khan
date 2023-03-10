import Header from "@/components/Header";
import "./globals.css";
import Providers from "./Providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* Header */}
          <Header />
          {/* Navbar */}
          {/* Searchbar */}

          {children}
        </Providers>
      </body>
    </html>
  );
}
