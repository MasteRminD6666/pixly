import "../styles/globals.css";
import Layout from "../components/Layout";
import Head from "next/head";
import { LanguageProvider, useLanguage } from "../context/LanguageContext";

function SEOHead() {
  const { t, locale } = useLanguage();

  return (
    <Head>
      <title>{t.meta.title}</title>
      <meta name="description" content={t.meta.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content={t.meta.title} />
      <meta property="og:description" content={t.meta.description} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={locale === "ar" ? "ar_SA" : "en_US"} />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="icon" href="/logo.png" />
      <link rel="apple-touch-icon" href="/logo.png" />
    </Head>
  );
}

function AppContent({ Component, pageProps }) {
  return (
    <>
      <SEOHead />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <AppContent Component={Component} pageProps={pageProps} />
    </LanguageProvider>
  );
}

export default MyApp;
