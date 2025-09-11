import Game from "./Game";//importing component from ./containers

const Main = ( { words ,setIsGameFinished, setCorrectCount ,setInserted , inserted , setIncorrectCount, setIsGameStarted, isGameStarted, isWordsFetched, isFocused, setIsFocused ,divRef,input ,setInput,setTarget,target, correctCount, incorrectCount, fontSize} ) => {

    return(
        <div className="main-container container d-flex justify-content-center" ref={divRef} tabIndex="-1" onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)}>

            
            {!isWordsFetched ? <h1>Choose Game Length...</h1> : <Game words={words} setIsGameFinished={setIsGameFinished} setCorrectCount={setCorrectCount} setInserted={setInserted}  inserted={inserted} setIncorrectCount={setIncorrectCount} setIsGameStarted={setIsGameStarted} isGameStarted={isGameStarted} isWordsFetched={isWordsFetched} isFocused={isFocused} input={input} setInput={setInput} setTarget={setTarget} target={target} correctCount={correctCount} incorrectCount={incorrectCount} fontSize={fontSize}/>}


        </div>
        
    );
};//checks if isWordsFetched state true , if so it returns Game component else returns h1 text


export default Main;//exporting component