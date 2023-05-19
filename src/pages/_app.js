import '@/styles/globals.css'
import {useRouter} from 'next/router';
import react, {useState, useEffect} from 'react';
import Footer from '../../resources/assets/footer.js';
import Navbar from '../../resources/assets/navbar.js';

export default function App({ Component, pageProps }) {
  const [classSelector, setClass] = useState('');
  const path = useRouter().asPath;
  console.log(path);

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
      <Navbar class={classSelector}/>
      <Component {...pageProps} setClass={setClass}/>
      <Footer/>
    </main>
  )
}
