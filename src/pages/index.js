import Image from 'next/image'
import { Inter } from 'next/font/google'
import image from '../../resources/header.svg';
import HomepageCard from '../../resources/assets/homepageCard.js';
import SharedContent from '../../resources/sharedResources/sharedContentModal.js';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className='grid md:grid-cols-3 gap-4 container mx-auto px-5 mt-20 sm:grid-cols-1' >
        <HomepageCard
          courseName='CH 220C'
          class={'CH220C'}
          imageLink='/220Chomepage.png'
          color={'bg-blue-700'}
          buttonHover={'hover:bg-blue-600'}
        />
        <HomepageCard
          courseName='CH 128K'
          class={'CH128K'}
          imageLink='/128Khomepage.png'
          color={'bg-red-700'}
          buttonHover={'hover:bg-red-600'}
        />
        <HomepageCard
          courseName='CH 128L'
          class={'CH128L'}
          imageLink='/128Lhomepage.png'
          color={'bg-green-700'}
          buttonHover={'hover:bg-green-600'}
        />
      </div>

      <div className='container justify-center mx-auto mb-20'>
        <SharedContent/>
      </div>
    </main>
  )
}
