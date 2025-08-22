
import Game from "./Game";



const Main = ( { words ,setIsGameFinished, setCorrectCount ,setInserted , inserted , setIncorrectCount, setIsGameStarted, isGameStarted, isWordsFetched, isFocused, setIsFocused ,divRef } ) => {


    

    return(
        <div className="main-container" ref={divRef} tabIndex={0} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} >

            Game.jsx
            
            {!isWordsFetched ? <h1>Choose Game Length...</h1> : <Game words={words} setIsGameFinished={setIsGameFinished} setCorrectCount={setCorrectCount} setInserted={setInserted}  inserted={inserted} setIncorrectCount={setIncorrectCount} setIsGameStarted={setIsGameStarted} isGameStarted={isGameStarted} isWordsFetched={isWordsFetched} isFocused={isFocused} />}

        </div>
    );
};


export default Main;