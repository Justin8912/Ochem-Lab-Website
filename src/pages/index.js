import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavBar from '../../navbar/navbar.js';
import image from '../../resources/header.svg';
import HomepageCard from './homepageCard.js';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <NavBar />
      <div className='grid grid-cols-3 gap-4 container mx-auto px-5 mt-10' >
        <HomepageCard
          courseName='CH220C'
          courseDescription='Organic Chemistry labs for health science majors'
          imageLink='CH220C'
        />
        <HomepageCard
          courseName='CH128K'
          courseDescription='Organic Chemistry labs for chemistry majors - first semester'
          imageLink='CH128K'
        />
        <HomepageCard
          courseName='CH128L'
          courseDescription='Organic Chemistry labs for chemistry majors - second semester'
          imageLink='CH128L'
        />
      </div>
    </main>
  )
}
