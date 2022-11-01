import React, { useEffect, useRef, useState } from 'react'

export const Timer = () => {
////////////////////////////STATES\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const [seconds, setSeconds] = useState(0)

const [randomInput, setRandomInput] = useState("")

const [minutes, setMinutes] = useState(0)

const [hours, setHours] = useState(0)

const renders = useRef(0)

const timerId = useRef(0)

///////////////////////////////USEFFECT\\\\\\\\\\\\\\\\\\\\\\\\\\\
useEffect(()=>{
  if(seconds>59){
    setSeconds(0)
    setMinutes(minutes+1)
  }
  if(minutes>59){
    setMinutes(0)
    setHours(hours+1)
  }
})


////////////////////////////HANDLE CHANGE\\\\\\\\\\\\\\\\\\\\\\\\\\
const handleChange = (e) => {
  setRandomInput(e.target.value)
  renders.current++
}
/////////////////////Start Timer\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const startTimer = () => {
  timerId.current = setInterval(()=>{
    renders.current++
    setSeconds(prev=>prev+1)
  },0)
}


//////////////////////////STOP BUTTON\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ 
const stopTimer = ()=>{
  clearInterval(timerId.current)
  timerId.current = 0;
}



///////////////////////////////////RESET BUTTON\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const resetTimer = () => {
  stopTimer()
  if(seconds){
    renders.curent++;
    setSeconds(0);
  }
  if(minutes){
    renders.curent++;
    setMinutes(0);
  }
  if(hours){
    renders.curent++;
    setHours(0);
  }
}




  return (
   
  <main className='App'>
    <input type="text" value={randomInput} placeholder="Random Input" onChange={handleChange}/>
    <p>Renders:{renders.current}</p>
    <h1>Timer</h1>
    <p>{hours}:{minutes}:{seconds}</p>
    <br></br>
    <section>
    <button onClick={startTimer}>Start</button>
    <button onClick={stopTimer} disabled={seconds===0 && minutes===0}>Stop</button>
    <button onClick={resetTimer} disabled={seconds===0 && minutes===0}>Reset</button>
    </section>
    <br></br>
    <p>{randomInput}</p>
  </main>  )
}