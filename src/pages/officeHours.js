import OHDoc from '../../resources/OfficeHours/renderedInfo.json';
import react, {useEffect, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import TATable from './assets/officeHourTable.js';

export default function OH (props) {

  const [info, setInfo] = useState({'128K':[], '128L':[], '220C':[]});
  useEffect(() => {
    setInfo(OHDoc);
  }, []);


  return (
    <>
      <div>
        <h1 className='font-bold text-2xl text-center mb-3'>Office Hours & Email</h1>
        <p className='text-xl text-center mb-3'>Note: This page will be updated as more information become available!</p>
        <h2 className='font-bold text-2xl text-center mb-3'>Lab Coordinators</h2>
        <p className='text-xl text-center mb-3'>Dr. Conrad Fjetland – Office NHB 1.128, M 12-1, Th 10-11 in person</p>
        <h2 className='text-l text-center mb-3'>Lab TAs e-mail addresses and Office Hours: (all TA office hours are via zoom, so check Canvas for the link)</h2>
        <div className='grid grid-cols-1 xl:grid-cols-2'>
          <div className='col-span-1'>

            <TATable section={info['128K']}/>
            <TATable section={info['128L']}/>
            <TATable section={info['220C']}/>


          </div>
        </div>

      </div>

    </>
  )
}