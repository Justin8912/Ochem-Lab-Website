import Image from 'next/image'
import { Inter } from 'next/font/google'
import image from '../../resources/header.svg';
import HomepageCard from './homepageCard.js';
import SharedContent from './sharedContentModal.js';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className='grid md:grid-cols-3 gap-4 container mx-auto px-5 mt-20 sm:grid-cols-1' >
        <HomepageCard
          courseName='CH 220C'
          imageLink='CH220C'
        />
        <HomepageCard
          courseName='CH 128K'
          imageLink='CH128K'
        />
        <HomepageCard
          courseName='CH 128L'
          imageLink='CH128L'
        />
      </div>

      <div className='container justify-center mx-auto mb-20'>
        <SharedContent/>
      </div>
    </main>
  )
}
