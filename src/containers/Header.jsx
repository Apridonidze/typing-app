import Timer from "../components/Timer";
import Buttons from "../components/Buttons";

const Header = ( {  handleGameLength, isGameStarted,isGameFinished,seconds,setSeconds,minutes,setMinutes,secondsOutput,setsecondsOutput,minutesOutput,setMinutesOutput,inTime,setInTime, btnRef} ) => {
    return (
        <div className="header-container" >
            <h1>typing-app</h1>

            <div className="row">
                <Buttons handleGameLength={handleGameLength} btnRef={btnRef}/>
                <Timer isGameStarted={isGameStarted} isGameFinished={isGameFinished} seconds={seconds} setSeconds={setSeconds} minutes={minutes} setMinutes={setMinutes } secondsOutput={secondsOutput} setsecondsOutput={setsecondsOutput } minutesOutput={minutesOutput}  setMinutesOutput={setMinutesOutput} inTime={inTime} setInTime={setInTime} />
            </div>

        </div>
    )
}


export default Header