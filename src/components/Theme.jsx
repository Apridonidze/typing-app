import { useEffect } from "react"

const Theme = ({handleThemeButtons, themes}) => {
    
    
    

    return(
        <div className="theme-container container">
            Theme.jsx

            {themes.map((th,thId) => (
                <button key={thId} onClick={() => handleThemeButtons(th)}>{th.theme}</button>
            ))}
        </div>
    )
}

export default Theme