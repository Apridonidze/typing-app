const Input = ( { input, letterRef }  ) => {
    return(
        <div className="input-container">
            {input.map((letter,letterId) => (
                
                <span className="mx-1 text-primary" key={letterId} ref={e => (letterRef.current[letterId] = e)}>{letter}</span>
            ))}
        </div>
    )
}

export default Input