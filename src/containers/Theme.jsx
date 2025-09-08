import ThemeButtons from "../components/ThemeButtons"
import TextSize from "../components/TextSize"

const Theme = ({ handleThemeButtons, handleTextSize }) => {
    

    return(
        <div className="theme-container container d-flex flex-column text-center">

            <span className="fs-1 py-3" >Choose your Theme...</span>

           <ThemeButtons handleThemeButtons={handleThemeButtons} />

           <span className="fs-1 py-3" >Choose your Font Size...</span>
           <TextSize handleTextSize={handleTextSize}/>

        </div>
    )
}

export default Theme