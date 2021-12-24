/* eslint-disable no-unused-vars */
import './App.css';
import Navbar from './componets/Navbar';
import TextForm from './componets/TextForm';
import About from './componets/About';
import React, { useState } from 'react';
import Alert from './componets/Alert';
import Footer from './componets/Footer';
import Contact from './componets/Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Blog from './componets/Blog';



function App() {
  const [mode, setMode] = useState('light');
   // eslint-disable-next-line no-unused-vars
   const [alert, setAlert] = useState(null)

   const showAlert =(message,type)=>{
     setAlert({
       msg:message,
       type:type
     })
     setTimeout(()=>{
       setAlert(null);
     },1500);
   }

  //toggle mode start from 
  const toggleMode= ()=>{
    if(mode==='light'){
      setMode('dark');
     document.body.style.backgroundColor='#042743';
     showAlert("Dark mode has been enable","success");
     document.title='TextUtels-Darkmode';
    //  setInterval(()=>{
    // //    document.title = "TextUtels is Azaming Mode";
    // //  },2000);

    // //  setInterval(()=>{
    // //   document.title = "Install TextUtils Now";
    // // },1500);

    }else{
      setMode('light');
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enable","success");
      document.title='TextUtels-Lightmode';
    }

  }
  return (
    <> 
    <Router>
    <Navbar title="TextUtels" contact="Contact Us" about="About" blog="Blog"
    mode={mode} toggleMode={toggleMode}/>
    <Alert alert ={alert}/>
   
    <div className="container my-3">
    <Switch>
         <Route  exact path="/about">
          <About/>
          </Route>
          <Route path="/contact">
          <Contact/>
          </Route>
          <Route path="/blog">
          <Blog/>
          </Route>
          <Route  exact path="/">
          <TextForm showAlert={showAlert} heading= "Enter the text to analyze below" mode={mode}/>
          </Route>
         
    </Switch>    
    </div>
    </Router>
    <Footer/>
    </>
  );
}
export default App;