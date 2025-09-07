import { useEffect, useState } from "react";

const Final = ( {correctCount ,incorrectCount, inTime, minutesOutput ,secondsOutput, minutes,seconds} ) => {

    const totalWords = incorrectCount + correctCount

    const [rawWPM, setRawWPM] = useState(0)
    const [clearWPM, setClearWPM] = useState(0)
    
    
    
    
    const rawWPMCalculator = () => {

        const secondsInMinutes = seconds / 60
        const totalTimeinMinute = minutes + secondsInMinutes
    
        setRawWPM(Math.floor(totalWords / totalTimeinMinute))
        setClearWPM(Math.floor(correctCount / totalTimeinMinute))

        }
   

    useEffect(() => {

        
        
        rawWPMCalculator()

    },[minutes, seconds, totalWords, correctCount])

     
    return(
        <div className="final-container container fs-3 d-flex justify-content-evenly gap-1">
            
           
            <div className="d-flex flex-column">

                {inTime ? <span>You Finished in {minutesOutput} : {secondsOutput}</span> : <span>You Did Not Make It In Time</span>}
                <span>Raw WPM :{rawWPM}</span>
                <span>Clear WPM :{clearWPM}</span>

            </div>

            <div className="d-flex flex-column">


                <span>Total Word Count : {totalWords}</span>
                <span>Correct Word Count: {correctCount}</span>
                <span>Incorrect Word Count :{incorrectCount}</span>

            </div>
 

            
        </div>
    );

};


export default Final