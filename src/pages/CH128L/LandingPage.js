import react from 'react';
import LandingPage from '../../../resources/sharedResources/sectionLandingPage.js';
import startInfo from '../../../resources/classInfo/CH128L/Start.txt';
import relevantInfo from '../../../resources/classInfo/CH128L/RelevantInfo.txt'
import readStartDateFile from '../../../resources/helperFunctions/readingStartDate.js';
import readRelevantInfo from '../../../resources/helperFunctions/readingRelevantInfo.js';

export default function CH128KLandingPage (props) {
  let startInfoModified = readStartDateFile(startInfo);
  let CH128LClassInfo = readRelevantInfo(relevantInfo);
  return (
    <>
      <LandingPage
        classColor='green-700'
        classInfoLabs = {CH128LClassInfo.labs}
        moreClassInfo = {CH128LClassInfo.moreInformation}
        startInfo = {startInfoModified}
      />
    </>
  )
}