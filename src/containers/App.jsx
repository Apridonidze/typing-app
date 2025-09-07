import axios from "axios";


import Main from "./Main";
import Final from "./Final";
import Header from "./Header";
import Footer from "./Footer";

import Unsupported from "../components/Unsupported";


import { useEffect, useRef, useState } from "react";


const App = () => {


  
  //TODO : add custom text size for preferences
 
  //TODO : add contact in Footer : GitHub, Linkedin, Gmail
  //TODO : add version description if Footer
  //TODO : add text in Unsupported Component
  
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


  const [supportedDevice,setSupportedDevice] = useState(null)

  const userAgent = navigator.userAgent.toLowerCase()
  const isMobile = /iphone|ipad|ipod|android|windows phone/g.test(userAgent);
  const isTablet = /(ipad|tablet|playbook|silk)|(android(?!.*mobile))/g.test(userAgent);
  const deviceType = isMobile ? 'Mobile' : (isTablet ? 'Tablet' : 'Desktop');

  
  const darkTheme = {theme : 'dark theme',backgroundColor: 'black', color : 'white'}
  const lightTheme = {theme : 'light theme',backgroundColor : 'white', color: 'black'}
  const devTheme = {theme : 'dev theme',backgroundColor : '#1b2028', color : '#23a9d5'}
  const matrixTheme = {theme : 'matrix theme',backgroundColor : '#000000 ', color : '#15ff00'}
  const vsCodeTheme = {theme : 'vsCode theme',backgroundColor: '#1e1e1e', color : 'white'}
  const creamsicle = {theme : 'creamSicle theme',backgroundColor: '#ff9869' , color : 'white'}
  
  
  const [theme,setTheme] = useState(null)
  const themes = [darkTheme, lightTheme,devTheme,matrixTheme,vsCodeTheme,creamsicle]



  useEffect(() => {

      {deviceType !== 'Desktop' ? setSupportedDevice(false) : setSupportedDevice(true)}

  },[deviceType])

  useEffect(() => {

    setTheme(theme)

  },[])
    

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

  const handleThemeButtons = (themeObj) => {

    const targetThemeObj = {backgroundColor : themeObj.backgroundColor, color: themeObj.color}
    setTheme(theme => theme = targetThemeObj)

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

  


  return(
    <div style={theme} className="app-container container-fluid min-vh-100 d-flex flex-column justify-content-between gap-5 " >
      
      {supportedDevice ? 
      
        <>
          <Header handleGameLength={handleGameLength} isGameStarted={isGameStarted} isGameFinished={isGameFinished} seconds={seconds} setSeconds={setSeconds} minutes={minutes} setMinutes={setMinutes } secondsOutput={secondsOutput} setsecondsOutput={setsecondsOutput } minutesOutput={minutesOutput}  setMinutesOutput={setMinutesOutput} inTime={inTime} setInTime={setInTime} btnRef={btnRef} setTargetButton={setTargetButton} theme={theme}/> 
      
          {!isGameFinished ? 
      
            <Main words={words} setIsGameFinished={setIsGameFinished} setCorrectCount={setCorrectCount} setInserted={setInserted} correctCount={correctCount} inserted={inserted} setIncorrectCount={setIncorrectCount} incorrectCount={incorrectCount} setIsGameStarted={setIsGameStarted} isFocused={isFocused} setIsFocused={setIsFocused} isWordsFetched={isWordsFetched} divRef={divRef} input={input} setInput={setInput} setTarget={setTarget} target={target} theme={theme}/> 
      
          :
      
          <Final correctCount={correctCount} incorrectCount={incorrectCount} inTime={inTime} minutesOutput={minutesOutput} secondsOutput={secondsOutput} minutes={minutes} seconds={seconds}/> 
      
      }
      
        <Footer handleThemeButtons={handleThemeButtons} setTheme={setTheme} themes={themes} theme={theme} />
      
      </> 
      
      : <Unsupported />}
    </div>
    
  );
};


export default App;