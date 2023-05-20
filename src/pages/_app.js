import '@/styles/globals.css'
import {useRouter} from 'next/router';
import react, {useState, useEffect} from 'react';
import Footer from '../../resources/assets/footer.js';
import Navbar from '../../resources/assets/navbar.js';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  const [classSelector, setClass] = useState('');
  const path = useRouter().asPath;

  useEffect(() => {
    if (!path.includes('LandingPage')) {
      setClass('');
    }
  }, [path])

  function settingClass(currClass) {
    setClass(currClass);
  }

  return (
    <main className={'font-sans'}>
      <Head>
        <link rel='shortcut icon' href='/longhorn.ico'/>
      </Head>
      <Navbar class={classSelector}/>
      <Component {...pageProps} setClass={setClass}/>
      <Footer/>
    </main>
  )
}
