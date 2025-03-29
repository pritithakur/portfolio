import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="description" content="Priti Thakur - Full Stack Developer Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-portfolio-domain.com" />
        <meta property="og:title" content="Priti Thakur - Full Stack Developer" />
        <meta property="og:description" content="Full Stack Developer specializing in modern web technologies" />
        <meta property="og:image" content="https://your-portfolio-domain.com/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Priti Thakur - Full Stack Developer" />
        <meta name="twitter:description" content="Full Stack Developer specializing in modern web technologies" />
        <meta name="twitter:image" content="https://your-portfolio-domain.com/images/og-image.jpg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
} 