import react from 'react';
import Button from '../assets/button.js';

export default function SharedContent (props) {
  return (
    <div className="max-w-sm md:max-w-md lg:max-w-lg rounded overflow-hidden shadow-lg mx-auto mt-20" style={{backgroundColor:'#efefef'}}>
      <div className="px-6 py-4">
      <div className="font-bold text-xl mb-3 text-center">Quick Links</div>

        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3 flex-col mx-10 items-center'>
          <Button
            color={'bg-orange-700'}
            hoverColor={'bg-orange-600'}
            name='Quest'
            link='https://quest.cns.utexas.edu/'/>

          <Button
            color={'bg-yellow-500'}
            hoverColor={'bg-yellow-400'}
            name='Turnitin'
            link='https://www.turnitin.com/'/>

          <Button
            color={'bg-blue-700'}
            hoverColor={'bg-yellow-600'}
            name='Safety'
            link='/saftey/saftey'/>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 flex-col items-center mx-10 md:mx-20'>

          <Button
            color={'bg-pink-700'}
            hoverColor={'bg-pink-600'}
            name='IR Analysis Flowchart'
            link='https://fjetland.cm.utexas.edu/courses/organiclab/IRflowchart.gif'/>

          <Button
            color={'bg-teal-700'}
            hoverColor={'bg-teal-600'}
            name='Email & Office Hours'
            link='/officeHours'/>

        </div>
    </div>
  )
}