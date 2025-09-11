import ThemeButtons from "../components/ThemeButtons";//importing component from ./components
import TextSize from "../components/TextSize";//importing component from ./components

const Theme = ({ handleThemeButtons, handleTextSize }) => {
    
    return(

        <div className="theme-container container d-block text-center overflow-auto" style={{height : '600px'}}>

           <ThemeButtons handleThemeButtons={handleThemeButtons} />

           <TextSize handleTextSize={handleTextSize} />

        </div>
    );
};//components returns : ThemeButtons , TextSize components

export default Theme; //exporting componment