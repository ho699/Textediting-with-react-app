
import './App.css';
import Navbar from './components/Navbar';
import TexForm from './components/TexForm';
import React, { useState } from 'react'
import Alert from './components/Alert';






function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not


  const toggleMode = ()=>{ // This is using for the dark mode
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

//ALERT
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }
  


  return (
    //jsx 
    //
   <>
  
   <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} key={new Date()} />
   <Alert alert={alert}/>
   <div className="container my-3">
   
   {/* /users --> Component 1
       /users/home --> Component 2 */}
        
       
       <TexForm showAlert={showAlert} mode={mode}/>  
         
     
        
   
   </div>
   
    </>
  )
}

export default App;
