import react, {useState, useEffect} from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import headerImage from '../../../resources/header.svg';


export default function NavBar() {
  return (
    <>
      <nav className="justify-between burntOrange p-6 md:flex mx-auto text-center md:text-right">
        <div className="flex items-center justify-center md:justify-left flex-shrink-0 text-white mr-6">
          <Image src={headerImage} alt='Header image' height={60} width={60} style={{paddingRight:'10px'}}/>
          <span className="font-semibold text-xl tracking-tight">Organic Chemistry Labs</span>
        </div>
        <div className="w-full block flex-grow md:flex items-center md:w-auto">
          <div className="text-sm md:flex-grow">
            <Link href="#responsive-header" className="block mt-4 inline-block md:mt-0 hover:text-slate-200 mr-4 transition duration-300">
              CH 220C
            </Link>
            <Link href="#responsive-header" className="block mt-4 inline-block md:mt-0 hover:text-slate-200 mr-4 transition duration-300">
              CH 128K
            </Link>
            <Link href="#responsive-header" className="block mt-4 inline-block md:mt-0 hover:text-slate-200 mr-4 transition duration-300">
              CH 128L
            </Link>
          </div>
        </div>
      </nav>
    </>
    );
}