const Focused = ( { isFocused } ) => {
    return (
        <div className="focused-container container d-flex " style={{width: 'fit-content'}}>

            {!isFocused ? <h1>Click to Focus...</h1> : <></>}
            
        </div>
    )
}


export default Focused