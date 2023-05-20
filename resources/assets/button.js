import react from 'react';
import Link from 'next/link';
export default function Button(props) {
  let hoverCol = 'hover:' + props.hoverColor;

  return (
    <Link
      href={props.link ? props.link : ''}
      className={`${props.color} ${props.hoverColor} inline-block text-white text-center font-bold py-2 px-4 rounded mb-5 tracking-wide min-w-fit max-w-fit md:max-w-full mx-auto md:mx-0`}>
      <button className='text-center content-center mx-auto justify-self-center'>
        {props.name ? props.name : ''}
      </button>

    </Link>
  )
}