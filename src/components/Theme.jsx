const Theme = ({handleThemeButtons, themes}) => {
    
    
    

    return(
        <div className="theme-container container d-flex flex-column text-center  gap-2">

            <span className="fs-1 pt-5 pb-4">Choose your Theme...</span>

            {themes.map((th,thId) => (
                <button className="btn btn-md border border-1" key={thId} onClick={() => handleThemeButtons(th)}>{th.theme}</button>
            ))}
        </div>
    )
}

export default Theme