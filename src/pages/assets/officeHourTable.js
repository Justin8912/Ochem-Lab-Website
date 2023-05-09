import {v4 as uuidv4} from 'uuid';

export default function TAs (props) {
  return (
    <table className='text-center border-collapse'>
      <tbody>
        <tr>
          <th className='px-10'>TA</th>
          <th className='px-10'>Email</th>
          <th className='px-10'>Sections</th>
        </tr>
        {props.section.map(ta => {
          return (
            <tr key={uuidv4()}>
              <td className='px-10'>{ta.name}</td>
              <td className='px-10'>{ta.email}</td>
              <td className='px-10'>{ta.sections}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}