import './App.css';
import Home from './components/Home';
import Events from './components/Events';
import Highlights from './components/Highlights';
import Pass from './components/Pass';
import Gallery from './components/Gallery';
import Talent from './components/Talent';
import Organizers from './components/Organizers';
import Contact from './components/Contact';
import Voting from './components/Voting';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div className="w-screen min-h-screen flex flex-col relative">
      {/* <div className="h-screen w-screen sm:invisible md:visible flex flex-row justify-center items-center absolute">Open Using Mobile Phone</div> */}
      <div>
        <Home/>
        {/* <Voting/> */}
        <Events/>
        <Highlights/>
        <Pass/>
        <Gallery/>
        <Talent/>
        <Organizers/>
        <Contact/>
      </div>
      <Analytics />
    </div>
  );
}

export default App;
