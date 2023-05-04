import react, {useState} from 'react';
import Link from 'next/link';
import GeneralSafety from '../../../resources/Safety topics/General Saftey Rules.js';
import SafetyEq from '../../../resources/Safety topics/Safety Equipment.js';
import SOPs from '../../../resources/Safety Topics/SOPs.js';
import EOPs from '../../../resources/Safety Topics/EOPs.js';
import ExampleHA from '../../../resources/Safety topics/exampleHA.js'


let HolderState = () => {
  return (
    <>
      <p>Please make a selection from the left to see content.</p>
      <br/>
      <p><strong>All the Abbreviated MSDS Sheets for each chemical can be found on the Quest Page for each experiment.</strong></p>
    </>
  )
}

let mainBodyContent = {
  HolderState: HolderState,
  GeneralSafety: GeneralSafety,
  SafetyEq: SafetyEq,
  Needles: SOPs.Needles,
  Bromine: SOPs.Bromine,
  Waste: SOPs.Waste,
  Gloves: SOPs.Gloves,
  AandB: SOPs.AandB,
  Pressure: SOPs.Pressure,
  UOC: SOPs.UOC,
  Glass: SOPs.Glass,
  Heating: SOPs.Heating,
  EtC: EOPs.EtC,
  Fires: EOPs.Fires,
  Spills: EOPs.Spills,
  Evacuations: EOPs.Evacuations,
  Accidents: EOPs.Accidents,
  Electrical: EOPs.Electrical,
  ExHA: ExampleHA
};

export default function Saftey() {
  let content = {GeneralSafety: GeneralSafety}
  const [screenContent, setScreenContent] = useState('HolderState');

  let ContentManager = (props) => {
    return (
      <>
        {mainBodyContent[screenContent](props)}
      </>
    )
  }

  let clickHandler = (e) => {
    if (e.target.id) setScreenContent(e.target.id);
  }
  return (
    <>
      <div className='grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-5 flex text-slate-800'>
        <div className='col-span-1 min-w-min px-10 md:mr-5 bg-white sidebar-styling transition duration-200 py-9 leading-8 text-left' onClick={clickHandler}>
          <h2 className='font-bold text-xl text-center mb-3'>Saftey Topics</h2>
          {/* This will be the sidebar */}
          <h3 className='font-bold hover-slate-500' id='GeneralSafety'>General Safety Rules</h3>
          <h3 className='font-bold hover-slate-500' id='SafetyEq'>Safety Equipment</h3>
          <h3 className='font-bold'>Standard Operating Procedures</h3>
          <ol className='ml-10 list-alpha'>
            <li className='hover-slate-500' id='Needles'>Using Needles and Syringes</li>
            <li className='hover-slate-500' id='Bromine'>Using Bromine</li>
            <li className='hover-slate-500' id='Waste'>Disposing of Waste</li>
            <li className='hover-slate-500' id='Gloves'>Wearing Gloves</li>
            <li className='hover-slate-500' id='AandB'>Using Acids and Bases</li>
            <li className='hover-slate-500' id='Pressure'>Pressure</li>
            <li className='hover-slate-500' id='UOC'>Using Organic Chemicals</li>
            <li className='hover-slate-500' id='Glass'>Glassware</li>
            <li className='hover-slate-500' id='Heating'>Heating Reactions</li>
          </ol>
          <h3 className='font-bold'>Emergency Operating Procedures</h3>
          <ol className='ml-10 list-alpha'>
            <li className='hover-slate-500' id='EtC'>Exposure to Chemicals</li>
            <li className='hover-slate-500' id='Fires'>Fires</li>
            <li className='hover-slate-500' id='Spills'>Spills</li>
            <li className='hover-slate-500' id='Evacuations'>Evacuations</li>
            <li className='hover-slate-500' id='Accidents'>Accidents</li>
            <li className='hover-slate-500' id='Electrical'>Electrical</li>
          </ol>
          <h3 className='font-bold hover-slate-500' id='ExHA'>Example Safety Analysis</h3>
          <Link className='font-bold hover-slate-500' href='https://fjetland.cm.utexas.edu/courses/organiclab/Safety/One%20File.pdf'>All EOPs and SOPs in one file</Link>
        </div>
        <div className='sm:col-span-1 md:col-span-3 lg:col-span-3 py-9 px-5'>
          <ContentManager
            overallFormat = 'leading-8'
            headingFormat = 'font-bold text-xl'
            olFormat = 'list-alpha mx-10 list-inside'
          />
        </div>

      </div>

    </>
  )
}