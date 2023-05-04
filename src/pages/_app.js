import '@/styles/globals.css'
import Navbar from './assets/navbar.js';
import Footer from './assets/footer.js';

export default function App({ Component, pageProps }) {
  return (
    <main className={'font-sans'}>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>

    </main>
  )
  }
