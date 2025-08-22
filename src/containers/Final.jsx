import RefreshBtn from "../components/RefreshBtn";

const Final = ( {correctCount ,incorrectCount, inTime, minutesOutput ,secondsOutput} ) => {


    return(
        <div className="final-container">
            Final.jsx


            <span>Correct Word Count: {correctCount}</span>
            <span>inCorerct Word Count :{incorrectCount}</span>

            {inTime ? <span>You Finished in {minutesOutput}, {secondsOutput}</span> : <span>You Did Not Make It In Time</span>}

            {/* add WPM here  */}

            <RefreshBtn />
        </div>
    );

};


export default Final