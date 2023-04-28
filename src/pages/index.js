import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavBar from '../../navbar/navbar.js';
import image from '../../resources/header.svg';
import HomepageCard from './homepageCard.js';
import Footer from '../../navbar/footer.js';
import SharedContent from './sharedContentModal.js';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <NavBar />
      <div className='grid md:grid-cols-3 gap-4 container mx-auto px-5 mt-20 sm:grid-cols-1' >
        <HomepageCard
          courseName='CH 220C'
          courseDescription='Organic Chemistry labs for health science majors'
          imageLink='CH220C'
        />
        <HomepageCard
          courseName='CH 128K'
          courseDescription='Organic Chemistry labs for chemistry majors - first semester'
          imageLink='CH128K'
        />
        <HomepageCard
          courseName='CH 128L'
          courseDescription='Organic Chemistry labs for chemistry majors - second semester'
          imageLink='CH128L'
        />
      </div>

      <div className='container justify-center mx-auto'>
        <SharedContent/>
      </div>
      <Footer/>
    </main>
  )
}
