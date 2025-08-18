const Input = ( { input, letterRef, handleRedo }  ) => {
    return(
        <div className="input-container">
            
            <div className="input">
           
                {input.map((letter,letterId) => (
                
                    <span className=" text-primary" key={letterId} ref={e => (letterRef.current[letterId] = e)}>{letter}</span>
                
                ))}
           
            </div>

           <div className="input-fields">
           
               <input type="text" value={input.join('')} readOnly/>
               <button onClick={handleRedo}>Redo</button>
           
           </div>
        </div>
    )
}

export default Input