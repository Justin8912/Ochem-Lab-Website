import react from 'react';
import LandingPage from '../../../resources/sharedResources/sectionLandingPage.js';
import startInfo from '../../../resources/classInfo/CH128K/Start.txt';
import relevantInfo from '../../../resources/classInfo/CH128K/RelevantInfo.txt'
import readStartDateFile from '../../../resources/helperFunctions/readingStartDate.js';
import readRelevantInfo from '../../../resources/helperFunctions/readingRelevantInfo.js';

export default function CH128KLandingPage (props) {
  let startInfoModified = readStartDateFile(startInfo);
  let CH128KClassInfo = readRelevantInfo(relevantInfo);
  props.setClass('128K');
  return (
    <>
      <LandingPage
        classColor='red-700'
        hoverColor={'hover:bg-red-600'}
        classInfoLabs = {CH128KClassInfo.labs}
        moreClassInfo = {CH128KClassInfo.moreInformation}
        startInfo = {startInfoModified}
        section='CH128K'
        syllabusLink='/128K.pdf'
      />
    </>
  )
}