import "./globals.css";
import ReduxProvider from "./this/providers/redux-provider";
import NextThemeProvider from "./this/providers/theme-provider";
import TranslateProvider from "./this/providers/translate-provider";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body>
        <ReduxProvider>
          <NextThemeProvider> 
            <TranslateProvider>
              {children}
            </TranslateProvider>
          </NextThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
