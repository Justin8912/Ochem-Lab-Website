import react, {useEffect, useState} from 'react';
import TATable from './officeHourTable.js';

export default function CourseSection (props) {
  if (props.class) {
    return (
      <div className={`relative shadow-lg text-center bg-white min-w-fit w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 expanded-content max-h-fit mx-auto rounded-lg ease-linear bg-slate-50 transition-all duration-500 overflow-hidden mb-20`}>
        <div onClick={props.accordian} className={`grid grid-cols-7 ${props.color} py-5 px-10 text-slate-800`} id={props.idHandle}>
          <svg className='col-span-1' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16" id={props.idHandle}>
            <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
          </svg>
          <h3 id={props.idHandle} className={`font-bold text-xl text-center col-span-6`}>{props.title}</h3>
          </div>
          <div className='grid grid-cols-1'>
            <div className='tableDisplay my-5 overflow-scroll'>
              <TATable section={props.info}/>
            </div>
            <div className={`items-end ${props.color} py-5`} id={props.idHandle}></div>
          </div>
      </div>
    )
  } else {
    return (
      <div className='text-center shadow-lg bg-white min-w-fit w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 dropdown mx-auto rounded-lg bg-slate-50 transition-all duration-500 ease-linear mb-20'>
        <div onClick={props.accordian} className={`grid grid-cols-7 ${props.color} rounded-lg py-5 px-10 text-slate-800`} id={props.idHandle}>
          <svg className='col-span-1' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16" preserveAspectRatio="xMidYMin slice" id={props.idHandle}>
            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
          </svg>
          <h3 id={props.idHandle} className={`font-bold text-xl text-center col-span-6`}>{props.title}</h3>
          </div>
      </div>
    )
  }
}