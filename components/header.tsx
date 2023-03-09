import {
  animated,
  useSpring,
} from '@react-spring/web';
import  Link  from "next/link";

export default function Home() {
  const springY = useSpring({
    from: { y: -300 },
    to: { y: 0 },
  });
    return (
        <>
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
        </>
    )
}