import OHDoc from '../../resources/OfficeHours/renderedInfo.json';
import react, {useEffect, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import TATable from './assets/officeHourTable.js';

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
    console.log('click!')
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
      <div>
        <h1 className='font-bold text-2xl text-center mb-3'>Office Hours & Email</h1>
        <p className='text-xl text-center mb-3'>Note: This page will be updated as more information become available!</p>
        <h2 className='font-bold text-2xl text-center mb-3'>Lab Coordinators</h2>
        <p className='text-xl text-center mb-3'>Dr. Conrad Fjetland – Office NHB 1.128, M 12-1, Th 10-11 in person</p>
        <h2 className='text-l text-center mb-3'>Lab TAs e-mail addresses and Office Hours: (all TA office hours are via zoom, so check Canvas for the link)</h2>
            <div className='text-center bg-white max-w-fit mx-auto rounded-lg ease-linear bg-slate-50'>
              <div onClick={accordian} class='grid grid-cols-7 bg-red-50 rounded-lg py-5 px-10' id='ch128k'>
                {!ch128k &&
                  <svg className='col-span-1' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16" preserveAspectRatio="xMidYMin slice">
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                  </svg>
                }
                {ch128k &&
                  <svg className='col-span-1' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
                  </svg>
                }
                <h3 id='ch128k' className={`${ch128k && 'animate-wiggle'} font-bold text-xl text-center col-span-6`}>CH128K TA Information</h3>
              </div>
              {ch128k &&

                <TATable section={info['128K']}/>
              }

            </div>
            <TATable section={info['128L']}/>
            <TATable section={info['220C']}/>


          </div>


    </>
  )
}