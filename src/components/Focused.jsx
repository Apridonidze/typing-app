const Focused = ( { isFocused } ) => {
    return (
        <div className="focused-container container">

            {!isFocused ? <h1>Click to Focus...</h1> : <></>}
            
        </div>
    )
}


export default Focused