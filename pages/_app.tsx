import '../styles/globals.css'
import type { AppProps } from 'next/app'
import "./_app.css"

export default function App({ Component, pageProps }: AppProps) {
  console.log("Appレンダリング");
  return <Component {...pageProps} />
}
