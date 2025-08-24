
import Game from "./Game";

const Main = ( { words ,setIsGameFinished, setCorrectCount ,setInserted , inserted , setIncorrectCount, setIsGameStarted, isGameStarted, isWordsFetched, isFocused, setIsFocused ,divRef,input ,setInput,setTarget,target} ) => {


    

    return(
        <div className="main-container container border border-1 rounded-1 p-2" ref={divRef} tabIndex="-1" onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)}>

            
            {!isWordsFetched ? <h1>Choose Game Length...</h1> : <Game words={words} setIsGameFinished={setIsGameFinished} setCorrectCount={setCorrectCount} setInserted={setInserted}  inserted={inserted} setIncorrectCount={setIncorrectCount} setIsGameStarted={setIsGameStarted} isGameStarted={isGameStarted} isWordsFetched={isWordsFetched} isFocused={isFocused} input={input} setInput={setInput} setTarget={setTarget} target={target}/>}


        </div>
        
    );
};


export default Main;