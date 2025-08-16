import { use, useEffect, useRef, useState } from "react";
import Words from "../components/Words";
import Input from "../components/Input";

const Game = ( { words } ) => {


    const wordRef = useRef([])
    const letterRef = useRef([])


    const [input,setInput] = useState([])
    const [inserted,setInserted] = useState([])
    const [target,setTarget] = useState(0)




  

    
// TODO :add styling for correct || incorrect words


    useEffect(() => {

        const handleInput = (e) => {

            const regex = /^[a-zA-Z]+$/


            if(e.key === 'Enter' || e.key === ' '){

                if(input.length > 0){
                    
                setInserted(inserted => [...inserted, input])
                setInput([])
                setTarget(target => target + 1)


                if(target === words.length - 1){
                    console.log('game over')
                    setTarget(target)
                    return
                }

                return
                }
                

            }else if (e.key === 'Backspace' ){


                

                if (input.length > 0){
                    setInput(input.slice(0 , -1))
                }


                if(input.length < 1){
                    setInput([])


                    if(inserted.length> 0){

                    setInserted(inserted.slice(0,-1))
                    setInput(inserted[inserted.length - 1])
                    setTarget(target => target = (inserted.length - 1))
                }


                if(target < 1){
                    setTarget(0)
                    return
                }
                

                    return
                }

                

            }else if (e.key.length > 1){
                return
            }else if (regex.test(e.key) === false){
                return
            }
            else {
                setInput(input => [...input ,e.key])



            }



            
        }


        window.addEventListener('keydown', handleInput)
        return () => {window.removeEventListener('keydown',handleInput)}

    },[input,target,inserted])

 
        useEffect(() => {

           


            const LetterValidate = () => {

                
            const inputLastLetter = letterRef.current
            const wordLastLetter = words[target][inputLastLetter.length - 1]

            //donot ise variables use directly 


            console.log(inputLastLetter.textContent, wordLastLetter)
 



        
        
        }

        return () => {LetterValidate()}

        },[letterRef,input])






    return(
        <div className="game-container">
            Game.jsx
            <Words words={words} wordRef={wordRef} />
            <Input input={input} letterRef={letterRef} />
            {'inserted' + inserted}<br />
        </div>
    );
};


export default Game;