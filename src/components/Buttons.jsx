const Buttons = ( { handleGameLength } ) => {
    return(
        <div className="buttons-container" >
                <button onClick={() => handleGameLength(10)} tabIndex="-1">10</button>
                <button onClick={() => handleGameLength(25)} tabIndex="-1">25</button>
                <button onClick={() => handleGameLength(50)} tabIndex="-1">50</button>
                <button onClick={() => handleGameLength(100)} tabIndex="-1">100</button>
        </div>
    )
}


export default Buttons