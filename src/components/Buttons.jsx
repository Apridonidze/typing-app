const Buttons = ( { handleGameLength, btnRef } ) => {
    return(
        <div className="buttons-container" >
                <button onClick={() => handleGameLength(10)} tabIndex="-1" ref={() => {btnRef.current[0]}}>10</button>
                <button onClick={() => handleGameLength(25)} tabIndex="-1" ref={() => {btnRef.current[1]}}>25</button>
                <button onClick={() => handleGameLength(50)} tabIndex="-1" ref={() => {btnRef.current[1]}}>50</button>
                <button onClick={() => handleGameLength(60)} tabIndex="-1" ref={() => {btnRef.current[1]}}>60</button>
                <button onClick={() => handleGameLength(100)} tabIndex="-1" ref={() => {btnRef.current[1]}}>100</button>
        </div>
    )
}


export default Buttons