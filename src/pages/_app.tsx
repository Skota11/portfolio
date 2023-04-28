import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function App({ Component, pageProps }: AppProps) {
  return <>
  <Header></Header>
  <Component {...pageProps} />
  <Footer></Footer>
  </>
}
