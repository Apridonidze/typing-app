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





    useEffect(() => {


         if(wordRef.current || letterRef.current){
             
             setTargetWord(targetWord => targetWord = wordRef.current[target].textContent)


            if(targetWord){

                

                const inputLastLetter = input[input.length - 1]
                const targetLastLetter = targetWord[input.length - 1]

                

                if(!inputLastLetter || !targetLastLetter ){
                    return
                }
                


                if(input[input.length - 1]  === targetWord[input.length - 1]){
                
                    letterRef.current[input.length - 1].classList.add('text-success');

                
                    
                }else {

                    letterRef.current[input.length - 1].classList.add('text-danger');


                    console.log(styledInsert)
                    
                
                }



                setTargetLetter(targetLetter => targetLetter = input[input.length - 1])


            }
            return


        }

    },[words,targetWord,target,input,letterRef,wordRef])




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

    },[input,target,inserted])

 

    return(
        <div className="game-container">
            Game.jsx
            <Words words={words} wordRef={wordRef} />
            <Inserted inserted={inserted} />
            <Input input={input} letterRef={letterRef} targetLetter={targetLetter} />
            {styledInsert}
            
        </div>
    );
};


export default Game;