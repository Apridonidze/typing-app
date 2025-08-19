import Game from "./Game";
import Final from "./Final";
import Timer from "../components/Timer";
import Header from "../components/Header";

import { useEffect, useReducer, useRef, useState } from "react";
import axios from "axios";

const App = () => {

  //TODO : Finish Header.jsx
  //TODO : create footer component (with refresh button and comments)
  //TODO : finish UI design 


  //TODO : add screen for tables and mobiles so they cant play
  


  const [words,setWords] = useState([''])
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
 




  useEffect(() => {

    const API_URL = 'http://localhost:8080/words'

    const fetchWords = () => {

      axios
      .get(API_URL)
      .then((resp) => {

        const data = resp.data
        const shuffledArray = [...data].sort(() => Math.random() - 0.5);
        const slicedArray = shuffledArray.slice(0, 10)


        setWords(slicedArray)

      })
      .catch((err) => {
        console.log(err)
      })

    }

    return () => {fetchWords()}

  },[])


  return(
    <div className="app-container">
      App.jsx
      <Header />

{!isGameFinished ? <Game words={words} setIsGameFinished={setIsGameFinished} setCorrectCount={setCorrectCount} setInserted={setInserted} correctCount={correctCount} inserted={inserted} setIncorrectCount={setIncorrectCount} incorrectCount={incorrectCount} setIsGameStarted={setIsGameStarted} /> 
 : <Final correctCount={correctCount} incorrectCount={incorrectCount} inTime={inTime} minutesOutput={minutesOutput} secondsOutput={secondsOutput}/>}
    
    <Timer isGameStarted={isGameStarted} isGameFinished={isGameFinished} seconds={seconds} setSeconds={setSeconds} minutes={minutes} setMinutes={setMinutes } secondsOutput={secondsOutput} setsecondsOutput={setsecondsOutput } minutesOutput={minutesOutput}  setMinutesOutput={setMinutesOutput} inTime={inTime} setInTime={setInTime} />
    </div>
    
  );
};


export default App