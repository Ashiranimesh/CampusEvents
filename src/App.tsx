/*import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'*/

import './App.css'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import EventCard from "./components/EventCard";
import Events from"./pages/Events ";


/*
    return (
        <>
            
        </>
    );
}

export default App;*/

function App() {
  return (
    /*<div>
      <h1>campusEvents - week 3</h1>
    </div>*/
    <>
    <Navbar />
            <main>
                <h2>Welcome to CampusEvents</h2>
                <Events/>
            </main>
      <Footer />
      </>
    

  );

  
}

export default App;

