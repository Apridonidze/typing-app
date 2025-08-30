const buttonValues = [10, 25, 50, 60, 100];

const Buttons = ( { handleGameLength, btnRef } ) => {
    return(
        <div className="buttons-container" >
            {buttonValues.map((button,buttonId) => (
                <button className="btn text-info" key={buttonId}>{button}</button>
            ))}
        </div>
    )
}


export default Buttons