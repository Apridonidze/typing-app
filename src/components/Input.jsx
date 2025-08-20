import Redo from "./Redo"
import InputLetters from "./InputLetters"

const Input = ( { input, letterRef, handleRedo }  ) => {
    return(
        <div className="input-container">
            
            <InputLetters input={input} letterRef={letterRef} />
            <Redo handleRedo={handleRedo} input={input}/>
           
        </div>
    )
}

export default Input