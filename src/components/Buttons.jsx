
const buttonValues = [10, 25, 50, 60, 100];

const Buttons = ( { handleGameLength, btnRef, setTargetButton } ) => {
    return(
        <div className="buttons-container" >
            {buttonValues.map((button,buttonId) => (
                <button style={{color : localStorage.getItem('color-theme')}} className="btn border-2 rounded-0 me-3" key={buttonId} onClick={() => {handleGameLength(button); setTargetButton(btnRef.current[buttonId])}} ref={(e) => {btnRef.current[buttonId] = e}} tabIndex='-1'>{button}</button>
            ))}
        </div>
    )
}


export default Buttons