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
        <link rel="icon" href="https://avatars.githubusercontent.com/u/91359399" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
<link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <animated.div style={{ ...springX, }}>
        <h1 className='text-center text-xl'>こたのホームページにようこそ！</h1>
      </animated.div>
      <main>
        <animated.div style={{
          ...springX,
        }} className='my-8' id="profile">
          <h1 className='text-center text-2xl underline underline-offset-4 mb-4'>Works</h1>
          <div className='flex place-content-center'>
            <div className='rounded-xl bg-sprout w-11/12 max-w-screen-md p-8 shadow-lg duration-300 hover:shadow-2xl'>
              <div className='border-l-4 pl-4 my-6'>
                <a href="https://github.com/Skota11/gyaku-bot" target="_blank" rel="noopener noreferrer">
                  <h2>GyakuBot</h2>
                  <p>逆翻訳をしてくれるDiscordBot</p>
                </a>
              </div>
              <div className='border-l-4 pl-4 my-6'>
                <a href="https://discord.com/oauth2/authorize?client_id=1282596132001939549&permissions=0&integration_type=0&scope=bot" target="_blank" rel="noopener noreferrer">
                  <h2>文字起こしBot</h2>
                  <p>VCの声を文字起こしするDiscordBot</p>
                </a>
              </div>
              <div className='border-l-4 pl-4 my-6'>
                <a href="https://screenlive.pages.dev/" target="_blank" rel="noopener noreferrer">
                  <h2>ScreenLive</h2>
                  <p>あなたの画面を簡単に共有</p>
                </a>
              </div>
              <div className='border-l-4 pl-4 my-6'>
                <a href="https://nextyt.netlify.app" target="_blank" rel="noopener noreferrer">
                  <h2>NextTube</h2>
                  <p>Youtubeを快適に視聴するクライアント</p>
                </a>
              </div>
              <div className='border-l-4 pl-4 my-6'>
                <a href="https://together.tube.skota11.com" target="_blank" rel="noopener noreferrer">
                  <h2>TogetherYoutube</h2>
                  <p>Youtubeの動画をみんなでウォッチパーティー</p>
                </a>
              </div>
              <div className='border-l-4 pl-4 my-6'>
                <a href="https://millionaire-zeta.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <h2>オンライン大富豪 [作成途中]</h2>
                  <p>大富豪(トランプゲーム)をオンラインプレイ</p>
                </a>
              </div>

            </div>
          </div>
        </animated.div>
      </main>
    </>
  )
}
