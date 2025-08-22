
const Final = ( {correctCount ,incorrectCount, inTime, minutesOutput ,secondsOutput, minutes,seconds} ) => {



    const totalWords = incorrectCount + correctCount


    return(
        <div className="final-container">
            Final.jsx


            <span>Total Word Count : {totalWords}</span><br />
            <span>Correct Word Count: {correctCount}</span><br />
            <span>inCorerct Word Count :{incorrectCount}</span><br />

            {inTime ? <span>You Finished in {minutesOutput} : {secondsOutput}</span> : <span>You Did Not Make It In Time</span>}<br />

        </div>
    );

};


export default Final