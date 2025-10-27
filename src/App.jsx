import './App.css'
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Education from './Components/Education';
import Certificates from './Components/Certificates';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
function App() {

  return (
    <div className="App w-full min-h-screen bg-slate-900 text-white overflow-x-hidden">
      <Header />
      <main>
        <Home />
        <About />
        <Education />
        <Certificates />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App
