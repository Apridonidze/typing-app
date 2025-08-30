
import { useRef,useEffect,useState } from "react";

import Focused from "../components/Focused";
import Wrapper from "./Wrapper";
import Inserted from "../components/Inserted";


const Game = ( { words ,setIsGameFinished, setCorrectCount ,setInserted , inserted , setIncorrectCount, setIsGameStarted, isGameStarted, isWordsFetched, isFocused , input, setInput, setTarget, target} ) => {

    const wordRef = useRef([])
    const letterRef = useRef([])

    const [targetWord, setTargetWord] = useState('')
    const [targetLetter, setTargetLetter] = useState(0) 


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
                
                setTargetLetter(targetLetter => targetLetter = inputLastLetter)

            }
            return

        }

    },[input,])

    

    useEffect(() => {

        const handleInput = (e) => {


            if(isFocused && isWordsFetched){
             setIsGameStarted(isGameStarted =>  isGameStarted =  true)


            const regex = /^[a-zA-Z]+$/

            if(e.key === 'Enter' || e.key === ' '){

                if(input.length > 0){

                    
                const correctWord = wordRef.current[target].textContent
                const lastIndex = input.length - 1
                
                if(input.join('') === correctWord){
                    setCorrectCount(correctCount => correctCount + 1)
                }else {
                    setIncorrectCount(incorrectCount => incorrectCount + 1)
                }



                if(input.length < correctWord.length){

                    const diff = correctWord.length - input.length;
                    
                    const typedLetters = input.map((char, i) => ({
                        text: char,
                        className: letterRef.current[i]?.classList || ""
                    }));


                    const leftLetters = Array.from({ length: diff }, (_, i) => ({
                    text: correctWord[input.length + i],
                    className: "leftover"
                }));

                const mergedInput = [...typedLetters, ...leftLetters];
                
                setTarget(target => target + 1);
                setInserted(inserted => [...inserted, ...mergedInput]);
                setInput([]);

                }else {

                    setInput([])
                    setTarget(target => target + 1)
                    setInserted(inserted => [...inserted , {text : input ,className : letterRef.current[lastIndex].classList }])
                    console.log(Inserted)
                }
               

                if(target + 1 == words.length){
                    setIsGameFinished(true)
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

                    if(inserted.length > 0){

                        setInserted(inserted.slice(0, -1))
                        setTarget(target => target = inserted.length -1 )
                        setInput(inserted[inserted.length - 1].text)
                        
                       if(inserted.length > 0){

                        const lastInserted = inserted[inserted.length - 1].text

                        setInput( () => {

                            let lastInsertedCopy = [...lastInserted]
                            while(lastInsertedCopy[lastInsertedCopy.length - 1] === '_'){
                                lastInsertedCopy.pop()
                            }
                            return lastInsertedCopy
                        }
                        )

                       }else {
                        setInput([])
                       } 

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

                return

            }
            
        }
    }

        window.addEventListener('keydown', handleInput)
        return () => {window.removeEventListener('keydown',handleInput)}

    },[input,target,isGameStarted,isFocused])



    const handleRedo = () => {


        if(input.length > 0){

                const lastIndex = input.length - 1

                setInput([])
                setTarget(target => target + 1)
                setInserted(inserted => [...inserted , {text : input ,className : letterRef.current[lastIndex].classList }])


                if(target + 1 == words.length){
                    setIsGameFinished(true)
                    setTarget(target)
                    setInput([])
                    setInserted(inserted)
                    return
                }
            }

}

    return (
        <div className="game-container container border border-2 border-secondary rounded-3 p-5">
            
            
            <Focused isFocused={isFocused}/>

            <Wrapper words={words} wordRef={wordRef} inserted={inserted} input={input} letterRef={letterRef} targetLetter={targetLetter} handleRedo={handleRedo} isFocused={isFocused}/>

        </div>
    );
};


export default Game