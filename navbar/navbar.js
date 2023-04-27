import react, {useState, useEffect} from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import headerImage from '../resources/header.svg';


export default function NavBar() {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap burntOrange p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Image src={headerImage} alt='Header image' height={60} width={60} style={{paddingRight:'10px'}}/>
          <span className="font-semibold text-xl tracking-tight">Organic Chemistry Labs</span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 hover:text-slate-200 mr-4">
              CH 220C
            </Link>
            <Link href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 hover:text-slate-200 mr-4">
              CH 128K
            </Link>
            <Link href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 hover:text-slate-200 mr-4">
              CH 128L
            </Link>
          </div>
        </div>
      </nav>
    </>
    );
}