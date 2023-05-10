import react, {useEffect, useState} from 'react';
import TATable from './officeHourTable.js';

export default function CourseSection (props) {

  if (props.class) {
    return (
      <div className='text-center bg-white w-2/4 h-96 max-h-fit course-content mx-auto rounded-lg ease-linear bg-slate-50 transition-all duration-500 overflow-hidden'>
        <div onClick={props.accordian} class='grid grid-cols-7 bg-red-50 rounded-lg py-5 px-10' id='ch128k'>
          <svg className='col-span-1' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
          </svg>
          <h3 id='ch128k' className={`font-bold text-xl text-center col-span-6`}>{props.title}</h3>
          </div>

          <TATable section={props.info}/>
      </div>
    )
  } else {
    return (
      <div className='text-center bg-white w-1/6 dropdown mx-auto rounded-lg ease-linear bg-slate-50 transition-all duration-500'>
        <div onClick={props.accordian} class='grid grid-cols-7 bg-red-50 rounded-lg py-5 px-10' id='ch128k'>
          <svg className='col-span-1' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16" preserveAspectRatio="xMidYMin slice">
            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
          </svg>
          <h3 id='ch128k' className={`font-bold text-xl text-center col-span-6`}>{props.title}</h3>
          </div>
      </div>
    )
  }
}