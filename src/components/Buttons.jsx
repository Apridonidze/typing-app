const Buttons = ( { handleGameLength } ) => {
    return(
        <div className="buttons-container">
                <button onClick={() => handleGameLength(10)}>10</button>
                <button onClick={() => handleGameLength(25)}>25</button>
                <button onClick={() => handleGameLength(50)}>50</button>
                <button onClick={() => handleGameLength(100)}>100</button>
        </div>
    )
}


export default Buttons