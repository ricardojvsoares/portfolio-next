import type { Metadata } from 'next';
import './globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { ThemeProvider, Nav } from '@/components';
import { DotPattern } from '@/components';

export const metadata: Metadata = {
  title: 'Ricardo Soares Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <NextIntlClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <DotPattern>
              <Nav> {children}</Nav>
            </DotPattern>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
