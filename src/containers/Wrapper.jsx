import Words from "../components/Words"

const Wrapper = ( { words, wordRef, inserted, input,letterRef, isFocused} ) => {

    return(
        <div className="wrapper-container container h-20px d-flex flex-column " style={!isFocused ? {filter : 'blur(5px)'} : {filter : 'blur(0px)'}}>
            
            <Words words={words} wordRef={wordRef} />
            
        <div className="line container">
            
            {inserted.map((word,wordId) => (
                <span className={word.className  + ' me-2'} key={wordId}>
                    {word.map((char,charId) => (
                        <span key={charId} className={char.className}>{char.text}</span>
                    ))}
                </span>
            ))

            }
            
            {input.map((letter,letterId) => (
                
                <span key={letterId} ref={e => (letterRef.current[letterId] = e)}>{letter}</span>
            
            ))}
        

        
        </div>
        
        </div>
    )
}


export default Wrapper