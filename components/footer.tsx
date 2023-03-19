import {
    animated,
    useSpring,
  } from '@react-spring/web';
  import  Link  from "next/link";

  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
  
  export default function Home() {
    const springY = useSpring({
      from: { y: 500 },
      to: { y: 0 },
    });
      return (
          <>
          <animated.div
          style={{
            ...springY,
          }}>
          <footer className='bg-moss_green rounded-t-xl shadow-xl text-martinique mt-4 py-8 flex place-content-center'>
            <div className='w-4/5'>
              <p className='mb-4'>Skota11’s portfolio</p>
              <p className='float-right	'><Link href="/" className='mr-2'>Top</Link><Link className='mr-4' href="/works">Works</Link> &copy; Skota11</p>
              <a href="https://twitter.com/kota_pclive"><p className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-fit my-4'><FontAwesomeIcon icon={faTwitter} width="30px" className='inline mr-2' />Twitterをフォローする</p></a>
              <a href="https://twitter.com/kota_pclive"><p className='bg-transparent hover:bg-black-500 text-black-700 font-semibold hover:text-white py-2 px-4 border border-black-500 hover:border-transparent rounded w-fit my-4'><FontAwesomeIcon icon={faGithub} width="30px" className='inline mr-2' />Githubをフォローする</p></a>
            </div>
          </footer>
          </animated.div>
          </>
      )
  }