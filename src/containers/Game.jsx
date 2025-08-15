import { useEffect, useRef, useState } from "react";
import Words from "../components/Words";

const Game = ( { words } ) => {


    const wordRef = useRef([])



    const [input,setInput] = useState('')
    const [inserted,setInserted] = useState([])




    useEffect(() => {

          console.log(wordRef.current[0].textContent);
    
    },[words])



    useEffect(() => {
        const handleInput = (e) => {

            const regex = /^[a-zA-Z]+$/


            if(e.key === 'Enter'){
                setInserted(inserted => [...inserted, input])
                setInput('')
                return
            }else if (e.key === 'Backspace'){

                setInput(input.slice(0, -1))
                return

            }else if (e.key === ' '){
                setInserted(inserted => [...inserted, input])
                setInput('')
                return
            }else if (e.key > 1){
                return
            }else if (regex.test(e.key) === false){
                return
            }
            else {
                setInput(input => input + e.key)

            }




            
        }
        


        window.addEventListener('keydown', handleInput)
        return () => {window.removeEventListener('keydown',handleInput)}

    },[input])

 

    return(
        <div className="game-container">
            Game.jsx
            <Words words={words} wordRef={wordRef}/>
            {"input" + input}<br />
            {'inserted' + inserted}<br />
        </div>
    );
};


export default Game;