import ThemeButtons from "../components/ThemeButtons"
import TextSize from "../components/TextSize"

const Theme = ({ handleThemeButtons }) => {
    

    return(
        <div className="theme-container container d-flex flex-column text-center gap-2">

            <span className="fs-1 mt-2 py-4" >Choose your Theme...</span>

           <ThemeButtons handleThemeButtons={handleThemeButtons} />
           <TextSize />

        </div>
    )
}

export default Theme