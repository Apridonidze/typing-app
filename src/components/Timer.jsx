import { useEffect } from "react"


const Timer = ( { seconds ,setSeconds ,minutes ,setMinutes, secondsOutput, setsecondsOutput, minutesOutput,setMinutesOutput,inTime ,setInTime, isGameStarted, isGameFinished } ) => {


    
     useEffect(() => {

      let timer

      if(isGameStarted && !isGameFinished){
         timer = setInterval(() => {

       
          setSeconds(seconds => seconds + 1)


        if(seconds >= 59){
          setSeconds(0)
          setMinutes(minutes => minutes + 1)
        }

        if(minutes >= 59){
          setSeconds(seconds => seconds[seconds.length - 1])
          setMinutes(seconds => seconds[seconds.length - 1])
          console.log('you took too long to compete this game')
          setInTime(false)
          isGameFinished(true)
        }

        {seconds < 10 ? setsecondsOutput(`0${seconds}`) : setsecondsOutput(`${seconds}`)}
        {minutes < 10 ? setMinutesOutput(`0${minutes}`) : setMinutesOutput(`${minutes}`)}
        

    

        }, 1000)
      }
    
      return () => {clearInterval(timer)}


    },
    [minutes, seconds , isGameStarted, secondsOutput,minutesOutput])



    return(
        <div className="timer-container">
            {`${minutesOutput} : ${secondsOutput}`}
        </div>
    )
}




export default Timer;