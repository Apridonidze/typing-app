import { useEffect, useState } from "react"; //importing hooks

const Final = ( {correctCount ,incorrectCount, inTime, minutesOutput ,secondsOutput, minutes,seconds} ) => {

    const totalWords = incorrectCount + correctCount; //counts total words
    
    const [rawWPM, setRawWPM] = useState(0); //state for rawWPM
    const [clearWPM, setClearWPM] = useState(0); //state for clearWPM
    
    useEffect(() => {

        const totalWords = incorrectCount + correctCount; //counts total words
        
        const secondsInMinutes = seconds / 60; //transforms seconds in minutes
        const totalTimeinMinute = minutes + secondsInMinutes; //transforms whole time in minutes

        setRawWPM(rawWPM => rawWPM = Math.floor(totalWords / totalTimeinMinute)); //calculates and sets raw WPM in setRawWPM state
        setClearWPM(clearWPM => clearWPM = Math.floor(correctCount / totalTimeinMinute));//calculates and sets clear WPM in setClearWPM state

    },[]);//wpm is calculated once component is rendered

     
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

}; //component returns : if user finished typing in time , Raw WPM && Clear WPM , Total Word Count , Correct Word Count and InCorrect Word Count


export default Final; //exporting component