const Words = ( { words,wordRef } ) => {
    return (
        <div className="words-container container text-break">
            {words.map((word,wordId) => (
                <span className="pe-2" key={wordId} ref={e => (wordRef.current[wordId] = e)} >{word}</span>
            ))}
        </div>
    )
}


export default Words