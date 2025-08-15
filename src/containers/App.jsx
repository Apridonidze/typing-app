import { Suspense, useEffect, useState } from "react";
import Game from "./Game";
import axios from "axios";

const App = () => {

  const [words,setWords] = useState([''])


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

      <Game words={words} />

    </div>
  );
};


export default App