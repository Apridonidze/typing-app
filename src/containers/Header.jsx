import Timer from "../components/Timer"; //importing component from ./components
import Buttons from "../components/Buttons"; //importing component from ./components

const Header = ( {  handleGameLength, isGameStarted,isGameFinished,seconds,setSeconds,minutes,setMinutes,secondsOutput,setsecondsOutput,minutesOutput,setMinutesOutput,inTime,setInTime, btnRef, setTargetButton, theme} ) => {
    
    return (

        <div className="header-container container d d-flex flex-column pt-4" >
        
            <h1>typing-app</h1>

            <div className="container d d-flex justify-content-between align-items-center py-4  ">
                <Buttons handleGameLength={handleGameLength} btnRef={btnRef} setTargetButton={setTargetButton} theme={theme}/>
                <Timer isGameStarted={isGameStarted} isGameFinished={isGameFinished} seconds={seconds} setSeconds={setSeconds} minutes={minutes} setMinutes={setMinutes } secondsOutput={secondsOutput} setsecondsOutput={setsecondsOutput } minutesOutput={minutesOutput}  setMinutesOutput={setMinutesOutput} inTime={inTime} setInTime={setInTime} />
            </div>

        </div>
    );
};//component returns : Buttons, Timer components


export default Header; //exporting component