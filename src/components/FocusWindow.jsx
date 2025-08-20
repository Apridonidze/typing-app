const FocusWindow = ( { isFocused } ) => {
    return (
        <div className="focus-container">
            {isFocused ? <h1>focused</h1>: <h1>notFocused</h1>}
        </div>
    )
}




export default FocusWindow