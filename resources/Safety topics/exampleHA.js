import react from 'react';

export default function ExHA (props) {
  return (
    <div className='leading-8'>
      <h1 className='font-bold text-xl'>Example Hazard Analysis</h1>
      <p><strong>SOPs:</strong></p>
      <p>C, D, G, H, and I</p>
      <br/>
      <p><strong>Hazard Analysis</strong></p>
      <table className='border-collapse text-center'>
        <tr>
          <th>Hazard</th>
          <th>Danger</th>
          <th>Avoid</th>
          <th>What to do</th>
        </tr>

        <tr>
          <td>2</td>
          <td className='px-10'>Potential Electrical Shock</td>
          <td className='px-10'>Contact TA, unplug hotplate and replace it</td>
          <td className='px-10'>Get medical attention if needed</td>
        </tr>
      </table>
      <br/>
      <p><strong>*****	Make sure to print all the SOPs and EOPs and MSDS’s and place them in your notebook so you have them while in lab</strong></p>
    </div>
  )
}