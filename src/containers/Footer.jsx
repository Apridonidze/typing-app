import RefreshBtn from "../components/RefreshBtn";
import Theme from "../components/Theme";
const Footer = ({handleThemeButtons,setTheme,themes, theme,themeTxt}) => {
    return (
        <div className="footer-container container d d-flex flex-column align-items-center gap-3 fs-5 justify-content-center pb-5">


            <RefreshBtn theme={theme}/>

            <span>Press Tab + Enter To Refresh</span>

            <Theme handleThemeButtons={handleThemeButtons} setTheme={setTheme} theme={theme} themes={themes}/>

            {themeTxt.theme}
            
        
        </div>
    );
};


export default Footer