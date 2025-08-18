const Final = ( {correctCount ,incorrectCount, inTime, minutes ,seconds} ) => {


    //TODO : calculate wpm
    return(
        <div className="final-container">
            Final.jsx
            <h1>Correct Word Count: {correctCount}</h1>
            <h1>inCorerct Word Count :{incorrectCount}</h1>

            {inTime ? <h1>You Finished in {minutes}, {seconds - 1}</h1> : <h1>You Did Not Make It In Time</h1>}
        </div>
    );

};


export default Final