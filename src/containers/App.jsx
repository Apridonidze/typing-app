import Game from "./Game";
import Final from "./Final";
import Header from "../components/Header";

import { useEffect, useReducer, useRef, useState } from "react";
import axios from "axios";

const App = () => {

  //TODO : Finish Header.jsx
  //TODO : create footer component (with refresh button and comments)
  //TODO : finish UI design 


  //TODO : add screen for tables and mobiles so they cant play
  


  const [words,setWords] = useState([''])
  const [gameLength, setGameLength] = useState(25);
  const [isGameFinished, setIsGameFinished] = useState(false)
  const [isGameStarted, setIsGameStarted] = useState(false)
  const [inserted,setInserted] = useState([])

    const [correctCount,setCorrectCount] = useState(0)
    const [incorrectCount,setIncorrectCount] = useState(0)


    const [seconds,setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [secondsOutput, setsecondsOutput] = useState('00')
    const [minutesOutput, setMinutesOutput] = useState('00')
    const [inTime,setInTime] = useState(true)


    useEffect(() => {

      setCorrectCount(correctCount)
      setIncorrectCount(incorrectCount)
      setIsGameStarted(isGameStarted)
      setIsGameFinished(isGameFinished)


    },[correctCount,incorrectCount,isGameStarted, isGameFinished])
 
    
const handleGameLength = (e) => {

  
    const API_URL = 'http://localhost:8080/words'


      if(e){
        const value = e 
        setGameLength(value)

         axios
      .get(API_URL)
      .then((resp) => {

        const data = resp.data
        const shuffledArray = [...data].sort(() => Math.random() - 0.5);
        const slicedArray = shuffledArray.slice(0, value || 25)


        setWords(slicedArray)

      })
      .catch((err) => {
        console.log(err)
      })


    }
    }

    useEffect(() => {

      handleGameLength

    },[gameLength])





  return(
    <div className="app-container">

      <Header handleGameLength={handleGameLength} isGameStarted={isGameStarted} isGameFinished={isGameFinished} seconds={seconds} setSeconds={setSeconds} minutes={minutes} setMinutes={setMinutes } secondsOutput={secondsOutput} setsecondsOutput={setsecondsOutput } minutesOutput={minutesOutput}  setMinutesOutput={setMinutesOutput} inTime={inTime} setInTime={setInTime}/> 

{!isGameFinished ? <Game words={words} setIsGameFinished={setIsGameFinished} setCorrectCount={setCorrectCount} setInserted={setInserted} correctCount={correctCount} inserted={inserted} setIncorrectCount={setIncorrectCount} incorrectCount={incorrectCount} setIsGameStarted={setIsGameStarted} /> 
 : <Final correctCount={correctCount} incorrectCount={incorrectCount} inTime={inTime} minutesOutput={minutesOutput} secondsOutput={secondsOutput}/>}
    
    </div>
    
  );
};


export default App