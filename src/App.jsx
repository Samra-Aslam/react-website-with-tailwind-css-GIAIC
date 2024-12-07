import react from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css'
import Homepage from './components/Homepage';
import About from './components/About';
import Header from './components/Header';
import Contact from './components/Contact';
import Manu from './components/Manu';
import Footer from './components/Footer';

const router= createBrowserRouter([
{
  path:"/",
  element:<div>
    <Header />
    <Homepage />
    <Footer/>
  </div>
},
{
  path:"/about",
  element:<div>
  <Header />
  <About />
  <Footer/>
</div>
},
{
  path:"/contact",
  element:<div>
  <Header />
  <Contact />
  <Footer/>
</div>
},
{
  path:"/manu",
  element:<div>
  <Header />
  <Manu />
  <Footer/>
</div>
},
]);

function App() {
  

  return (
    <>
    <div className='App'>
       <RouterProvider router={router}/>
    </div>     
    </>
  )
}

export default App
