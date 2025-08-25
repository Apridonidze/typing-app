import axios from "axios";

import Main from "./Main";
import Final from "./Final";
import Header from "./Header";
import Footer from "./Footer";
import Unsupported from "../components/Unsupported";


import { useEffect, useRef, useState } from "react";


const App = () => {

  //TODO : fix timer on changing gameLength
  //TODO : finish UI design 
  //TODO : add dark/light mode button to Header
  //TODO : add contact in Footer
  //TODO : change start again btn in footer with icon and add comments in Footer 
  //TODO : add text in Unsupported Component
  //TODO : make website SEO optimazed
  //TODO : cleanup code & documentate it
  //TODO : push to github
  

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



  const [userDevice, setUserDevice] = useState('')
  const [supportedDevice,setSupportedDevice] = useState(null)

  const userAgent = navigator.userAgent.toLowerCase()
  const isMobile = /iphone|ipad|ipod|android|windows phone/g.test(userAgent);
  const isTablet = /(ipad|tablet|playbook|silk)|(android(?!.*mobile))/g.test(userAgent);
  const deviceType = isMobile ? 'Mobile' : (isTablet ? 'Tablet' : 'Desktop');


  useEffect(() => {

      setUserDevice(userDevice => userDevice = deviceType)

      {userDevice !== 'Desktop' ? setSupportedDevice(true) : setSupportedDevice(false)}
    

  },[deviceType])


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
          

          {isGameFinished ? window.location.reload() : 
            setIsGameFinished(false) 
            setIsGameStarted(false)
            setSeconds(0)
            setMinutes(0)
            setsecondsOutput('00')
            setMinutesOutput('00')
        }
          


      }).catch((err) => {
        console.log("%cError :", 'background-color : #ff0000; color: white ; padding: 5px; border-radius: 20px; font-weigth: bold' , err)
      })


    }
  }

  useEffect(() => {

      handleGameLength

  },[gameLength])


  return(
    <div className="app-container">
      
      {supportedDevice ? 
        <>
          <Header handleGameLength={handleGameLength} isGameStarted={isGameStarted} isGameFinished={isGameFinished} seconds={seconds} setSeconds={setSeconds} minutes={minutes} setMinutes={setMinutes } secondsOutput={secondsOutput} setsecondsOutput={setsecondsOutput } minutesOutput={minutesOutput}  setMinutesOutput={setMinutesOutput} inTime={inTime} setInTime={setInTime}/> 
      
          {!isGameFinished ? 
      
            <Main words={words} setIsGameFinished={setIsGameFinished} setCorrectCount={setCorrectCount} setInserted={setInserted} correctCount={correctCount} inserted={inserted} setIncorrectCount={setIncorrectCount} incorrectCount={incorrectCount} setIsGameStarted={setIsGameStarted} isFocused={isFocused} setIsFocused={setIsFocused} isWordsFetched={isWordsFetched} divRef={divRef} input={input} setInput={setInput} setTarget={setTarget} target={target} /> 
      
          :
      
          <Final correctCount={correctCount} incorrectCount={incorrectCount} inTime={inTime} minutesOutput={minutesOutput} secondsOutput={secondsOutput} minutes={minutes} seconds={seconds}/> 
      
      }
      
        <Footer />
      
      </> 
      
      : <Unsupported />}
    </div>
    
  );
};


export default App;