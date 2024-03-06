import { useMemo, useState, useTransition } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [add , setAdd] = useState(0);
  const [sub, setSub] = useState(100);

  // without using usememo hook 
  // problem => i want to calling the fun onclick a add button but problem is the 
  // multiple fun call on sub button onclick by default calling the multiply fun 
  // solution is using useMemo hook 
  // function multiple(){
  //   console.log("00000")
  //   return add*10;
  // }

//  soution using useMemo hook
  const multiplefunction = useMemo(function multiple(){
    console.log("multiply fun is calling ");
    return add*10;
  },[add]);

  return (
    <>
      <h1>useMemo Hook</h1>
      {/* {multiple()} */}
      {multiplefunction}
      <div style={{display: "flex", gap: "55px"}}>
        <button onClick={()=> setAdd(add+ 1)}>add</button>
        <h2>{add}</h2>
      </div>
      
      <div style={{ display: "flex", gap: "55px", marginTop:"10px" }}>
        <button onClick={()=> setSub(sub - 1)}>Sub</button>
        <h2>{sub}</h2>
      </div>
    </>
  )
}

export default App
