const Words = ( { words } ) => {
    return (
        <div className="words-container">
            {words.map((word,wordId) => (
                <span className="mx-1" key={wordId} >{word}</span>
            ))}
        </div>
    )
}


export default Words