import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Layout } from "../Layout/Layout";
import { ThemeProvider } from "../context/ThemeProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider>
        <Head>
          <title></title>
          <meta name="description" content="" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
export default MyApp;
