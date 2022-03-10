import './App.css';
import {Button} from "react-bootstrap"
import React,{useEffect,useState,useEffectOnlyOnce} from 'react';
import axios from 'axios' 
function App() {
   const [data,setData]=useState([ ]);
   useEffect(()=>{
     changeAdvive();
   },[])
   const changeAdvive=()=>{
     axios.get("https://api.adviceslip.com/advice")
     .then((data)=>{
       setData(data.data.slip.advice)
     })
  //  useEffect(() => {
  //   axios.get("https://api.adviceslip.com/advice").then((data)=>{
  //     setData(data.data.slip.advice);
      
  //   })},[])
  }
  return (
   <div id='backgroundimg'>
     {data}
     <div className="mb-2">
    <Button variant="primary" size="lg" onClick={changeAdvive}>
      Large button
      </Button>
      </div>  
   </div>
  );
}

export default App;
