import Wrapper from './SafteyWrapper.js';

let EtC = (props) => {
  let listElements = [
    'Hopefully you will not be exposed to a chemical in the lab. However, it is possible. Care must be taken when handling chemicals to avoid exposure even when wearing safety equipment.',
    'It is highly unlikely that you will exposed in the eyes because you will always be wearing your goggles in the lab. However, if it does happen, go to the eye wash station and rinse your eyes out for a minimum of 15 minutes.',
    'If your face is exposed to a chemical that requires to be rinsed with water, then you will also be using the eye wash station for a minimum of 15 minutes. If it requires some different type of treatment, use the specific treatment required by the chemicals msds sheet.',
    'Since you will be wearing proper clothing and a lab coat, exposure to the rest of your body is unlikely, but it still might occur. If you spill a chemical on your lab coat, remove the coat immediately and obtain a new one.',
    'If the exposure is in a large area of your body, we may have to place in the shower for a minimum of 15 minutes. If it is in a small area, it may only require to be rinsed in the sink.',
    'Avoid inhalation of any chemical. To avoid exposure to the vapors of organic compounds, transfer all liquids inside the designated chemical hood. As quickly as possible, transfer them to your own hood and get them inside. If you have been overcome with the vapors of a chemical, let your TA know as soon as possible, and get some fresh air (also follow the instructions dictated by the msds for that chemical).'
  ]
  return (
    <Wrapper
      {...props}
      sectionHeader = {'Exposure to Chemicals'}
      listElements = {listElements}
    />
  )
}

let Fires = (props) => {
  let listElements = [
    'It is possible that a fire will happen. We are using flammable materials in this lab. The most important thing to remember in a fire is to remain calm.',
    'The first thing to do is shout as loud as you can FIRE.',
    'If it is small, they can usually be put out with the fire extinguisher.',
    'If your cloths have caught on fire, it is important that you get the flames smothered as quickly as possible by the fire blanket.',
    'If the fire is too large to put out, then it is important to evacuate. Pull the fire alarm and follow the evacuation protocols.'
  ]
  return (
    <Wrapper
      {...props}
      sectionHeader = {'Fires'}
      listElements = {listElements}
    />
  )
}

let Spills = (props) => {
  let listElements = [
    'If you have a spill, it is important to first let your TA know about it immediately. You and your TA will then assess if you can clean up the mess or, if it will require the stockroom.',
    'If it is to be you, and it requires the spill kit, go get it (it is located by the waste containers) Normally spills that will require spill kits will be handled by the stockroom, so this is not something that a student will usually have to do.',
    'If it does not require a spill kit, then make sure that you clean the entire area thoroughly. Make sure that you are wearing gloves when cleaning up the area. If there is broken glass involved, ensure that you are careful so that you do not cut yourself.',
    'If there is any waste, be sure to put the waste into the appropriate containers.'
  ]
  return (
    <Wrapper
      {...props}
      sectionHeader = {'Spills'}
      listElements = {listElements}
    />
  )
}

let Evacuations = (props) => {
  let listElements = [
    'First, turn off all f your equipment (hotplates, stir plates, water hoses etc...).',
    'Second, follow your classmates and TA out of the lab to the assigned evacuation point.',
    'Third, stay as a group and do not leave unless instructed to by the TA or the lab instructor.',
    'Fourth, only re-enter the lab once you have been instructed to by the TA or the lab instructor.'
  ]

  return (
    <Wrapper
      {...props}
      sectionHeader ={'Evacuations'}
      postSectionHeaderContent = {'In the event of an evacuation, do the following:'}
      listElements = {listElements}
    />
  )
}

let Accidents = (props) => {
  let listElements = [
    'Accidents are events that occur in lab that result in injuries, fires, chemical spills, burns or damage of equipment.',
    'If you have an accident, notify your TA immediately.',
    'If you are hurt, such as a cut or a burn, we will assess it and determine if it can be taken care of at the lab or if you will need to go to the have medical assistance. You will always be given the option for medical assistance if that is your wish.',
    'An accident form will be filled out.'
  ]

  return (
    <Wrapper
      {...props}
      sectionHeader ={'Accidents'}
      listElements = {listElements}
    />
  )
}

let Electrical = (props) => {
  let listElements = [
    'Exposure to an electrical hazard can lead to a serious injury or death. These hazards can come from several sources, such as faulty wiring or faulty equipment.',
    'Avoid electrical hazards by using the electrical equipment appropriately. Do not use them for something they are not designed to do. Check the power cables to ensure that they are not damaged before turning on a piece of equipment. Plug all equipment into a Ground-Fault Circuit Interrupter if it is near a water source (our labs have these).',
    'If you see someone being electrocuted, the most important this to remember is to NOT TOUCH THEM to avoid getting electrocuted yourself. Call 911 immediately and if possible, try to turn off the equipment or trip the breaker (DO NOT ATTEMPT THIS IF IT IS NOT SAFE).'
  ]

  return (
    <Wrapper
      {...props}
      sectionHeader ={'Electrical'}
      listElements = {listElements}
    />
  )
}

let EOPs = {
  EtC: EtC,
  Fires: Fires,
  Spills: Spills,
  Evacuations: Evacuations,
  Accidents: Accidents,
  Electrical: Electrical
}

export default EOPs;