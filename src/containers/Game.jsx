
import { useRef,useEffect,useState } from "react";

import Words from "../components/Words";
import Input from "../components/Input";
import Inserted from "../components/Inserted";
import Focused from "../components/Focused";

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

                    const diff = correctWord.length - input.length
                    const spaces = ['_ '.repeat(diff)]
                    const paddedArr = input.join(' ') + spaces
                    const clearedPaddedArr = paddedArr.split(' ').join(' ')
                    setInput([clearedPaddedArr ])

                    

                    setTarget(target => target + 1)
                    setInserted(inserted => [...inserted , {text : clearedPaddedArr  ,className : letterRef.current[lastIndex].classList }]) //fix this line
                    setInput([])


                }else {

                    setInput([])
                    setTarget(target => target + 1)
                    setInserted(inserted => [...inserted , {text : input ,className : letterRef.current[lastIndex].classList }])
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
                        setInput(inserted[inserted.length - 1].text)  //fix this line
                        
                       if(inserted.length > 0){

                        setInput(inserted[inserted.length - 1].text)

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


/* create if focused logic. if component is not focused append Focused.jsx on top of game-container */
    return (
        <div className="game-container">

{!isFocused ? <Focused /> : <></>}

            <Words words={words} wordRef={wordRef} />
            <Inserted  inserted={inserted}/>
            <Input input={input} letterRef={letterRef} targetLetter={targetLetter}  handleRedo={handleRedo} />  

        </div>
    );
};


export default Game