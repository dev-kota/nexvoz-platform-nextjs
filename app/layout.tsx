import "./globals.css";
import ReduxProvider from "./this/providers/redux-provider";
import NextThemeProvider from "./this/providers/theme-provider";
import TranslateProvider from "./this/providers/translate-provider";
import { Toaster } from "@/components/ui/toaster"
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
              <Toaster/>
            </TranslateProvider>
          </NextThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
