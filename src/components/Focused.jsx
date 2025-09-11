const Focused = ( { isFocused } ) => {

    return (

        <div className="focused-container container d-flex " style={{width: 'fit-content'}}>

            {!isFocused ? <h1 className="fs-3"><i className="fa-solid fa-arrow-pointer fs-5"></i> Click here to focus...</h1> : <></>}
            
        </div>

    );
}; //checks if user is focused on text if not returns click here to focus text


export default Focused; //exporting component