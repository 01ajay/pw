import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [data,setData]=useState("");

  const subscribe = async ()=>{
   let sw = await navigator.serviceWorker.ready;
   let push= await sw.pushManager.subscribe({
    userVisibleOnly:true,
    applicationServerKey:'BMeznIyejTcXPzn-71stzWrjdYp3YsK-t09mMgBo9GIkkHwk8ewCbkq2-5GWnM0aoYNWoI6gQbJGGLYmjZm89AU',

   })

   console.log(JSON.stringify(push));


   setData(JSON.stringify(push));

  };

  return (
    
    <div className="App">
      <header className="App-header">
      <h1>
        Web Push
      </h1>
      <button style={{
        width :'200px',
        height:'50px',
        borderRadius:"10px",
        backgroundColor:"#aacef7",
        fontSize:'22pt',
        fontWeight:500,
        
      }}
      onClick={subscribe}>Subscribe</button>
    <input type={"text"} width={"200px"}
    value={data}
    ></input>
      </header>
    </div>
  );
}

export default App;
