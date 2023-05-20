import react from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from './button.js';

export default function HomepageCard (props) {
  return (
    <>
      <div className="max-w-md rounded overflow-hidden shadow-lg w-80 md:w-60 lg:w-80 xl:w-96 mx-auto" style={{backgroundColor:'#efefef'}}>
        <div className={`px-6 py-4`}>
          <div className={`font-bold text-2xl mb-3 text-center`}>{props.courseName}</div>
          {
            props.imageLink &&
            <Image
              src={props.imageLink}
              alt={`Image holder for ${props.courseName}`}
              width = {200}
              height = {200}
              className='mx-auto'
            />
          }
          </div>
          <div className='flex flex-col items-center'>
            <Button
              link={`${props.class}/LandingPage`}
              color={props.color}
              hoverColor={props.buttonHover}
              name={'Continue'}
            />
          </div>
      </div>
    </>
  )
}