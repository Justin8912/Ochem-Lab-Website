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

let Gloves = (props) => {
  let listElements = [
    'First wear the proper size. Do not wear a pair of gloves that is too small or too big.',
    'Second, wear gloves only when handling chemicals. Also, do not touch yourself when you are wearing gloves.',
    'Third, inspect the gloves while you are wearing them. If they have any rips or tears in them, dispose of them properly and obtain new ones. If they have been exposed to chemicals, dispose of them properly and obtain new ones.',
    'Fourth, after you are done handling chemicals, you no longer need to where gloves, therefore, take them off.',
    'Fifth, if you need to exit the lab for anything, you must remove the gloves and dispose of them properly.'
  ]
  let postHeadingContent = 'The most common exposure to chemicals is on the hands. The best way to avoid it is by wearing gloves. These are provided and should be worn properly. To wear gloves properly do the following:';
  return (
    <Wrapper
      {...props}
      sectionHeader = {'Wearing Gloves'}
      listElements = {listElements}
      postHeadingContent = {postHeadingContent}
    />
  )
}

let AandB = (props) => {
  let listElements = [
    'Acids and Bases (especially when they are concentrated) are dangerous chemicals and need to be handled properly to ensure that an accident not occur.',
    'If you are making an acid or base dilution (in water for instance) from a concentrated solution, always add the concentrated solution to the water. Make sure that you add the concentrated solution slowly. It often will still be exothermic, meaning the addition needs to be done carefully and may require an ice water bath (especially if the solvent has a lower boiling point like methanol).',
    'If you are adding a strong acid to a strong base, this must be done slowly and often in an ice water bath because the reaction is exothermic.',
    'Reacting acids with sodium bicarbonate or sodium carbonate will release carbon dioxide, so the addition needs to be done slowly, or the solution will fizz over. If you are doing an extraction in a separatory funnel, vent more frequently to release the carbon dioxide.'
  ]
  return (
    <Wrapper
      {...props}
      sectionHeader = {'Using Acids and Bases'}
      listElements={listElements}
    />
  )
}

let Pressure = (props) => {
  let listElements = [
    'We avoid pressure at all cost in this lab.',
    'Never heat a system that is closed.',
    'When using a separatory funnel, ensure that you vent it several times.',
    'If you have a situation where pressure has built up, let your TA know to ensure that the pressure is released safely.'
  ]
  return (
    <Wrapper
      {...props}
      sectionHeader = {'Pressure'}
      listElements={listElements}
    />
  )
}

let UOC = (props) => {
  let listElements = [
    'When using organic chemicals, be careful to not get exposed to them because many are toxic.',
    'Wear gloves when handling the chemicals to avoid getting them onto your hands. Always inspect the gloves to ensure that the chemical has not gotten onto the gloves. If the gloves have been exposed, then take them off, dispose them and get a new pair while you are still working with the chemicals. When you are done working with the chemicals, you no longer need the gloves.',
    'When handling a liquid organic chemical, transfer it inside the hood and then quickly move it to your own hood to avoid inhaling its vapors.',
    'When working with solids, be sure to carefully weigh out the appropriate amounts into the weigh boats. If you spill any, clean up the mess properly. Transfer the solid to the hood carefully.',
    'Be sure to have the msds\'s on hand for all the chemicals you will be using so that if you need any information, you can get it quickly.'
  ];

  return (
    <Wrapper
      {...props}
      sectionHeader = {'Using Organic Chemicals'}
      listElements = {listElements}
    />
  )
}

let Glass = (props) => {
  let listElements = [
    'When using glassware in the lab, it is important to use it properly to ensure that you avoid spills or breakages.',
    'Always inspect the glassware before using it to ensure that it doesn\'t have any cracks.',
    'Be sure to clean your glassware at the end of the lab thoroughly. Be careful when cleaning the glassware. Most cuts occur when students are cleaning their glassware.',
    'When assembling a glassware setup for a reaction, be sure to clamp the glassware properly. Do not use too many clamps because too many makes the setup inflexible and do not use too few clamps will usually result in a demonstration of gravity. Also use a Keck clamp wherever you have two pieces of glassware connected by a glass joint.',
    'Be sure to grease all joints properly when instructed to do so.',
    'Be sure when using the thermometer adapter that it is inserted properly.',
    'If you are using a rubber-septa, be sure that it is inserted properly.',
    'If you break any glassware, let your TA know immediately. Then clean up the mess if it is small enough for you to handle it. Be sure to be careful not to cut yourself and place the broken glass into the proper container.',
    'Be sure to use the correct size of container when getting a chemical. If you need 50 mL, do not use the 50 mL beaker (use a larger one to avoid spills).',
  ]


  return (
    <Wrapper
      {...props}
      sectionHeader={'Glassware'}
      listElements={listElements}
    />
  )
}

let Heating = (props) => {
  let listElements = [
    'Most organic compounds can catch fire, (especially the solvents) so it is important to be careful when handling them (especially when heating them).',
    'When you are heating a reaction, ensure that it is not a closed system because this will build up pressure very quickly and become a very dangerous situation very quickly.',
    'Never leave a reaction that is being heated unattended.',
    'If a reaction is exothermic, such as an acid-base reaction, it often needs to be done slowly to ensure that it does not get out of control (pay attention to the directions for catch phrases like "add dropwise").'
  ]

  return (
    <Wrapper
      {...props}
      sectionHeader = {'Heating Reactions'}
      listElements = {listElements}
    />
  )
}

let exports = {
  Needles: Needles,
  Bromine: Bromine,
  Waste: Waste,
  Gloves: Gloves,
  AandB: AandB,
  Pressure: Pressure,
  UOC: UOC,
  Glass: Glass,
  Heating: Heating
}

export default exports;