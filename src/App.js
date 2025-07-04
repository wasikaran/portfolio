import React from 'react';
import Navbar from './mainComponents/Navbar';
import About from './mainComponents/About';
import Skills from './mainComponents/Skills';
import Services from './mainComponents/Services';
import FAQs from './mainComponents/FAQs';
import Contact from './mainComponents/Contact';
import Footer from './mainComponents/Footer';
import { HashRouter } from 'react-router-dom';
import Portfolio from './mainComponents/Portfolio';
function App() {
  return (
    <>
    <HashRouter >

    <div>
      <Navbar />
      <div style={{marginTop: '250px'}} >

<About />
      </div>
<Skills />
<Services />
<Portfolio />
<FAQs />
<Contact />
<Footer />
    </div>
    </HashRouter>
    </>
  );
}

export default App;
