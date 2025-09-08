const TextSize = ({handleTextSize}) => {
    return(
        <div className="textsize-container container d-flex flex-column gap-3 justify-content-start align-items-center ">

            
           <span className="fs-1 py-3" >Choose your Font Size...</span>
            
            <button className="btn border border-2 w-25 fs-1" style={{color : localStorage.getItem('color-theme')}} onClick={() => handleTextSize('fs-1')}>Font-Size 1</button>
            <button className="btn border border-2 w-25 fs-2" style={{color : localStorage.getItem('color-theme')}} onClick={() => handleTextSize('fs-2')}>Font-Size 2</button>
            <button className="btn border border-2 w-25 fs-3" style={{color : localStorage.getItem('color-theme')}} onClick={() => handleTextSize('fs-3')}>Font-Size 3</button>
            <button className="btn border border-2 w-25 fs-4" style={{color : localStorage.getItem('color-theme')}} onClick={() => handleTextSize('fs-4')}>Font-Size 4</button>
            <button className="btn border border-2 w-25 fs-5" style={{color : localStorage.getItem('color-theme')}} onClick={() => handleTextSize('fs-5')}>Font-Size 5</button>
            <button className="btn border border-2 w-25 fs-6" style={{color : localStorage.getItem('color-theme')}} onClick={() => handleTextSize('fs-6')}>Font-Size 6</button>

        </div>
    )
}


export default TextSize