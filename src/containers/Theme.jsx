import ThemeButtons from "../components/ThemeButtons"
import TextSize from "../components/TextSize"

const Theme = ({ handleThemeButtons, handleTextSize }) => {
    

    return(
        <div className="theme-container container d-block text-center overflow-auto" style={{height : '600px'}}>

           <ThemeButtons handleThemeButtons={handleThemeButtons} />

           <TextSize handleTextSize={handleTextSize}/>

        </div>
    )
}

export default Theme