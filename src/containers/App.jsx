import { useEffect, useState } from "react";
import Game from "./Game";
import Final from "./Final";
import axios from "axios";

const App = () => {

  //TODO : make timer
  //TODO : make game length properties comonents : time & words length
  //TODO :add game finish screeen
  //TODO : calculate wpm w/m
  //TODO : create footer component
  //TODO : finish UI design 


  //TODO : add screen for tables and mobiles so they cant play
  


  const [words,setWords] = useState([''])
  const [isGameFinished, setIsGameFinished] = useState(false)


  useEffect(() => {

    const API_URL = 'http://localhost:8080/words'

    const fetchWords = () => {

      axios
      .get(API_URL)
      .then((resp) => {

        const data = resp.data
        const shuffledArray = [...data].sort(() => Math.random() - 0.5);
        const slicedArray = shuffledArray.slice(0, 10) // change 10 with custom number


        setWords(slicedArray)

      })
      .catch((err) => {
        console.log(err)
      })

    }

    return () => {fetchWords()}

  },[])


  return(
    <div className="app-container">
      App.jsx


{!isGameFinished ? <Game words={words} setIsGameFinished={setIsGameFinished} />  : <Final />}
      

    </div>
  );
};


export default App