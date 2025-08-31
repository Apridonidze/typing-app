const buttonValues = [10, 25, 50, 60, 100];

const Buttons = ( { handleGameLength, btnRef, setTargetButton } ) => {
    return(
        <div className="buttons-container" >
            {buttonValues.map((button,buttonId) => (
                <button className="btn rounded-0 me-3" key={buttonId} onClick={() => {handleGameLength(button); setTargetButton(btnRef.current[buttonId])}} ref={(e) => {btnRef.current[buttonId] = e}}>{button}</button>
            ))}
        </div>
    )
}


export default Buttons