import react from 'react';
import Navbar from '../assets/navbar.js';
import Footer from '../assets/footer.js';
import LandingPage from '../assets/sectionLandingPage.js'
import startInfo from '../../../resources/classInfo/CH220CStart.my-file';
import readStartDateFile from '../../../resources/helperFunctions/readingStartDate.js';

export default function CH220C (props) {
  let CH220CClassInfo = 'If any additional class information needs to be given, it will be given here.'
  let startInfoModified = readStartDateFile(startInfo);

  return (
    <>
      <Navbar/>
      <LandingPage
        classColor='blue-700'
        classInfo = {CH220CClassInfo}
        startInfo={startInfoModified}
      />
      <Footer/>
    </>
  )
}