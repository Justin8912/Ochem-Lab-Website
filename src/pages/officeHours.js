import OHDoc from '../../resources/OfficeHours/renderedInfo.json';
import react, {useEffect, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import TATable from './assets/officeHourTable.js';
import CourseInfo from './assets/ohTARendering.js';

export default function OH (props) {

  const [info, setInfo] = useState({'128K':[], '128L':[], '220C':[]});
  const [ch128k, setch128k] = useState(false);
  const [ch128l, setch128l] = useState(false);
  const [ch220c, setch220c] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setInfo(OHDoc);
  }, []);

  let accordian = (e) => {
    let classId = e.target.id;

    if (classId === 'ch220c') {
      setch220c(!ch220c);
    } else if (classId === 'ch128k') {
      setch128k(!ch128k);
    } else if (classId === 'ch128l') {
      setch128l(!ch128l);
    }
  }


  return (
    <>
      <div className='mb-20 mt-10'>
        <h1 className='font-bold text-2xl text-center mb-3'>Office Hours & Email</h1>
        <p className='text-xl text-center mb-3'>Note: This page will be updated as more information become available!</p>
        <h2 className='font-bold text-2xl text-center mb-3'>Lab Coordinators</h2>
        <p className='text-xl text-center mb-3'>Dr. Conrad Fjetland – Office NHB 1.128, M 12-1, Th 10-11 in person</p>
        <h2 className='text-l text-center mb-3'>Lab TAs e-mail addresses and Office Hours: (all TA office hours are via zoom, so check Canvas for the link)</h2>
          <div className='grid grid-cols-1'>
            <CourseInfo
              accordian={accordian}
              class={ch128k}
              info={info['128K']}
              title={'CH128K TA Information'}
              color={'red'}
              idHandle={'ch128k'}
            />
            {/* <TATable section={info['128L']}/>
            <TATable section={info['220C']}/> */}
            <CourseInfo
              accordian = {accordian}
              class={ch128l}
              info={info['128L']}
              title={'CH128L TA Information'}
              color={'green'}
              idHandle={'ch128l'}
            />

            <CourseInfo
              accordian = {accordian}
              class={ch220c}
              info={info['220C']}
              title={'CH220C TA Information'}
              color={'blue'}
              idHandle={'ch220c'}
            />

          </div>


          </div>


    </>
  )
}