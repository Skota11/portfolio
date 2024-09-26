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
            <p className='float-right	'><Link href="/" className='mr-2'>Top</Link><Link className='mr-4' href="/works">Works</Link> &copy; Skota11</p>
            <div className="flex gap-x-4 ">
              <div className="p-4 rounded-lg bg-gray h-fit">
                <Link href="https://twitter.com/Kota_pclive">
                  <AiOutlineTwitter />
                </Link>
              </div>
              <div className="p-4 rounded-lg bg-gray h-fit">
                <Link href="https://github.com/Skota11">
                  <PiGithubLogoFill />
                </Link>
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