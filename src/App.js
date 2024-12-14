import { useState } from 'react';
import './App.css';
// import About from './componants/About';
import Navbar from './componants/Navbar';
import TextForm from './componants/TextForm';
import Alert from './componants/Alert';



function App() {

  const [mode, setMode] = useState('light');
  const [mode1, setMode1] = useState('light');
  const [alert, setAlert] = useState('light');


  const showALert = (message, type) => {
      setAlert({
        msg : message,
        type : type
      })

      setTimeout(() => {
        setAlert(null);
      }, 2000);
  }
    
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#212529';
      showALert("Dark Mode Has Been Enabled", "success");
      document.title = 'TextUtils | DarkMode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = '#f8f9fa';
      showALert("Light Mode Has Been Enabled", "success");
      document.title = 'TextUtils | LightMode';
    }
    textColor();
  }
  const toggleMode2 = ()=>{
    if(mode === 'light'){
      setMode('navy blue');
      document.body.style.backgroundColor = '#202A44';
      showALert("Dark Blue Mode Has Been Enabled", "success");
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = '#f8f9fa';
      showALert("Light Mode Has Been Enabled", "success");
      
    }
    textColor();
  }

  const check = () => {
    if (mode === 'dark') {
      return 'dark';
    }
    else if(mode === 'navy blue'){
      return '#202A44';
    }
  }

  const textColor = () => {
    if(mode1 == 'light'){
      setMode1('dark');
    }else{
      setMode1('light');
    }
  }

  return ( 
    <>

        <Navbar title = "TextUtils" aboutText = "About Us" mode = {mode} mode1 = {mode1} toggleMode = {toggleMode} toggleMode2 = {toggleMode2} textColor = {textColor} />
        <Alert alert = {alert}/>
        
        <TextForm mode = {mode} check = {check}/>
        {/* <About /> */}

    </>
  );
}

export default App;
