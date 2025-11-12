import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import './App.css';

function App() {
  return (
    <Router basename="/diogo-bordin">
      <Preloader />
      <CustomCursor />
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Portfolio />
              <Testimonials />
              <About />
              <Contact />
            </>
          } />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
