import react from 'react';
import Link from 'next/link';


export default function Button(props) {
  return (
    <button className={`${props.color} hover:${props.hoverColor} text-white font-bold py-2 px-4 rounded mb-5 tracking-wide`}>
      <Link href={props.link}>{props.name}</Link>
    </button>
  )
}