import {v4 as uuidv4} from 'uuid';
import react, {useState, useEffect} from 'react';

export default function TAs (props) {
  const [section, updateSection] = useState([]);
  const [tempSection, updateTempSection] = useState([]);
  useEffect(() => {
    updateSection(props.section);
    updateTempSection(props.section);
  }, [props.section])

  useEffect(() => {
    if (section.length) {
      updateTempSection(section.filter(val => {
        if (Object.values(val).join('').toLowerCase().includes(props.search.toLowerCase())) {
          return true;
        }
      }))

    }
  }, [props.search, section])
  return (
    <table className='text-center border-collapse mx-auto'>
      <tbody>
        <tr>
          <th className='px-10 border-b'>TA</th>
          <th className='px-10 border-b border-l border-r'>Email</th>
          <th className='px-10 border-b'>Sections</th>
        </tr>
        {tempSection.map(ta => {
          return (
            <tr key={uuidv4()}>
              <td className='px-10 py-1'>{ta.name}</td>
              <td className='px-10 border-l border-r py-1'>{ta.email}</td>
              <td className='px-10 py-1'>{ta.sections}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}