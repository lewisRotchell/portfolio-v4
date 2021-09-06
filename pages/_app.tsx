import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from "next/head";
import { Layout } from "../Layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return(
  <>
       <Head>
        <title></title>
        <meta name="description" content="" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
   </>)
}
export default MyApp
