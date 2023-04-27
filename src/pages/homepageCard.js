import react from 'react';
import Image from 'next/image';
import CH220C from '../../resources/220Chomepage.png'
import CH128K from '../../resources/128Khomepage.png'
import CH128L from '../../resources/128Lhomepage.png'

export default function HomepageCard (props) {
  let imgHolder, buttonColor, buttonColorHover;
  if (props.imageLink === 'CH220C') {
    imgHolder = CH220C;
    buttonColor = 'bg-blue-700';
    buttonColorHover = 'bg-blue-600';
  } else if (props.imageLink === 'CH128K') {
    imgHolder = CH128K;
    buttonColor = 'bg-red-700';
    buttonColorHover = 'bg-red-400';
  } else if (props.imageLink === 'CH128L') {
    imgHolder = CH128L;
    buttonColor = 'bg-green-700';
    buttonColorHover = 'bg-green-400';
  }
  return (
    <>
      <div className="max-w-md rounded overflow-hidden shadow-lg" style={{backgroundColor:'#efefef'}}>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-3 text-center">{props.courseName}</div>
          {
            props.imageLink &&
            <Image
              src={imgHolder}
              alt={`Image holder for ${props.courseName}`}
              width = {200}
              height = {200}
              className='mx-auto'
            />
          }
            <p className="text-gray-700 text-base mt-5">
              {props.courseDescription}
            </p>
          </div>
          <div className='flex flex-col items-center'>
            <button className={`${buttonColor} hover:${buttonColorHover} text-white font-bold py-2 px-4 rounded mb-5 tracking-wide`}>
              Continue
            </button>
          </div>
      </div>
    </>
  )
}