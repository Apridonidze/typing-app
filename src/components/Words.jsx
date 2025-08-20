const Words = ( { words,wordRef } ) => {
    return (
        <div className="words-container">
            {words.map((word,wordId) => (
                <span className="mx-1 text-break" key={wordId} ref={e => (wordRef.current[wordId] = e)} >{word}</span>
            ))}
        </div>
    )
}


export default Words