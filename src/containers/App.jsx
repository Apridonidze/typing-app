import axios from "axios";


import Main from "./Main";
import Final from "./Final";
import Header from "./Header";
import Footer from "./Footer";

import Theme from "./Theme";
import Unsupported from "../components/Unsupported";


import { useEffect, useRef, useState } from "react";


const App = () => {


  //TODO : change incorrect letters background to target background color , change left letters color 
  //TODO : add custom text size for preferences in theme
  //TODO : finish theme component styling
 
  //TODO : add contact in Footer : GitHub, Linkedin, Gmail
  //TODO : add version description if Footer (create component that appends when desc button is clicked)
  //TODO : add text in Unsupported Component ("in our current version your device is not supported")
  
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

  
  
  
  const [theme,setTheme] = useState(' ')
  const [themeTxt,setThemeTxt] = useState(' ')
  const [toggleTheme, setToggleTheme] = useState(false)

  useEffect(() => {

      {deviceType !== 'Desktop' ? setSupportedDevice(false) : setSupportedDevice(true)}

  },[deviceType])

    console.log(toggleTheme)

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
    const themeName = {theme : themeObj.theme}

    setTheme(theme => theme = targetThemeObj)
    setThemeTxt(themeTxt => themeTxt = themeName)

    if(theme && themeName) {
      
    localStorage.setItem('background-theme', targetThemeObj.backgroundColor)
    localStorage.setItem('color-theme', targetThemeObj.color)
    localStorage.setItem('text-theme', themeName.theme)

    }



  }

  useEffect(() => {

    handleThemeButtons

  },[theme])


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
    <div style={{backgroundColor : localStorage.getItem('background-theme') , color : localStorage.getItem('color-theme')}}  className="app-container container-fluid min-vh-100 d-flex flex-column justify-content-between gap-5 " >
      
      {supportedDevice ? 
      
        <>
         
         {toggleTheme ? <Theme handleThemeButtons={handleThemeButtons} setTheme={setTheme} theme={theme} /> : 
         
         
         <>
         
         <Header handleGameLength={handleGameLength} isGameStarted={isGameStarted} isGameFinished={isGameFinished} seconds={seconds} setSeconds={setSeconds} minutes={minutes} setMinutes={setMinutes } secondsOutput={secondsOutput} setsecondsOutput={setsecondsOutput } minutesOutput={minutesOutput}  setMinutesOutput={setMinutesOutput} inTime={inTime} setInTime={setInTime} btnRef={btnRef} setTargetButton={setTargetButton} theme={theme}/> 
      
          {!isGameFinished ? 
      
            <Main words={words} setIsGameFinished={setIsGameFinished} setCorrectCount={setCorrectCount} setInserted={setInserted} correctCount={correctCount} inserted={inserted} setIncorrectCount={setIncorrectCount} incorrectCount={incorrectCount} setIsGameStarted={setIsGameStarted} isFocused={isFocused} setIsFocused={setIsFocused} isWordsFetched={isWordsFetched} divRef={divRef} input={input} setInput={setInput} setTarget={setTarget} target={target} theme={theme}/> 
      
          :
      
        <Final correctCount={correctCount} incorrectCount={incorrectCount} inTime={inTime} minutesOutput={minutesOutput} secondsOutput={secondsOutput} minutes={minutes} seconds={seconds}/> 
        
        }
      
      </>
      
      }
      
      
        <Footer handleThemeButtons={handleThemeButtons} setTheme={setTheme}  theme={theme} themeTxt={themeTxt} setToggleTheme={setToggleTheme} toggleTheme={toggleTheme}/>
      
      </> 
      
      : <Unsupported />}
    </div>
    
  );
};


export default App;