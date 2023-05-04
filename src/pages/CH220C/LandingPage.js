import react from 'react';
import LandingPage from '../assets/sectionLandingPage.js'
import startInfo from '../../../resources/classInfo/CH220C/Start.txt';
import relevantInfo from '../../../resources/classInfo/CH220C/RelevantInfo.txt'
import readStartDateFile from '../../../resources/helperFunctions/readingStartDate.js';
import readRelevantInfo from '../../../resources/helperFunctions/readingRelevantInfo.js';

export default function CH220C (props) {
  let startInfoModified = readStartDateFile(startInfo);
  let CH220CClassInfo = readRelevantInfo(relevantInfo);

  return (
    <>
      <LandingPage
        classColor='blue-700'
        classInfoLabs = {CH220CClassInfo.labs}
        moreClassInfo = {CH220CClassInfo.moreInformation}
        startInfo={startInfoModified}
      />
    </>
  )
}