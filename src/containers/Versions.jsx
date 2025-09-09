const Versions = () => {
    return(
    <div className="versions-container d-flex flex-column container  rounded-2 w-50 h-auto my-5 justify-content-center " style={{backgroundColor: localStorage.getItem('background-theme')}}>
        
        <div className="v0.0.0-container container d-flex flex-column">
            <span className="fs-1">v0.0.0</span>

            <span className="fs-3 ps-3">Features:</span>

            <ul className="ps-5">
                <li>...add content</li>
            </ul>

             <span className="fs-3 ps-3">Future Updates:</span>

            <ul className="ps-5">
                <li>...add content</li>
            </ul>


        </div>

    </div>
    )
}


export default Versions