import { useEffect, useState } from "react";

const Final = ( {correctCount ,incorrectCount, inTime, minutesOutput ,secondsOutput, minutes,seconds} ) => {

    const totalWords = incorrectCount + correctCount

    const [rawWPM, setRawWPM] = useState(0)
    const [clearWPM, setClearWPM] = useState(0)
    
    
    
    
    const rawWPMCalculator = () => {

        const secondsInMinutes = seconds / 60
        const totalTimeinMinute = minutes + secondsInMinutes
    
        setRawWPM(totalWords / totalTimeinMinute)
        setClearWPM(correctCount / totalTimeinMinute)

        }
   

    useEffect(() => {

        
        
        rawWPMCalculator()

    },[minutes, seconds, totalWords, correctCount])

     
    return(
        <div className="final-container">
            Final.jsx
            
            <span>Raw WPM:{rawWPM}</span><br />
            <span>Clear WPM: {clearWPM}</span><br />
            

            <span>Total Word Count : {totalWords}</span><br />
            <span>Correct Word Count: {correctCount}</span><br />
            <span>inCorerct Word Count :{incorrectCount}</span><br />

            {inTime ? <span>You Finished in {minutesOutput} : {secondsOutput}</span> : <span>You Did Not Make It In Time</span>}<br />

        </div>
    );

};


export default Final