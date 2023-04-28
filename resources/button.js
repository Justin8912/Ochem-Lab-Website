import react from 'react';
import Link from 'next/link';


export default function Button(props) {
  console.log(`hover:${props.hoverColor} ${props.color} text-white font-bold py-2 px-4 rounded mb-5 tracking-wide`)
  return (
    <button className={`hover:${props.hoverColor} ${props.color} text-white font-bold py-2 px-4 rounded mb-5 tracking-wide`}>
      <Link href={props.link}>{props.name}</Link>
    </button>
  )
}