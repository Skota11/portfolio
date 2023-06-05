import '@/styles/globals.css'
import { GA_TRACKING_ID, pageview } from '../libs/gtag';
import type { AppProps } from 'next/app'
import Header from "../../components/header";
import Footer from "../../components/footer";

import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    // GA_TRACKING_ID が設定されていない場合は、処理終了
    if (!GA_TRACKING_ID) return;

    const handleRouteChange = (url: string) => {
      pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  return <>
    <Header></Header>
    <Component {...pageProps} />
    <Footer></Footer>
  </>
}
