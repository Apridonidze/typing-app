import { useLayoutEffect, useEffect, useRef, useState } from "react";
import Words from "../components/Words";
import Input from "../components/Input";
import Inserted from "../components/Inserted";
const Game = ( { words } ) => {


    const wordRef = useRef([])
    const letterRef = useRef([])

    const [input,setInput] = useState([])
    const [inserted,setInserted] = useState([])
    const [target,setTarget] = useState(0)

    const [targetWord, setTargetWord] = useState('')
    const [targetLetter, setTargetLetter] = useState(0) 


    const [insertedSpans, setInsertedSpans] = useState({textContent : null , className : null })





    useEffect(() => {


         if(wordRef.current || letterRef.current){
             
             setTargetWord(targetWord => targetWord = wordRef.current[target].textContent)


             

            if(targetWord){

                
                const lastIndex = input.length - 1

                const inputLastLetter = input[lastIndex]
                const targetLastLetter = targetWord[lastIndex]


               
                if(!inputLastLetter || !targetLastLetter ){
                    return
                }


                if(inputLastLetter  === targetWord[lastIndex]){
                

                  letterRef.current[lastIndex].classList.add('text-success')



                  
                    
                    
                }else {
                    letterRef.current[lastIndex].classList.add('text-danger')
                }
                // **ADD** - const className = letterref.current.classlist & letter.current and update it to state

                
                setTargetLetter(targetLetter => targetLetter = inputLastLetter)

                
            }
            return


        }

    },[words,targetWord,target,input,letterRef,wordRef]) // ***DELETE*** - delete unwanted variables from here




    useEffect(() => {




        const handleInput = (e) => {

            console.log('game started') //change it with setgamestarted variable
            

            const regex = /^[a-zA-Z]+$/


            if(e.key === 'Enter' || e.key === ' '){

                if(input.length > 0){
                
                    
                        //letterRef.current[i].textContent
                    

                setInput([])
                setTarget(target => target + 1)


                if(target === words.length - 1){
                    console.log('game over') //setgame over variable
                    setTarget(target)
                    setInput([])
                    setInserted(inserted)
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

                if(input.length > wordRef.current[target].textContent.length - 1){
                    setInput(input.slice(0, wordRef.current[target].textContent.length))
                    return
                }


            }



            
        }


        window.addEventListener('keydown', handleInput)
        return () => {window.removeEventListener('keydown',handleInput)}

    },[input,target,inserted]) // ***DELETE*** - delete unwanted variables from here

 

    return(
        <div className="game-container">
            Game.jsx
            <Words words={words} wordRef={wordRef} />
            <Inserted inserted={inserted} />
            <Input input={input} letterRef={letterRef} targetLetter={targetLetter} />  
           
        </div>
    );
};


//TODO : fix bugs & add functions that are commented in code
//TODO : import gameStart & gameEnd variables

    

export default Game;