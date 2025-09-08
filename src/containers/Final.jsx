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

                {inTime ? <span>You Finished in <span className="text-decoration-underline">{minutesOutput} : {secondsOutput} </span></span> : <span>You Did Not Make It In Time</span>}
                <span>Raw WPM : <span className="text-decoration-underline">{rawWPM}</span></span>
                <span>Clear WPM : <span className="text-decoration-underline">{clearWPM}</span></span>

            </div>

            <div className="d-flex flex-column">


                <span>Total Word Count : <span className="text-decoration-underline">{totalWords}</span></span>
                <span>Correct Word Count: <span className="text-decoration-underline">{correctCount}</span></span>
                <span>Incorrect Word Count : <span className="text-decoration-underline">{incorrectCount}</span></span>

            </div>
 

            
        </div>
    );

};


export default Final