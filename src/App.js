import About from './components/about'
import Contact from './components/contact'
import Navbar from './components/navbar'
import Project from './components/project'
import Skills from './components/skills'
import './App.css';

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About/>
      <Project />
      <Skills />
      <Contact />
    </main>

  );
}

export default App;
