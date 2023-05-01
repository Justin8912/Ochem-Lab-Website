import Wrapper from './SafteyWrapper.js';

let Needles = (props) => {
  let listElements = [
    'Using needles and syringes properly is important to avoid getting accidentally stuck by the needle or exposed to chemicals.',
    'Be careful taking the cap off the needle. Most people are stuck by needles at this point. Try to gently bend the needle at the base to break the seal.',
    'If the plunger sticks at all, discard the syringe and needle immediately (See Waste Disposal)'
  ]
  return (
    <Wrapper
      {...props}
      listElements = {listElements}
      sectionHeader = {'Needles and Syringes'}
    />
  )
}

let Bromine = (props) => {
  let listElements = [
    'We use Bromine solutions several times in this lab during the semester. It is important to follow the safety protocols to avoid exposure to bromine.',
    'The first rule is that you must wear gloves at all times when handling a container that has bromine in it. Make sure that you check your gloves after you handle that container to ensure that no bromine has gotten on them. If they have been exposed, change the gloves immediately.',
    'If you have been exposed to bromine on your skin, rinse the area thoroughly with water for 15 minutes.',
    'If you have a small bromine spill, you must rinse the area with sodium thiosulfate solution and refer to the spill EOS.'
  ]
  return (
    <Wrapper
      {...props}
      sectionHeader = {'Using Bromine'}
      listElements = {listElements}
      />
  )
}

let Waste = (props) => {
  let indSection = {
    'Solid Chemical Waste': [
      'Solid waste is considered any solid chemicals that you no longer need. It does not include things like gloves, weigh boats or paper towels.',
      'Solid waste is disposed in the solid waste container'
    ],
    'Trash': [
      'Trash is considered things like weigh boats, gloves and paper towels.',
      'Trash is disposed in the trash cans located throughout the lab.'
    ],
    'Broken Glass': [
      'Broken glass is disposed in the broken glass bins throughout the lab.',
      'Be careful when handling the broken glass to ensure that you do not cut yourself.'
    ],
    'Liquid Chemical Waste': [
    'Dispose of all liquid chemical waste into the appropriate container.',
    'Be sure to lift the lid before emptying pouring the waste into the container.',
    'If the container is full, inform your TA so that a new one can be obtained.',
    'Ensure that all acids or bases are neutralized before they are disposed into the aqueous waste container'
    ],
    'Sharps Waste (Needles, Syringes, and Razors': [
      'Dispose all sharps waste into the sharps container.',
      'Never throw it into the trash. All needles will be accounted for and disposed of properly. If one is missing, then nobody will be allowed to leave until it is found.'
    ]
  };

  let postHeadingContent = 'There are several different types of waste that is generated in the lab, and you need to dispose of all of it properly. If you are unsure about where to dispose of something, ask your TA.';
  return (
    <Wrapper
      {...props}
      sectionHeader= {'Waste Disposal'}
      indSections = {indSection}
      postHeadingContent = {postHeadingContent}
    />
  )
}

let exports = {
  Needles: Needles,
  Bromine: Bromine,
  Waste: Waste
}

export default exports;