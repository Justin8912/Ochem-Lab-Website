import OHDoc from '../../resources/OfficeHours/renderedInfo.json';
import react, {useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';

export default function OH (props) {

  let file = OHDoc


  return (
    <>
      <div>
        <h1>Office Hours & Email</h1>
        <p>Note: This page will be updated as more information become available!</p>
        <h2>Lab Coordinators</h2>
        <p>Dr. Conrad Fjetland – Office NHB 1.128, M 12-1, Th 10-11 in person</p>
        <h2>Lab TAs e-mail addresses and Office Hours: (all TA office hours are via zoom, so check Canvas for the link)</h2>
        <div className='grid grid-cols-1 xl:grid-cols-2'>
          <table className='border-collapse text-center'>
            <tr className='px-10'>
              <th className='px-10'>Name</th>
              <th className='px-10'>Email</th>
              <th className='px-10'>Section</th>
            </tr>
            {file && file['128K'].map((ta) => {
              return (
                <tr key={uuidv4()} className='px-10'>
                  <td className='px-10'>{ta.name}</td>
                  <td className='px-10'>{ta.email}</td>
                  <td className='px-10'>{ta.sections}</td>
                </tr>
              )
            })}
          </table>

          <table className='border-collapse text-center'>
            <tr className='px-10'>
              <th className='px-10'>Name</th>
              <th className='px-10'>Email</th>
              <th className='px-10'>Section</th>
            </tr>
            {file && file['128L'].map((ta) => {
              return (
                <tr key={uuidv4()} className='px-10'>
                  <td className='px-10'>{ta.name}</td>
                  <td className='px-10'>{ta.email}</td>
                  <td className='px-10'>{ta.sections}</td>
                </tr>
              )
            })}
          </table>

        </div>

      </div>

    </>
  )
}