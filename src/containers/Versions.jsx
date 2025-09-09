const Versions = () => {
    return(
    <div className="versions-container d-flex flex-column container  rounded-2 w-50 h-auto my-5 justify-content-center " style={{backgroundColor: localStorage.getItem('background-theme')}}>
        
        <div className="v0.0.0-container container d-flex flex-column">
            <span className="fs-1">v0.0.0</span>

            <span className="fs-3 ps-3">Features:</span>

            <ul className="ps-5">
                <li>Simple Typing Game</li>
                <li>In Game Timer</li>
                <li>WPM calculator on Final Page</li>
                <li>5 Different Themes</li>
                <li>6 Different Font Sizes</li>
            </ul>

             <span className="fs-3 ps-3">Future Updates (In v0.0.1):</span>

            <ul className="ps-5">
                <li>Account for users (to track users typing performance)</li>
                <li>LeaderBoard</li>
                <li>Text in Different Languages</li>
                <li>Smoother Typing</li>
                <li>More Themes</li>
            </ul>

        </div>

    </div>
    )
}


export default Versions