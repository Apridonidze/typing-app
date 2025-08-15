import Words from "../components/Words";

const Game = ( { words } ) => {
    return(
        <div className="game-container">
            
            <Words words={words} />
        </div>
    );
};


export default Game;