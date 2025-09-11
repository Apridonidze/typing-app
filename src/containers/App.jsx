import axios from "axios"; //importing axios package
import { useEffect, useRef, useState } from "react"; //importing react hook


import Main from "./Main"; //importing component form ./containers
import Final from "./Final"; //importing component form ./containers
import Header from "./Header"; //importing component form ./containers
import Footer from "./Footer"; //importing component form ./containers
import Versions from "./Versions"; //importing component form ./containers
import Theme from "./Theme"; //importing component form ./containers 

import Unsupported from "../components/Unsupported"; //importing component ./components


const App = () => {

  
  const divRef = useRef(null); //ref for divs
  const btnRef = useRef([null]); //ref for buttons in Header.jsx


  const [targetButton, setTargetButton] = useState(null); //sets target button from Header.jsx

  const [isFocused, setIsFocused] = useState(false); //sets if user is focused on text
  const [isWordsFetched, setIsWordFetched] = useState(false); //sets if word is fetched and displays result in Main.jsx


  const [inserted,setInserted] = useState([]); //inserted words statte
  const [words,setWords] = useState(['']); //words to type state
  const [gameLength, setGameLength] = useState(null); //game length state based on how many words user has to type
  const [input,setInput] = useState([]); //input state
  const [target,setTarget] = useState(0); //index for inserted array
  
  const [correctCount,setCorrectCount] = useState(0); //correct word count state
  const [incorrectCount,setIncorrectCount] = useState(0); //incorrect wrod count state
  
  const [isGameFinished, setIsGameFinished] = useState(false); //state for game to see if its finished or not
  const [isGameStarted, setIsGameStarted] = useState(false); //state for game to see if its started or not

  const [seconds,setSeconds] = useState(0);//seconds for timer
  const [minutes, setMinutes] = useState(0); //minutes for timer
  const [secondsOutput, setsecondsOutput] = useState('00'); //seconds output for Timer.jsx
  const [minutesOutput, setMinutesOutput] = useState('00');//minutes output for Timer.jsx
  const [inTime,setInTime] = useState(true); //state to seee if game is finished in time or not (if you type more than 1 hour it will be set to false)


  
  const [supportedDevice,setSupportedDevice] = useState(null); //sets boolean if user has supported  device or not
  const userAgent = navigator.userAgent.toLowerCase(); //calling userAgent
  const isMobile = /iphone|ipad|ipod|android|windows phone/g.test(userAgent); //checking if user has mobile device
  const isTablet = /(ipad|tablet|playbook|silk)|(android(?!.*mobile))/g.test(userAgent); //checking if user has tablet device
  const deviceType = isMobile ? 'Mobile' : (isTablet ? 'Tablet' : 'Desktop'); //sets deviceType to : Mobile || Tablet || Dekstop 

  
  const [fontSize, setFontSize] = useState(' '); // empty string state for font size
  
  const [theme,setTheme] = useState(' '); //empty string state for theme
  const [themeTxt,setThemeTxt] = useState(' '); //empty string state for theme name
  const [toggleTheme, setToggleTheme] = useState(false); //boolean state for Theme.jsx (it will be displayed if toggleTheme === true)

  const [toggleVersions, setToggleVersions] = useState(false); //boolean state for Versions.jsx (it will be displayed if toggleVersion === true)

  useEffect(() => {

      {deviceType !== 'Desktop' ? setSupportedDevice(false) : setSupportedDevice(true)};

  },[deviceType]); //sets setSupportedDevice to false/true based on deviceType variable (this function mount on deviceType change)



  const handleGameLength = (e) => {
  
    const API_URL = 'http://localhost:8080/words' //API_URL 

    
    if(e) { //checks if user pressed game length buttons in Header.jsx and commits function

      localStorage.setItem('game-length', e)
      
      axios
      .get(API_URL)
      .then((resp) => {
        
        const data = resp.data; //raw data
        const shuffledArray = [...data].sort(() => Math.random() - 0.5); //suffles data variable
        const slicedArray = shuffledArray.slice(0, localStorage.getItem('game-length')) //slices data based on 
          
        setWords(slicedArray) //sets slicedArray to setWords state (words to type) 
        setIsWordFetched(true) //sets isWordsFetched state to true so game  will be displayed
        setInput([]) //clears input state
        setInserted([]) //clears inserted state
          

        if(isGameFinished )window.location.reload();
        else setIsGameFinished(false); setIsGameStarted(false); setSeconds(0); setMinutes(0);setsecondsOutput('00');setMinutesOutput('00'); //chekcs if game is finished , if so page will be refreshed else clears states
          
      }).catch((err) => {
        console.log("%cError :", 'background-color : #ff0000; color: white ; padding: 5px; border-radius: 20px; font-weigth: bold' , err);
      }); //catches axios error and console.logs its in console

    };

  };
  
  const handleTextSize = (textSize) => {
    
    setFontSize(fontSize => fontSize= textSize);//sets textSize to state

    if(textSize && fontSize)localStorage.setItem('text-size', textSize); //sets textSize in localstorage
   
  }; //function gets textSize from TextSize.jsx and sets it in state, later it is saved in localstorage to save user preferences locally
  

  const handleThemeButtons = (themeObj) => {

    const targetThemeObj = {backgroundColor : themeObj.backgroundColor, color: themeObj.color}; //
    const themeName = {theme : themeObj.theme};

    setTheme(theme => theme = targetThemeObj);
    setThemeTxt(themeTxt => themeTxt = themeName);

    if(theme && themeName) localStorage.setItem('background-theme', targetThemeObj.backgroundColor); localStorage.setItem('color-theme', targetThemeObj.color);localStorage.setItem('text-theme', themeName.theme);

    
  };//function gets themeObj from ThemeButtons.jsx and sets it in state, later it is saved in localstorage to save user preferences locally (values are stored in objects so its easier style app)

  const handleTargetButton = () => {

    if (targetButton) {

    btnRef.current.forEach((btn) => {
      if (btn) btn.classList.remove("border-bottom");
    });

    targetButton.classList.add("border-bottom");
  }


  }
  useEffect(() => {

    handleThemeButtons; //calling handleThemeButtons function in useEffect
    handleTextSize; //calling handleTextSize function in useEffect
    handleGameLength;//calling handleGameLength function in useEffect
    handleTargetButton;//calling handleTargetButton function in useEffect

  },[theme,fontSize,gameLength,targetButton]);//This functions are declead in useEffect so they will mount when theme, fontSize variables are changed an not when page mounts




 
  return(

    <div  style={{backgroundColor : localStorage.getItem('background-theme') , color : localStorage.getItem('color-theme')}}  className="app-container container-fluid d-flex flex-column justify-content-between min-vh-100" >
      
      {supportedDevice ? 
      
        <>
         
         {toggleTheme ? <Theme handleThemeButtons={handleThemeButtons} setTheme={setTheme} theme={theme} handleTextSize={handleTextSize} /> : toggleVersions ?  <Versions /> :
         
         
         <>
         
         <Header handleGameLength={handleGameLength} isGameStarted={isGameStarted} isGameFinished={isGameFinished} seconds={seconds} setSeconds={setSeconds} minutes={minutes} setMinutes={setMinutes } secondsOutput={secondsOutput} setsecondsOutput={setsecondsOutput } minutesOutput={minutesOutput}  setMinutesOutput={setMinutesOutput} inTime={inTime} setInTime={setInTime} btnRef={btnRef} setTargetButton={setTargetButton} theme={theme}/> 
      
          {!isGameFinished ? 
      
            <Main words={words} setIsGameFinished={setIsGameFinished} setCorrectCount={setCorrectCount} setInserted={setInserted} correctCount={correctCount} inserted={inserted} setIncorrectCount={setIncorrectCount} incorrectCount={incorrectCount} setIsGameStarted={setIsGameStarted} isFocused={isFocused} setIsFocused={setIsFocused} isWordsFetched={isWordsFetched} divRef={divRef} input={input} setInput={setInput} setTarget={setTarget} target={target} theme={theme} fontSize={fontSize}/> 
      
          :
      
        <Final correctCount={correctCount} incorrectCount={incorrectCount} inTime={inTime} minutesOutput={minutesOutput} secondsOutput={secondsOutput} minutes={minutes} seconds={seconds}/> 
        
        }
      
      </>
      
      }
      
      
      
        <Footer handleThemeButtons={handleThemeButtons} setTheme={setTheme}  theme={theme} themeTxt={themeTxt} setToggleTheme={setToggleTheme} setToggleVersions={setToggleVersions} toggleTheme={toggleTheme}/>
      
      </> 
      
      : <Unsupported />}
    </div>
    
  );
};
//component is styled based on user's prefetences
//component checks if user has supported device ,if so it returns : Header , Main , Footer components ,else it returns Unsupported component
//component also checks if toggleTheme is true , if so it returns Theme component in place of Header and Main component

export default App;//exporting component