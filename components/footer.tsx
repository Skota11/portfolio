import {
  animated,
  useSpring,
} from '@react-spring/web';
import Link from "next/link";

import { AiOutlineCheck, AiOutlineTwitter } from "react-icons/ai";
import { BsDiscord, BsLink45Deg } from "react-icons/bs";
import { PiGithubLogoFill } from "react-icons/pi";
import { SiMisskey } from "react-icons/si";

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
            <p className='float-right	'><Link href="/" className='mr-2'>Top</Link><Link className='mr-4' href="/works">Works</Link> &copy; Skota11 <br /> このサイトは、<a href='https://seed.line.me/index_jp.html'>LINESeed</a>を使用しています。</p>
            <div className="flex gap-x-4 ">
              <div className="p-4 rounded-lg bg-gray h-fit">
                <a href="https://twitter.com/Kota_pclive">
                  <AiOutlineTwitter />
                </a>
              </div>
              <div className="p-4 rounded-lg bg-gray h-fit">
                <a href="https://github.com/Skota11">
                  <PiGithubLogoFill />
                </a>
              </div>
              <div className="p-4 rounded-lg bg-gray h-fit">
                <a href="https://misskey.04.si/@skota">
                  <SiMisskey />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </animated.div>
    </>
  )
}
// <FontAwesomeIcon icon={faGithub} width="30px" className='inline mr-2' />
// <FontAwesomeIcon icon={faTwitter} width="30px" className='inline mr-2' />