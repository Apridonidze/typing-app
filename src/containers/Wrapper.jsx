import Words from "../components/Words"; //importing component from ./component

const Wrapper = ( { words, wordRef, inserted, input,letterRef, isFocused, insertedRef, insertedLetterRef} ) => {

    return(

        <div className={`wrapper-container container py-1 d-flex flex-column ${localStorage.getItem('text-size')}`} style={!isFocused ? {filter : 'blur(5px)'} : {filter : 'blur(0px)'}}>
            
            <Words words={words} wordRef={wordRef} />
            
            <div className="line container h-auto px-4 pt-1">
                
                {inserted.map((word,wordId) => (
                    <span className={word.className  + ' me-2'} key={wordId} ref={e => insertedRef.current[wordId] = e}>
                        {word.map((char,charId) => (
                        <span style={{backgroundColor : localStorage.getItem('background-theme')}} key={charId} className={char.className} ref={e => insertedLetterRef.current[charId] = e}>{char.text}</span>))}
                    </span>
                ))}
            
                {input.map((letter,letterId) => (
                
                    <span style={{backgroundColor : localStorage.getItem('background-theme')}} key={letterId} ref={e => (letterRef.current[letterId] = e)}>{letter}</span>
                    
                ))}
            
            </div>
        
        </div>
    );
}; //component returns : Words component , line container with mapped inserted , input states


export default Wrapper;//exporting component