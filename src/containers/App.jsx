import axios from "axios";

import Main from "./Main";
import Final from "./Final";
import Header from "./Header";
import Footer from "./Footer";

import { useEffect, useRef, useState } from "react";


const App = () => {

  //TODO : finish UI design 
  
  //TODO : add screen for tables and mobiles so they cant play

  //TODO : add error page & display axios error 

  const divRef = useRef(null)

  const [isFocused, setIsFocused] = useState(false)
  const [isWordsFetched, setIsWordFetched] = useState(false)

  const [words,setWords] = useState([''])
  const [gameLength, setGameLength] = useState(25);
  const [isGameFinished, setIsGameFinished] = useState(false)
  const [isGameStarted, setIsGameStarted] = useState(false)
  const [input,setInput] = useState([])
  const [target,setTarget] = useState(0)
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
      setIsFocused(isFocused)


    },[correctCount,incorrectCount,isGameStarted, isGameFinished, isFocused])
 
    
const handleGameLength = (e) => {

  
    const API_URL = 'http://localhost:8080/words'


      if(e){
        const value = e
        setGameLength(value || 25)

         axios
         .get(API_URL)
         .then((resp) => {
          
          const data = resp.data
          const shuffledArray = [...data].sort(() => Math.random() - 0.5);
          const slicedArray = shuffledArray.slice(0, value)
          
          setWords(slicedArray)
          setIsWordFetched(true)
          setInput([])
          setInserted([])
          


          if(isGameFinished){
            window.location.reload()
          }


      }).catch((err) => {
        console.log(err) //set error in setError
      })


    }
    }

    useEffect(() => {

      handleGameLength

    },[gameLength])


  return(
    <div className="app-container">

      <Header handleGameLength={handleGameLength} isGameStarted={isGameStarted} isGameFinished={isGameFinished} seconds={seconds} setSeconds={setSeconds} minutes={minutes} setMinutes={setMinutes } secondsOutput={secondsOutput} setsecondsOutput={setsecondsOutput } minutesOutput={minutesOutput}  setMinutesOutput={setMinutesOutput} inTime={inTime} setInTime={setInTime}/> 

{!isGameFinished ? <Main words={words} setIsGameFinished={setIsGameFinished} setCorrectCount={setCorrectCount} setInserted={setInserted} correctCount={correctCount} inserted={inserted} setIncorrectCount={setIncorrectCount} incorrectCount={incorrectCount} setIsGameStarted={setIsGameStarted} isFocused={isFocused} setIsFocused={setIsFocused} isWordsFetched={isWordsFetched} divRef={divRef} input={input} setInput={setInput} setTarget={setTarget} target={target} /> 
 : <Final correctCount={correctCount} incorrectCount={incorrectCount} inTime={inTime} minutesOutput={minutesOutput} secondsOutput={secondsOutput} minutes={minutes} seconds={seconds}/>}
 
 <Footer />
    </div>
    
  );
};


export default App;