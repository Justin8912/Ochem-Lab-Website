import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import headerImage from '../header.svg';


export default function NavBar(props) {
  let selectedClassStyle = 'bg-white rounded-sm border-orange-500 text-orange-500 font-bold px-2 py-1';
  let courseStyle = 'block mt-4 inline-block md:mt-0 hover:text-slate-200 mr-4 transition duration-300';
  return (
    <>
      <nav className="justify-between burntOrange p-6 md:flex mx-auto text-center md:text-right">
        <div className="flex items-center justify-center md:justify-left flex-shrink-0 text-white mr-6">
          <Image src={headerImage} alt='Header image' height={60} width={60} style={{paddingRight:'10px'}} data-testid="mainCourseLogo"/>
          <Link className="font-semibold text-xl tracking-tight" href='/'>Organic Chemistry Labs</Link>
        </div>
        <div className="w-full block flex-grow md:flex items-center md:w-auto">
          <div className="text-sm md:flex-grow">
            <Link href="/CH220C/LandingPage" className={`${courseStyle} ${props.class==='220C' && selectedClassStyle}`} passHref>
              CH 220C
            </Link>
            <Link href="/CH128K/LandingPage" className={`${courseStyle} ${props.class==='128K' && selectedClassStyle}`}>
              CH 128K
            </Link>
            <Link href="/CH128L/LandingPage" className={`${courseStyle} ${props.class==='128L' && selectedClassStyle}`}>
              CH 128L
            </Link>
          </div>
        </div>
      </nav>
    </>
    );
}