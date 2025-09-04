import axios from "axios";

import Main from "./Main";
import Final from "./Final";
import Header from "./Header";
import Footer from "./Footer";
import Unsupported from "../components/Unsupported";


import { useEffect, useRef, useState } from "react";


const App = () => {


  //TODO : add styling for input (if input === targeword make input success else danger)
  //TODO : fix underline for last letters 
  //TODO : add custom text size for preferences
  //TODO : rewrite styling variables (line 118-123) wiht bootstrap styling and create text color for buttons in header when theme changes {use objects exl: const darkTheme = {theme : 'dark', btnColor : 'text-info'}}

  //TODO : add contact in Footer : GitHub, Linkedin, Gmail
  //TODO : add version description if Footer
  //TODO : add text in Unsupported Component
  
  //TODO : fix padding/ margin y so poage wont be scrollable
  //TODO : finish UI design 
  //TOPO : add styling for left letters and incorrect letters
  
  //TODO : cleanup code & documentate it
  //TODO : make website SEO optimazed
  //TODO : push to github
  
  const divRef = useRef(null)
  const btnRef = useRef([null])

  const [targetButton, setTargetButton] = useState(null)

  const [isFocused, setIsFocused] = useState(false)
  const [isWordsFetched, setIsWordFetched] = useState(false)


  const [words,setWords] = useState([''])
  const [gameLength, setGameLength] = useState(null);
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

      {deviceType !== 'Desktop' ? setSupportedDevice(false) : setSupportedDevice(true)}
    

  },[deviceType])


  useEffect(() => {

      setCorrectCount(correctCount)
      setIncorrectCount(incorrectCount)
      setIsGameStarted(isGameStarted)
      setIsGameFinished(isGameFinished)
      setIsFocused(isFocused)
      setTargetButton(targetButton)
      

  },[correctCount,incorrectCount,isGameStarted, isGameFinished, isFocused,targetButton])
 
  
    

    

  const handleGameLength = (e) => {
  
    const API_URL = 'http://localhost:8080/words'

    
    if(e) {
      const value = e;

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

  const handleTargetButton = () => {

    if (targetButton) {

    btnRef.current.forEach((btn) => {
      if (btn) btn.classList.remove("border-bottom");
    });

    targetButton.classList.add("border-bottom");
  }


  }


  useEffect(() => {

    handleGameLength(gameLength)
    handleTargetButton(targetButton)

  },[gameLength,targetButton])

  const darkTheme = {backgroundColor: 'black', color : 'white'}
  const lightTheme = {backgroundColor : 'white', color: 'black'}
  const devTheme = {backgroundColor : '#1b2028', color : '#23a9d5'}
  const matrixTheme = {backgroundColor : '#000000 ', color : '#15ff00'}
  const vsCodeTheme = {backgroundColor: '#1e1e1e', color : 'white'}
  const creamsicle = {backgroundColor: '#ff9869' , color : 'white'}

  return(
    <div style={devTheme} className="app-container container-fluid min-vh-100 d-flex flex-column justify-content-between gap-5 " >
      
      {supportedDevice ? 
      
        <>
          <Header handleGameLength={handleGameLength} isGameStarted={isGameStarted} isGameFinished={isGameFinished} seconds={seconds} setSeconds={setSeconds} minutes={minutes} setMinutes={setMinutes } secondsOutput={secondsOutput} setsecondsOutput={setsecondsOutput } minutesOutput={minutesOutput}  setMinutesOutput={setMinutesOutput} inTime={inTime} setInTime={setInTime} btnRef={btnRef} setTargetButton={setTargetButton}/> 
      
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