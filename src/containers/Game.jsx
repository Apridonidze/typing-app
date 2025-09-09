import { useRef,useEffect,useState } from "react";

import Focused from "../components/Focused";
import Wrapper from "./Wrapper";


const Game = ( { words ,setIsGameFinished, setCorrectCount ,setInserted , inserted , setIncorrectCount, setIsGameStarted, isGameStarted, isWordsFetched, isFocused , input, setInput, setTarget, target, fontSize} ) => {

    const wordRef = useRef([])
    const letterRef = useRef([])

    const insertedRef = useRef([])
    const insertedLetterRef = useRef([])

    const [targetWord, setTargetWord] = useState([''])
    const [targetLetter, setTargetLetter] = useState(0)

    
    insertedLetterRef.current = []

    useEffect(() => {
        
        setTargetWord(targetWord => [...targetWord ,wordRef.current[target].textContent][targetWord.length])
        
        if(wordRef.current || letterRef.current){

            
            
            if(targetWord){
                
                const lastIndex = input.length - 1
                const inputLastLetter = input[lastIndex]
                const targetLastLetter = targetWord[lastIndex]
                const correctWord = wordRef.current[target].textContent
                
 
                if(!inputLastLetter || !targetLastLetter ) return;

                if(lastIndex >= 0 && letterRef.current[lastIndex] )letterRef.current[lastIndex].classList.add('border-end')

                if(lastIndex > 0 && letterRef.current[lastIndex - 1])letterRef.current[lastIndex - 1].classList.remove('border-end')


                if(insertedLetterRef.current && insertedLetterRef.current.length > 0) insertedLetterRef.current.forEach((insLett) => {
                    if(insLett) insLett.classList.remove('border-end')
                })



                if(inputLastLetter  === targetWord[lastIndex]){
                  
                    letterRef.current[lastIndex].classList.add('text-success')
                     
                }else {
                    
                    letterRef.current[lastIndex].classList.add('text-danger')
                   
                }
                
                

                
                setTargetLetter(targetLetter => targetLetter = letterRef.current[lastIndex])

                
            }
            return

        }

    },[input,letterRef,insertedLetterRef])

    
    

    useEffect(() => {

        const handleInput = (e) => {
            
            if(isFocused && isWordsFetched){
            setIsGameStarted(isGameStarted =>  isGameStarted =  true)


            const regex = /^[a-zA-Z]+$/

            if(e.key === 'Enter' || e.key === ' '){

                const correctWord = wordRef.current[target].textContent

               if(input.length < 1) return;
               

                if(input.join('') == correctWord) setCorrectCount(correctCount => correctCount + 1)
                else setIncorrectCount(incorrectCount => incorrectCount + 1)
                

                if(input.length < correctWord.length){


                    const diff = correctWord.length - input.length

                    const leftLetters = Array.from({length: diff}, (_,i) => ({

                        text: correctWord[input.length + i],
                        className: "leftover"

                    }))

                    const typedLetters = input.map((char, i) => ({
                    
                        text: char,
                        className: letterRef.current[i].classList.value
                    
                    }));


                    const mergedInput = [...typedLetters, ...leftLetters]

                    

                    setInput([])
                    setTarget(target => target + 1)
                    setInserted(inserted => [...inserted , mergedInput])


                }else {

                    const typedLetters = input.map((char, i) => ({
                    
                        text: char,
                        className: letterRef.current[i].classList.value
                    
                    }));

                    

                    setInput([])
                
                    setTarget(target => target + 1)
                    
                    setInserted(inserted => [...inserted , typedLetters])
                    
                }


                


                if(target + 1 == words.length){
                    
                    setIsGameFinished(true)
                    setTarget(target)
                    setInput([])
                    setInserted(inserted)

                    return
                }
                

            }else if (e.key === 'Backspace' ){


                if (input.length > 0)setInput(input.slice(0 , -1))


                if(input.length === 0 )setInput([]); ; return;


            }

            else if (e.key.length > 1)return    
            else if (regex.test(e.key) === false)return
            
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

    },[input,inserted,target,isGameStarted,isFocused])



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
        <div className="game-container container py-2">
            
            
            <Focused isFocused={isFocused}/>

            <Wrapper words={words} wordRef={wordRef} inserted={inserted} input={input} letterRef={letterRef} targetLetter={targetLetter} handleRedo={handleRedo} isFocused={isFocused} insertedRef={insertedRef} insertedLetterRef={insertedLetterRef} fontSize={fontSize}/>

        </div>
    );
};


export default Game