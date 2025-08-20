const Redo = ( { handleRedo, input } ) => {
    return (
        <div className="redo-container">
           
               <input type="text" value={input.join('')} readOnly/>
               <button onClick={handleRedo}>Redo</button>
           
           </div>
    )
}


export default Redo