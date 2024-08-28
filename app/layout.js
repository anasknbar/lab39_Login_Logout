import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import ThemeWrapper from "./context/themeContext";
import AuthWrapper from "./context/authContext";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeWrapper>
          <AuthWrapper>
          
            <main>{children}</main>
            
          </AuthWrapper>
        </ThemeWrapper>
      </body>
    </html>
  );
}
