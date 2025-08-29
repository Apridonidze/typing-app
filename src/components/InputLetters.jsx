const InputLetters = ( { input , letterRef } ) => {
    return(

        <div className="inputs">
           
                {input.map((letter,letterId) => (
                
                    <span key={letterId} ref={e => (letterRef.current[letterId] = e)}>{letter}</span>
                
                ))}
           
        </div>

    );
};

export default InputLetters;