import Head from 'next/head'
import { Inter } from 'next/font/google'
import {Image} from 'next/image';

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" rel="stylesheet" />
      </Head>
      <animated.div
        style={{
          ...springY,
        }}>
        <header className='bg-half_baked rounded-b-xl shadow-xl text-martinique mb-4'>
          <p className='text-center py-4 text-xl'>Skota11 | こた</p>
          <ul className='flex place-content-center text-sm'>
            <li className='mx-4'><a href="#profile ">Profile</a></li>
            <li className='mx-4'><a href="#link">Link</a></li>
            </ul>
        </header>
        </animated.div>
        <main>
          <animated.div style={{
          ...springX,
        }} className='my-8'>
            <h1 className='text-center text-2xl underline underline-offset-4 mb-4'>Profile</h1>
            <div className='flex place-content-center'>
            <div className='rounded-xl bg-sprout w-4/5 max-w-screen-sm p-8 shadow-lg duration-300 hover:shadow-neutral-300'>
              <h2 className='my-4 text-xl'>Skota11 こた</h2>
              <div className='mb-4'>
                <Image src="https://avatars.githubusercontent.com/u/91359399" alt="" width="60px"/>
                </div>
                <div>
                  <p className='mb-2'>14yo / Student</p>
                  <p>Node.jsとかDenoとかが出来ます。ReactとNext.jsを習得中</p>
                  <p>Misskey鯖とかマイクラ鯖とかを動かしてます</p>
                </div>
              </div>
            </div>
          </animated.div>
          <animated.div style={{
          ...springX,
        }} className='my-8'>
            <h1 className='text-center text-2xl underline underline-offset-4 mb-4'>Link</h1>
            <div className='flex place-content-center'>
            <div className='rounded-xl bg-vanilla w-4/5 max-w-screen-sm p-8 shadow-lg duration-300 hover:shadow-neutral-300'>
              <p className='my-4'><a href="https://github.com/Skota11" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon width="30px" className='inline mr-2' icon={faGithub}/>Github</a><br />@Skota11</p>
              <p className='my-4'><a href="https://twitter.com/Kota_pclive" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon width="30px" className='inline mr-2' icon={faTwitter} />Twitter</a><br />@Kota_pclive</p>
              <p className='my-4'><a href="https://discord.com/users/896299292845817856" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon width="30px" className='inline mr-2' icon={faDiscord} />Discord</a><br />Skota11#1930</p>
              <p className='my-8'><a href="https://github.com/Skota11/portfolio" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon width="30px" className='inline mr-2' icon={faCode} />Source</a><br />(Github)</p>
              <p className='my-2'> - <a href="https://mi.skota11.com">Misskey鯖(こたすき～)</a></p>
              <p> - <a href="/works">Works一覧へ</a></p>
            </div>
            </div>
          </animated.div>
          <animated.div style={{
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
        </main>
    </>
  )
}
