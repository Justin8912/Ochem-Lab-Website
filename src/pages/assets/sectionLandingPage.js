import react from 'react';
import Button from './button.js';

export default function LandingPage (props) {
  return (
    <>
      <div className='grid grid-cols-1 my-10'>
        <div className="rounded overflow-hidden shadow-lg w-196 mx-auto" style={{backgroundColor:'#efefef'}}>
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
                            <p key={`${ydx}-header`}>{listE}</p>
                          )
                        } else {
                          return (
                            <li key={`${ydx}-${listE}`}>{listE}</li>
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
                    <p key={idx}>{props.startInfo[element]}</p>
                    <br/>
                  </>
                )
              }
            })}
          </div>
        </div>

        <div className="rounded overflow-hidden shadow-lg w-196 mx-auto my-10" style={{backgroundColor:'#efefef'}}>
          <div className={`font-bold text-2xl py-4 mb-3 px-6 text-center bg-${props.classColor} text-white`}>Syllabus</div>
          <div className="px-6 py-4">
            <Button
              link=''
              color={`bg-${props.classColor}`}
              name={'Click here to see the syllabus'}
            />
          </div>
        </div>

        <div className="rounded overflow-hidden shadow-lg w-196 mx-auto" style={{backgroundColor:'#efefef'}}>
          <div className={`font-bold text-2xl py-4 px-6 mb-3 text-center bg-${props.classColor} text-white`}>Relevant class information</div>
          <div className="px-6 py-4">
            <p>{props.classInfo}</p>
          </div>
        </div>
      </div>
    </>
  )
}