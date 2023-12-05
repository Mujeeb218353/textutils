import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/textForm';
// import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#41577a';
      showAlert('Dark mode has been enabled','success');
      setInterval(()=>{
      document.title = 'TextUtils is Amazing';
      },2000);
      setInterval(()=>{
      document.title = 'Install TextUtils Now';
      },5000);
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled','success');
      document.title = 'TextUtils Light Mode';
    }
  }
  const [alert,setAlert] = useState(null);
  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      typ: type
    });
    setTimeout(()=>{
        setAlert(null)
    },5000);
  }
  return (
    <>
      {/*<Navbar />*/}
      {/*<Router>*/}
      <Navbar title="Text Utils" aboutText = "About Us" mode={mode} toggleMode={toggleMode} showAlert={showAlert}/>
      <Alert alert={alert} mode={mode}/>
        <div className={"container my-3"}>
          {/*<Routes>*/}
          {/*  <Route exact path="/about" element={<About showAlert={showAlert}/>}/>*/}
          {/*  <Route exact path="/" element={<TextForm heading="Master Cable Network" mode={mode} showAlert={showAlert}/>}/>*/}
          <TextForm heading="Master Cable Network" mode={mode} showAlert={showAlert}/>
          {/*</Routes>*/}
        </div>
      {/*</Router>*/}
    </>
  );
}
export default App;