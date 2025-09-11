import { useEffect } from "react"; //importing hook


const Timer = ( { seconds ,setSeconds ,minutes ,setMinutes, secondsOutput, setsecondsOutput, minutesOutput,setMinutesOutput ,setInTime, isGameStarted, isGameFinished } ) => {
  
  
  useEffect(() => {
    
    let timer;

    if(isGameStarted && !isGameFinished){
      
      timer = setInterval(() => {
        
        setSeconds(seconds => seconds + 1); //adds 1 to seconds in every 1 second

        if(seconds >= 59){
          setSeconds(0);
          setMinutes(minutes => minutes + 1);
        };//if seconds is 59, seconds will be set to zero and minutes will increase by one

        if(minutes >= 59){
          setSeconds(seconds => seconds[seconds.length - 1]);
          setMinutes(seconds => seconds[seconds.length - 1]);
          
          setInTime(false);
          isGameFinished(true);
        }//if minutes is 59 or more, game will set setInTime state false and Final.jsx will be appear on screen that will alert you that you did not finish in time

        {seconds < 10 ? setsecondsOutput(`0${seconds}`) : setsecondsOutput(`${seconds}`)};//if seconds is less than 10 it returns seconds with zero at start
        {minutes < 10 ? setMinutesOutput(`0${minutes}`) : setMinutesOutput(`${minutes}`)};//if minutes is less than 10 it returns minutes with zero at start
        

    

        }, 1000); //function updates every 1 second

      };
    
      return () => {clearInterval(timer)}; //calls cleanup function


    },[minutes, seconds , isGameStarted, secondsOutput,minutesOutput]); //useEffect that updates after dependencies changes

    return(

        <div className="timer-container">

            {`${minutesOutput} : ${secondsOutput}`}

        </div>

    );
}; //displays minutes and seconds

export default Timer; //exporting component