import Head from 'next/head'
import Link from "next/link";
import { Inter } from 'next/font/google'
import { useState, useEffect } from 'react'

//module
import {
  animated,
  useSpring,
} from '@react-spring/web';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub, faJs, faNodeJs, faPython, faRaspberryPi, faReact, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

//com


export default function Home({ ac }: { ac: any }) {
  //useState
  const [activities, setActivities] = useState({});
  //useEffect
  useEffect(() => {
    getAc().then(res => setActivities(res));
  }, []);
  //animation
  const springX = useSpring({
    from: { x: -100 },
    to: { x: 0 },
  });
  const springY = useSpring({
    from: { y: -300 },
    to: { y: 0 },
  });
  //status
  const status = (ac: any) => {
    switch (ac.status) {
      case "online":
        if (ac.activities.length == 0) {
          return (<><p><span className='text-green-600 mr-2'>●</span>ONLINE</p></>)
        } else {
          return <><p><span className='text-green-600 mr-2'>●</span>ONLINE</p><div className='border-l-4 p-2 my-4'><p>{ac.activities[0].name}をプレイ中</p><p>{ac.activities[0].details}</p></div></>
        }
      case "idle":
        return <p><span className='text-orange-600 mr-2'>●</span>IDLE</p>
      case "dnd":
        return <p><span className='text-red-600 mr-2'>●</span>DoNotDisturb</p>
      case "offline":
        return <p><span className='text-black-600 mr-2'>●</span>OFFLINE</p>
      default:
        return <p>取得できないか、エラーが発生しました。</p>
    }
  }
  return (
    <>
      <Head>
        <title>Skota11</title>
        <meta name="description" content="Skota11 Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
          <h1 className='text-center text-2xl underline underline-offset-4 mb-4'>Profile</h1>
          <div className='flex place-content-center'>
            <div className='rounded-xl bg-sprout w-4/5 max-w-screen-md p-8 shadow-lg duration-300 hover:shadow-2xl'>
              <h2 className='my-4 text-xl'>Skota11 | こた</h2>
              <div className='mb-4 flex items-center gap-x-4'>
                <img className='rounded-full' src="https://avatars.githubusercontent.com/u/91359399" alt="" width="60px" />
                <p className='mb-2'>15yo / Student</p>
              </div>
              <div>
                <p>プログラミング好きの高校生。</p>
                <p>Webアプリ開発や、マイクラ鯖などを運営してます。</p>
              </div>
              <hr className='my-4' />
              <h2 className='my-2'>DekiruKoto</h2>
              <p><FontAwesomeIcon width="30px" className='inline mr-2' icon={faJs} />JavaScript <FontAwesomeIcon width="30px" className='inline mx-2' icon={faNodeJs} />Node.js / Deno </p>
              <p className='mt-2'><FontAwesomeIcon width="30px" className='inline mr-2' icon={faReact} />React / Next.js <FontAwesomeIcon width="30px" className='inline mx-2' icon={faPython} />Python</p>
              <p className='mt-2'><FontAwesomeIcon width="30px" className='inline mr-2' icon={faRaspberryPi} />RaspberryPi 4 (自宅鯖運営)</p>
            </div>
          </div>
        </animated.div>
        <animated.div id="link" style={{
          ...springX,
        }} className='my-8'>
          <h1 className='text-center text-2xl underline underline-offset-4 mb-4'>Link</h1>
          <div className='flex place-content-center'>
            <div className='rounded-xl bg-vanilla w-4/5 max-w-screen-md p-8 shadow-lg duration-300 hover:shadow-2xl'>
              <p className='my-4'><a href="https://github.com/Skota11" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon width="30px" className='inline mr-2' icon={faGithub} />Github</a><br />@Skota11</p>
              <p className='my-4'><a href="https://twitter.com/Kota_pclive" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon width="30px" className='inline mr-2' icon={faTwitter} />Twitter</a><br />@Kota_pclive</p>
              <p className='my-4'><a href="https://discord.com/users/896299292845817856" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon width="30px" className='inline mr-2' icon={faDiscord} />Discord</a><br />Skota11#1930</p>
              <p className='my-8'><a href="https://github.com/Skota11/portfolio" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon width="30px" className='inline mr-2' icon={faCode} />Source</a><br />(Github)</p>
              <p className='my-2'> - <a href="https://misskey.04.si/@skota">Misskey(りんごぱい)</a></p>
              <p> - <Link href="/works">Works一覧へ</Link></p>
            </div>
          </div>
        </animated.div>
        <animated.div id="contact" style={{
          ...springX,
        }} className='my-8'>
          <h1 className='text-center text-2xl underline underline-offset-4 mb-4'>Contact</h1>
          <div className='flex place-content-center'>
            <div className='rounded-xl bg-cold_purple w-4/5 max-w-screen-md p-8 shadow-lg duration-300 hover:shadow-2xl'>
              <p className='my-4'>Mail : <a href="mailto:contact@skota11.com">contact@skota11.com</a></p>
              <p>お問い合わせフォーム(GoogleFormsを使用します。)</p>
              <p> - <a className='underline' href="https://forms.gle/ME6f2eULe3mvrCf76" target="_blank" rel="noopener noreferrer">Form</a></p>
            </div>
          </div>
        </animated.div>
        <animated.div id="status" style={{
          ...springX,
        }} className='my-8'>
          <h1 className='text-center text-2xl underline underline-offset-4 mb-4'>Status</h1>
          <div className='flex place-content-center'>
            <div className='rounded-xl bg-spring_wood w-4/5 max-w-screen-md p-8 shadow-lg duration-300 hover:shadow-2xl'>
              {status(activities)}
              <hr className='my-2' />
              <p>Getting from Discord</p>
            </div>
          </div>
        </animated.div>
      </main>
    </>
  )
}

//api
const getAc = async () => {
  const ac = await (await fetch("https://ac.skota11.com/activity")).json();
  console.log(ac);
  return ac
};
