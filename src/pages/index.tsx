import Head from 'next/head'
import  Link  from "next/link";
import { Inter } from 'next/font/google'

//module
import {
  animated,
  useSpring,
} from '@react-spring/web';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

export default function Home({ac}:{ac:any}) {
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
  const status = (ac:any) => {
    switch (ac.status) {
      case "online":
        return (<><p><span className='text-green-600 mr-2'>●</span>ONLINE</p><div className='border-l-4 p-2 my-4'><p>{ac.activities[0].name}をプレイ中</p><p>{ac.activities[0].details}</p></div></>)
        break;
      case "idle":
        return <p><span className='text-orange-600 mr-2'>●</span>IDLE</p>
      case "dnd":
        return <p><span className='text-red-600 mr-2'>●</span>DoNotDisturb</p>
      default:
        break;
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
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" rel="stylesheet" />
      </Head>
      <animated.div
        style={{
          ...springY,
        }}>
        <header className='bg-half_baked rounded-b-xl shadow-xl text-martinique mb-4'>
          <p className='text-center py-4 text-xl'><Link href="/">skota11.com</Link></p>
          <ul className='gap-x-4 flex place-content-center text-sm'>
            <li className='ml-4'><Link href="/">Top</Link></li>
            <li className=''><Link href="/works">Works</Link></li>
            </ul>
        </header>
        </animated.div>
        <animated.div style={{...springX,}}>
        <h1 className='text-center text-2xl'>Skota11のホームページにようこそ！</h1>
        </animated.div>
        <main>
          <animated.div style={{
          ...springX,
        }} className='my-8' id="profile">
            <h1 className='text-center text-2xl underline underline-offset-4 mb-4'>Profile</h1>
            <div className='flex place-content-center'>
            <div className='rounded-xl bg-sprout w-4/5 max-w-screen-sm p-8 shadow-lg duration-300 hover:shadow-neutral-300'>
              <h2 className='my-4 text-xl'>Skota11 こた</h2>
              <div className='mb-4'>
                <img src="https://avatars.githubusercontent.com/u/91359399" alt="" width="60px"/>
                </div>
                <div>
                  <p className='mb-2'>14yo / Student</p>
                  <p>Node.jsとかDenoとかが出来ます。ReactとNext.jsを習得中</p>
                  <p>Misskey鯖とかマイクラ鯖とかを動かしてます</p>
                </div>
                <hr className='my-4' />
                <h2 className='my-2'>DekiruKoto</h2>
                <p>JavaScript / Node.js / Deno </p>
                <p>React / Next.js </p>
              </div>
            </div>
          </animated.div>
          <animated.div id="link" style={{
          ...springX,
        }} className='my-8'>
            <h1 className='text-center text-2xl underline underline-offset-4 mb-4'>Link</h1>
            <div className='flex place-content-center'>
            <div className='rounded-xl bg-vanilla w-4/5 max-w-screen-sm p-8 shadow-lg duration-300 hover:shadow-neutral-300'>
              <p className='my-4'><a href="https://github.com/Skota11" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon width="30px" className='inline mr-2' icon={faGithub}/>Github</a><br />@Skota11</p>
              <p className='my-4'><a href="https://twitter.com/Kota_pclive" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon width="30px" className='inline mr-2' icon={faTwitter} />Twitter</a><br />@Kota_pclive</p>
              <p className='my-4'><a href="https://discord.com/users/896299292845817856" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon width="30px" className='inline mr-2' icon={faDiscord} />Discord</a><br />Skota11#1930</p>
              <p className='my-8'><a href="https://github.com/Skota11/portfolio" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon width="30px" className='inline mr-2' icon={faCode} />Source</a><br />(Github)</p>
              <p className='my-2'> - <a href="https://mi.skota11.com/@kota">Misskey(こたすき～)</a></p>
              <p> - <Link href="/works">Works一覧へ</Link></p>
            </div>
            </div>
          </animated.div>
          <animated.div id="contact" style={{
          ...springX,
        }} className='my-8'>
            <h1 className='text-center text-2xl underline underline-offset-4 mb-4'>Contact</h1>
            <div className='flex place-content-center'>
            <div className='rounded-xl bg-cold_purple w-4/5 max-w-screen-sm p-8 shadow-lg duration-300 hover:shadow-neutral-300'>
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
            <div className='rounded-xl bg-cold_purple w-4/5 max-w-screen-sm p-8 shadow-lg duration-300 hover:shadow-neutral-300'>
              <p className='my-4'>Skota11のステータスです。</p>
              {status(ac)}
            </div>
            </div>
          </animated.div>
          <footer className='bg-moss_green rounded-t-xl shadow-xl text-martinique mt-4 py-4'>
            <p className='text-center'>&copy; Skota11</p>
          <p className='text-center text-sm'>このサイトは、LINE株式会社のLINESeedを使用しています。/ <a className='underline' href="https://seed.line.me/">LINESeed</a></p>
          </footer>
        </main>
    </>
  )
}

//api
export const getServerSideProps = async () => {
  const ac = await (await fetch("https://ac.skota11.com/activity")).json();
  console.log(ac);
  return {
    props: {
      ac: ac
    }
  }
};
