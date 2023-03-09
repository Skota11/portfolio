import Head from 'next/head'
import Link from 'next/link'
import { Inter } from 'next/font/google'

//module
import {
  animated,
  useSpring,
} from '@react-spring/web';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

//com
import Header from "../../component/header";
import Footer from "../../component/footer";

export default function Home() {
  const springX = useSpring({
    from: { x: -100 },
    to: { x: 0 },
  });
  const springY = useSpring({
    from: { y: -300 },
    to: { y: 0 },
  });
  return (
    <>
      <Head>
        <title>Skota11</title>
        <meta name="description" content="Skota11 Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://avatars.githubusercontent.com/u/91359399" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" rel="stylesheet" />
      </Head>
      <Header></Header>
        <animated.div style={{...springX,}}>
        <h1 className='text-center text-xl'>Skota11のホームページにようこそ！</h1>
        </animated.div>
        <main>
          <animated.div style={{
          ...springX,
        }} className='my-8' id="profile">
            <h1 className='text-center text-2xl underline underline-offset-4 mb-4'>Works</h1>
            <div className='flex place-content-center'>
            <div className='rounded-xl bg-sprout w-4/5 max-w-screen-sm p-8 shadow-lg duration-300 hover:shadow-neutral-300'>
              <div className='border-l-4 pl-4 my-6'>
              <a href="https://mi.skota11.com" target="_blank" rel="noopener noreferrer">
                <h2>KotaSkey</h2>
                <p>僕のラズパイで建てている、Misskeyサーバーです。</p>
                </a>
              </div>
              <div className='border-l-4 pl-4 my-6'>
              <a href="https://github.com/Skota11/gyaku-bot" target="_blank" rel="noopener noreferrer">
                <h2>GyakuBot</h2>
                <p>逆翻訳をしてくれる、DiscordBotです。</p>
                </a>
              </div>
              <div className='border-l-4 pl-4 my-6'>
              <a href="https://github.com/Skota11/screenlive" target="_blank" rel="noopener noreferrer">
                <h2>ScreenLive</h2>
                <p>あなたの画面を簡単に共有できます。</p>
                </a>
              </div>
              <div className='border-l-4 pl-4 my-6'>
              <a href="https://github.com/Skota11/twi-label" target="_blank" rel="noopener noreferrer">
                <h2>TwiLabel</h2>
                <p>ツイートラベルを復活させます。(Twitter for xx)</p>
                </a>
              </div>
              <div className='border-l-4 pl-4 my-6'>
              <a href="https://vc.skota11.repl.co/" target="_blank" rel="noopener noreferrer">
                <h2>Let’s VC</h2>
                <p>同じ名前の部屋に入るだけで、VCができる。</p>
                </a>
              </div>
            </div>
            </div>
          </animated.div>
          <Footer></Footer>
        </main>
    </>
  )
}
