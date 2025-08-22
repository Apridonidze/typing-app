const Redo = ( { handleRedo, input } ) => {
    return (
        <div className="redo-container">
           
               <input type="text" value={input.join('')} readOnly tabIndex="-1" />
               <button onClick={handleRedo} tabIndex="-1">Redo</button>
           
           </div>
    )
}


export default Redo