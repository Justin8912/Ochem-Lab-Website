import react from 'react';

export default function SafteyEq(props) {
  return (
    <>
      <div className={props.overallFormat}>
        <h1 className={props.headingFormat}>Safety Equipment</h1>
        <p>
          It is important that you are aware of where the saftey equipment is located in the lab.
          You will be shown the location of each of these at the beginning of the semester.
        </p>
        <ol className={props.olFormat}>
          <li>Emergency Shower</li>
          <li>Eye Wash Stations</li>
          <li>Fire Blankets</li>
          <li>Fire Extinguishers</li>
          <li>First Aid Kits</li>
          <li>Emergency Exits</li>
          <li>Dust Pans and Brooms</li>
          <li>Spill Kits</li>
        </ol>
      </div>
    </>
  )
}