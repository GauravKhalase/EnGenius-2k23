import './App.css';
import Home from './components/Home';
import Events from './components/Events';
import Highlights from './components/Highlights';
import Pass from './components/Pass';
import Gallery from './components/Gallery';
import Talent from './components/Talent';
import Organizers from './components/Organizers';
import Contact from './components/Contact';

function App() {
  return (
    <div className="w-screen min-h-screen flex flex-col relative">
      {/* <div className="h-screen w-screen sm:invisible md:visible flex flex-row justify-center items-center absolute">Open Using Mobile Phone</div> */}
      <div>
        <Home/>
        <Events/>
        <Highlights/>
        <Pass/>
        <Gallery/>
        <Talent/>
        <Organizers/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
