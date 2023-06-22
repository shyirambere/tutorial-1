import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './components/About';

import Services from './components/Services';
import Tours from './components/Tours';
import Hero from './components/Hero';

import './index.css';


function App() {
  return <>
    <Navbar />
    <Hero />
    <Services />
    <Tours />
    <About />
    <Footer />
  </>
}

export default App;
