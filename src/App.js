import React from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Education from './Components/Education/Education';
import Services from './Components/Services/Services';
import MyRecentWorks from './Components/MyRecentWorks/MyRecentWorks';
import MyCertificates from './Components/MyCertificates/MyCertificates';
import Footer from './Components/Footer/Footer';
import {useState,useEffect} from 'react';
import PuffLoader from "react-spinners/PuffLoader";
function App() {
  const [loading,setLoading] = useState(false);
  useEffect(()=>{
      setLoading(true)
      setTimeout(()=>{
        setLoading(false);
      },2000)
  },[]);
  return (
       <div>
         {
           loading?
           (<div className="pre-loader">
             <PuffLoader color={'red'} loading={loading} size={150} />
           </div>
           )
           :
           (
            <div>
            <Navigation></Navigation>
            <Home></Home>
            <About></About>
            <Education></Education>
            <Services></Services>
            <MyRecentWorks></MyRecentWorks>
            <MyCertificates></MyCertificates>
            <Footer></Footer>
           </div>
           )
         }
        </div>
  );
}

export default App;
