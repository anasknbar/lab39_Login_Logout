import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import ThemeWrapper from "./context/theme";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeWrapper>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeWrapper>
      </body>
    </html>
  );
}
