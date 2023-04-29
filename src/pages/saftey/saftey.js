import Header from '../assets/navbar.js';
import Footer from '../assets/footer.js'

export default function Saftey() {
  return (
    <>
      <Header/>

      <div className='grid grid-cols-5 flex text-slate-800'>
        <div className='col-span-1 px-10 mr-5 bg-white sidebar-styling transition duration-200 py-9 leading-8'>
          <h2 className='font-bold text-xl text-center mb-3'>Saftey Topics</h2>
          {/* This will be the sidebar */}
          <h3 className='font-bold hover-slate-500'>General Saftey Rules</h3>
          <h3 className='font-bold hover-slate-500'>Safety Equipment</h3>
          <h3 className='font-bold'>Standard Operating Procedures</h3>
          <ol className='ml-10 list-alpha'>
            <li className='hover-slate-500'>Using Needles and Syringes</li>
            <li className='hover-slate-500'>Using Bromine</li>
            <li className='hover-slate-500'>Disposing of Waste</li>
            <li className='hover-slate-500'>Wearing Gloves</li>
            <li className='hover-slate-500'>Using Acids and Bases</li>
            <li className='hover-slate-500'>Pressure</li>
            <li className='hover-slate-500'>Using Organic Chemicals</li>
            <li className='hover-slate-500'>Glassware</li>
            <li className='hover-slate-500'>Heating Reactions</li>
          </ol>
          <h3 className='font-bold'>Emergency Operating Procedures</h3>
          <ol className='ml-10 list-alpha'>
            <li className='hover-slate-500'>Exposure to Chemicals</li>
            <li className='hover-slate-500'>Fires</li>
            <li className='hover-slate-500'>Spills</li>
            <li className='hover-slate-500'>Evacuations</li>
            <li className='hover-slate-500'>Accidents</li>
            <li className='hover-slate-500'>Electrical</li>
          </ol>
        </div>
        <div className='col-span-4 py-9'>
          {/* This will be the main content */}
          <p>bye</p>
        </div>
      </div>

      <Footer/>
    </>
  )
}