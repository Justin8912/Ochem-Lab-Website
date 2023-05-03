import react from 'react';
import Navbar from '../assets/navbar.js';
import Footer from '../assets/footer.js';
import LandingPage from '../assets/sectionLandingPage.js'
import startInfo from '../../../resources/classInfo/CH220CStart.txt';
import relevantInfo from '../../../resources/classInfo/CH220CRelevantInfo.txt'
import readStartDateFile from '../../../resources/helperFunctions/readingStartDate.js';
import readRelevantInfo from '../../../resources/helperFunctions/readingRelevantInfo.js';

export default function CH220C (props) {
  let startInfoModified = readStartDateFile(startInfo);
  let CH220CClassInfo = readRelevantInfo(relevantInfo);

  return (
    <>
      <Navbar/>
      <LandingPage
        classColor='blue-700'
        classInfoLabs = {CH220CClassInfo.labs}
        moreClassInfo = {CH220CClassInfo.moreInformation}
        startInfo={startInfoModified}
      />
      <Footer/>
    </>
  )
}