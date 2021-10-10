import Head from 'next/head'
import { Config } from '../config'
import type { AppProps } from 'next/app'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  const title = pageProps.title
    ? `${pageProps.title} - ${Config.App.Name}`
    : Config.App.Name

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="theme-color" content={Config.App.Colors.Teal} />
        <meta name="description" content={Config.App.Description} />

        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/icons/icon-192x192.png"
        />

        <title>{title}</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
