import './App.css';
import Register from './register'
import Login from './login'
import React,{useState} from 'react';

function App() {
const[isRegister ,setIsRegister ]=useState(true)
const isLogin=()=>{
  setIsRegister(false)
}
  
  return (
    <div>
      {/* <login/> */}
      {/* <Register> */}
     {isRegister?<Register isLogin={isLogin} />:<Login/>}
      
    </div>
  );
}

export default App;
