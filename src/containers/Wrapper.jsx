import Words from "../components/Words"
import Inserted from "../components/Inserted"
import Input from "../components/Input"

const Wrapper = ( { words, wordRef, inserted, input,letterRef,targetLetter,handleRedo, isFocused} ) => {

    return(
        <div className="wrapper-container container py-2" style={!isFocused ? {filter : 'blur(5px)'} : {filter : 'blur(0px)'}}>
            <Words words={words} wordRef={wordRef} />
            <Inserted  inserted={inserted}/>
            <Input input={input} letterRef={letterRef} targetLetter={targetLetter}  handleRedo={handleRedo} />  
        </div>
    )
}


export default Wrapper