import React, { useEffect, useRef, useState } from 'react'

export const Timer = () => {

const [seconds, setSeconds] = useState(0)

const [randomInput, setRandomInput] = useState("")

const [minutes, setMinutes] = useState(0)


const renders = useRef(0)

const timerId = useRef(0)


useEffect(()=>{
  if(seconds>59){
    setSeconds(0)
    setMinutes(minutes+1)
  }
})

const handleChange = (e) => {
  setRandomInput(e.target.value)
  renders.current++
  
}

const startTimer = () => {
  
  timerId.current = setInterval(()=>{
    renders.current++
    setSeconds(prev=>prev+1)
  },10)
  
}

const stopTimer = ()=>{
  clearInterval(timerId.current)
  timerId.current = 0;
}

const resetTimer = () => {
  stopTimer()
  if(seconds){
    renders.curent++;
    setSeconds(0);
  }
}

  return (
   
  <main className='App'>
    <input type="text" value={randomInput} placeholder="Random Input" onChange={handleChange}/>
    <p>Renders:{renders.current}</p>
    <h1>Timer</h1>
    <p>{minutes}:{seconds}</p>
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