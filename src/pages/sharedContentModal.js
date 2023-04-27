import react from 'react';
import Button from '../../resources/button.js';

export default function SharedContent (props) {
  return (
    <div className="max-w-lg rounded overflow-hidden shadow-lg mx-auto mt-20" style={{backgroundColor:'#efefef'}}>
      <div className="px-6 py-4">
      <div className="font-bold text-xl mb-3 text-center">Quick Links</div>

        </div>
        <div className='grid grid-cols-3 gap-3 flex-col mx-10 items-center'>
          <Button
            color={'bg-green-700'}
            hoverColor={'bg-green-600'}
            name='IR Analysis Flowchart'
            link='https://fjetland.cm.utexas.edu/courses/organiclab/IRflowchart.gif'/>

          <Button
            color={'bg-orange-700'}
            hoverColor={'bg-orange-600'}
            name='Quest'
            link='https://quest.cns.utexas.edu/'/>

          <Button
            color={'bg-yellow-600'}
            hoverColor={'bg-orange-500'}
            name='Turnitin'
            link='https://www.turnitin.com/'/>

        </div>
    </div>
  )
}