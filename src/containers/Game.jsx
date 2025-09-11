import { useRef,useEffect,useState } from "react"; //importing hooks 

import Focused from "../components/Focused"; //importing component from ./component
import Wrapper from "./Wrapper"; //importing component from ./container


const Game = ( { words ,setIsGameFinished, setCorrectCount ,setInserted , inserted , setIncorrectCount, setIsGameStarted, isGameStarted, isWordsFetched, isFocused , input, setInput, setTarget, target, fontSize} ) => {

    const wordRef = useRef([]); //ref for words to type
    const letterRef = useRef([]); //ref for letters from words to type

    const insertedRef = useRef([]); //ref for inserted words
    const insertedLetterRef = useRef([]); //ref for letter from inserted words

    const [targetWord, setTargetWord] = useState(['']); //state for targeted word
    const [targetLetter, setTargetLetter] = useState(0); //state for target word's targeted letter

    
    insertedLetterRef.current = []; //sets inserted letter ref to empty array so no error will be displayed when user opens page

    useEffect(() => {
        
        setTargetWord(targetWord => [...targetWord ,wordRef.current[target].textContent][targetWord.length]); //
        
        if(wordRef.current || letterRef.current){
            
            if(targetWord){
                
                const lastIndex = input.length - 1; //defines input length , it will be used as index 
                const inputLastLetter = input[lastIndex]; //defines input's last letter with lastIndex variable
                const targetLastLetter = targetWord[lastIndex];//defines target words last letter with lastIndex variable

 
                if(!inputLastLetter || !targetLastLetter ) return; //if inputLastLetter || targetLastLetter is empty, undefined  it returns to avoid error

                if(lastIndex >= 0 && letterRef.current[lastIndex] )letterRef.current[lastIndex].classList.add('border-end'); // adds border-end to input's last letter

                if(lastIndex > 0 && letterRef.current[lastIndex - 1])letterRef.current[lastIndex - 1].classList.remove('border-end'); //remoes border-end from input's prev letter




                if(insertedLetterRef.current && insertedLetterRef.current.length > 0) insertedLetterRef.current.forEach((insLett) => {
                    if(insLett) insLett.classList.remove('border-end');
                }); //removes border-end from inserted letters when user moves to next word



                if(inputLastLetter  === targetWord[lastIndex])letterRef.current[lastIndex].classList.add('text-success'); //checks if last input letter === target word's last letter and adds text-success to it 
                else letterRef.current[lastIndex].classList.add('text-danger'); //else adds text-danger
                

                setTargetLetter(targetLetter => targetLetter = letterRef.current[lastIndex]);//updates setTargetLetter state in time with target letter

                
            };
            return;

        };

    },[input,letterRef,insertedLetterRef]); //function mounts when input,letterRef,insertedLetterRef variables are changed

    
    

    useEffect(() => {

        const handleInput = (e) => {
            
            if(isFocused && isWordsFetched){ //checks if words are fetched and if user is focused on text field , if so user has access to typing function

            setIsGameStarted(isGameStarted =>  isGameStarted =  true); //sets setIsGameStarted state to true 


            const regex = /^[a-zA-Z]+$/; //only lathin word regex

            if(e.key === 'Enter' || e.key === ' '){ //checks if user pressed Enter or Space

                const correctWord = wordRef.current[target].textContent; //gets target word 

               if(input.length < 1) return; //prevents user to insert empty input in inserted state
               

                if(input.join('') == correctWord) setCorrectCount(correctCount => correctCount + 1); //checks if input === correctWord and adds one to correctCount state
                else setIncorrectCount(incorrectCount => incorrectCount + 1); //else adds one to IncorrectCount state
                

                if(input.length < correctWord.length){


                    const diff = correctWord.length - input.length; //defines difference between lengthes of correctWord and input

                    const leftLetters = Array.from({length: diff}, (_,i) => ({

                        text: correctWord[input.length + i],
                        className: "leftover"

                    })); //generates left letters from diff variable to correctWord.length and adds leftover className 

                    const typedLetters = input.map((char, i) => ({
                    
                        text: char,
                        className: letterRef.current[i].classList.value
                    
                    }));//defines typed letters from input and adds its className


                    const mergedInput = [...typedLetters, ...leftLetters]; //merges typedLetters and leftover letters

                    

                    setInput([]); //clears input after insertion
                    setTarget(target => target + 1); //increases target (index for inserted) by one 
                    setInserted(inserted => [...inserted , mergedInput]); //inserts mergedInput into inserted state


                }else { //else (if there is no leftover letter)

                    const typedLetters = input.map((char, i) => ({
                    
                        text: char,
                        className: letterRef.current[i].classList.value
                    
                    }));//defines typed letters from input


                    setInput([]); //clears input
                    setTarget(target => target + 1); //increases target (index for inserted) by one
                    setInserted(inserted => [...inserted , typedLetters]);//inserts typedLetters into inserted state
                    
                };


                


                if(target + 1 == words.length){ //checks if target count === words.length (if so then game is finished)
                    
                    setIsGameFinished(true); //sets setIsGameFinished to true 
                    setTarget(target); //sets target count to target
                    setInput([]); //clears input 
                    setInserted(inserted); //pushes inserted to setInserted state 

                    return;
                };
                

            }else if (e.key === 'Backspace' ){ //checks if user pressed Backspace

                if (input.length > 0)setInput(input.slice(0 , -1)); //checks if input.length is greater than zero if so it removes last chracter from input by one 
                if(input.length === 0 )setInput([]); return; //else it clears input state

            }

            else if (e.key.length > 1)return; //retruns nothing if user presses Control,Tab,Caps,Shift, etc except Backspace, Enter, Space

            else if (regex.test(e.key) === false)return; //returns nothing if user types other alphabets than lathin
            
            else {//else (if user inputs validates keys)
                
                
                setInput(input => [...input ,e.key]); //updates input state with key pressed

                
            
                if(input.length > wordRef.current[target].textContent.length - 1){//prevents user to type more letters than target word
                    setInput(input.slice(0, wordRef.current[target].textContent.length)); //removes extra letters
                    return;
                };

                return;//else returns nothing (avoid errors)

            };
            
        };
    };

        window.addEventListener('keydown', handleInput); //triggers function on keydown event
        return () => {window.removeEventListener('keydown',handleInput)}; //removes function on keydown event

    },[input,inserted,target,isGameStarted,isFocused]);//handleInput function mount when : input,inserted,target,isGameStarted,isFocused variables change


    return (
        <div className="game-container container py-2">
            
            <Focused isFocused={isFocused}/>

            <Wrapper words={words} wordRef={wordRef} inserted={inserted} input={input} letterRef={letterRef} targetLetter={targetLetter}  isFocused={isFocused} insertedRef={insertedRef} insertedLetterRef={insertedLetterRef} fontSize={fontSize}/>

        </div>
    );
};//component returns :Focused, Wrapper components


export default Game;//exporting component