import './globals.css';
import SiteHeader from '../components/SiteHeader';

export const metadata = {
  title: 'Rita Fitness Coach',
  icons: { icon: '/assets/rita-banner-portrait.jpg' },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://rita-fitness.vercel.app'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body className="antialiased">
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
