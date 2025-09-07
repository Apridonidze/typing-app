const Redo = ( { handleRedo, input, inputRef,theme } ) => {
    return (
        <div className="redo-container container d-flex gap-3 py-3">
           
               <input className="form-control form-control-md w-25 rounded-1 border border-2 border-dark" type="text" value={input.join('')} readOnly tabIndex="-1" ref={inputRef}/>
               <button style={theme} className="btn border-2 border-dark rounded-1 " onClick={handleRedo} tabIndex="-1">Redo</button>
           
           </div>
    )
}


export default Redo