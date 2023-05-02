import react from 'react';
import Navbar from '../assets/navbar.js';
import Footer from '../assets/footer.js';
import LandingPage from '../assets/sectionLandingPage.js'

export default function CH220C (props) {
  let CH220CClassInfo = 'If any additional class information needs to be given, it will be given here.'
  return (
    <>
      <Navbar/>
      <LandingPage
        classColor='blue-700'
        classInfo = {CH220CClassInfo}
      />
      <Footer/>
    </>
  )
}