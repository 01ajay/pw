import logo from './logo.svg';
import './App.css';

function App() {

  const subscribe = async ()=>{
   let sw = await navigator.serviceWorker.ready;
   let push= await sw.pushManager.subscribe({
    userVisibleOnly:true,
    applicationServerKey:'BOkByZMMPti3XMUua0b0xLjJ52kuwRcqGTsv6TJ-UTzAOnPiGHHTIUDmfp_uWUbMd62qwr29azANn6NC3OMyLdg',

   })

   console.log(JSON.stringify(push));

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
      </header>
    </div>
  );
}

export default App;
