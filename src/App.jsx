import React from 'react'
import About from "./Components/About"
import Contact from "./Components/Contact"
import Experiance from "./Components/Experiance"
import Footer from "./Components/Footer"
import Home from "./Components/Home"
import Navbar from "./Components/Navbar"
import Portfolio from "./Components/Portfolio"
import {Toaster} from "react-hot-toast"
function App () {
    return(
        <>
        <div>
        <Navbar />
        <Home />
        <About />
        <Portfolio />
        <Experiance />
        <Contact />
        <Footer />
        </div>
        <Toaster />
        </>
    );
}
export default App;
