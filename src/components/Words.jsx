const Words = ( { words,wordRef } ) => {

    return (

        <div className="words-container container text-break  h-auto">

            {words.map((word,wordId) => (
                <span className="pe-2" key={wordId} ref={e => (wordRef.current[wordId] = e)} >{word}</span>
            ))}

        </div>

    );
}; //gets words from App.jsx (parent) component and displayes it separatley in span elements 


export default Words;//exporting component