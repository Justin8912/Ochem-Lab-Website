import react from 'react';
import Button from '../../src/pages/assets/button.js';
import {v4 as uuidv4} from 'uuid';
import Link from 'next/link';

export default function LandingPage (props) {
  return (
    <>
      <div
        className='grid grid-cols-1 my-10 mx-10 xl:mx-48 xl:mt-24 xl:mb-32 xl:grid-cols-2 '
      >

        <div className='col-span-1'>
          <div
          className="rounded overflow-hidden shadow-lg mx-auto h-min max-w-lg mb-8 xl:mb-0 xl:mr-1"
          style={{backgroundColor:'#efefef'}}
          >
            <div className={`font-bold text-2xl py-4 px-6 mb-3 text-center bg-${props.classColor} text-white`}>Important Documents</div>
              <div className="px-6 py-4 text-center">
                {props.moreClassInfo.map((element, idx) => {
                  if (typeof element === 'object') {
                    return (
                      <>
                        {element.info.map(val => {
                          return (
                            <>
                              <p key={uuidv4()}>{val}</p>
                            </>
                          )
                        })}
                        <br/>
                      </>
                    )
                  } else {
                  return (
                    <>
                      <p key={uuidv4()}>{element}</p>
                      <br key={uuidv4()}/>
                    </>
                  )
                }})}
                <Button
                    link=''
                    color={`bg-${props.classColor}`}
                    name={'Syllabus'}
                  />

              {props.classInfoLabs.map((obj) => {
                return (
                  <>
                    <br key={uuidv4()}/>
                    <Button
                      link={obj.link}
                      color={`bg-${props.classColor}`}
                      name={obj.lab}
                      key={uuidv4()}
                    />
                  </>
                )

              })}
            </div>
          </div>

        </div>

        <div
          className="rounded overflow-hidden shadow-lg mx-auto col-span-1 h-min mb-10 min-w-lg max-w-full xl:col-span-1 xl:mb-0"
          style={{backgroundColor:'#efefef'}}
        >
          <div className={`font-bold text-2xl py-4 mb-3 text-center bg-${props.classColor} text-white px-6`}>Start Date</div>
          <div className="px-10 py-4 mx-auto align-center justify-center text-center">
            {Object.keys(props.startInfo).map((element, idx) => {
              if (Array.isArray(props.startInfo[element])) {
                return (
                  <>
                    <ol key={idx} className='list-alpha indent-2 list-inside'>
                      {props.startInfo[element].map((listE, ydx) => {
                        if (ydx === 0) {
                          return (
                            <p key={uuidv4()}>{listE}</p>
                          )
                        } else {
                          return (
                            <li key={uuidv4()}>{listE}</li>
                          )
                        }
                      })}
                    </ol>
                    <br/>
                  </>
                )
              } else {
                return (
                  <>
                    <p key={uuidv4()}>{props.startInfo[element]}</p>
                    <br/>
                  </>
                )
              }
            })}
          </div>
        </div>



      </div>
    </>
  )
}