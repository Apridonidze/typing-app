const Final = ( {correctCount ,incorrectCount, inTime, minutesOutput ,secondsOutput} ) => {


    //TODO : calculate wpm
    return(
        <div className="final-container">
            Final.jsx
            <h1>Correct Word Count: {correctCount}</h1>
            <h1>inCorerct Word Count :{incorrectCount}</h1>

            {inTime ? <h1>You Finished in {minutesOutput}, {secondsOutput}</h1> : <h1>You Did Not Make It In Time</h1>}


            {/* add start another game button here (refreshes tab) */}
        </div>
    );

};


export default Final