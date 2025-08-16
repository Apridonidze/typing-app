import { useEffect, useRef, useState } from "react";
import Words from "../components/Words";

const Game = ( { words } ) => {


    const wordRef = useRef([])



    const [input,setInput] = useState('')
    const [inserted,setInserted] = useState([])
    const [target,setTarget] = useState(0)




    useEffect(() => {

          console.log(wordRef.current[0].textContent);
    
    },[words])



    
// TODO : fix word[target] problem
// TODO :add styling for correct || incorrect words


    useEffect(() => {

        const handleInput = (e) => {

            const regex = /^[a-zA-Z]+$/


            if(e.key === 'Enter' || e.key === ' '){

                if(input.trim().length > 0){
                    
                setInserted(inserted => [...inserted, input])
                setInput('')
                setTarget(target => target + 1)


                if(target === words.length - 1){
                    console.log('gamei is finishjed')
                    return
                }


                return
                }
                

            }else if (e.key === 'Backspace' ){


                

                if (input.length > 0){
                    setInput(input.slice(0 , -1))
                }


                if(input.length < 1){
                    setInput('')


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
                setInput(input => input + e.key)



            }



            
        }


        window.addEventListener('keydown', handleInput)
        return () => {window.removeEventListener('keydown',handleInput)}

    },[input,target,inserted])

 
        const LetterValidate = () => {

            const inputLastLetter = input[input.length - 1]
            const targetLetter = words[target][input.length -1]



            if(!inputLastLetter && !targetLetter){
                return
            }
            if(words[target] === words.length - 1){
                console.log('game is finished')
                return
            }


             if(inputLastLetter == targetLetter){

            }else {

            }


        }

LetterValidate()






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