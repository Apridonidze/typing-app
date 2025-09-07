import RefreshBtn from "../components/RefreshBtn";
const Footer = ({handleThemeButtons,setTheme,themes, theme,themeTxt,setToggleTheme,toggleTheme}) => {
    return (
        <div className="footer-container container d d-flex flex-column align-items-center gap-3 fs-5 justify-content-center pb-5">


            <RefreshBtn theme={theme}/>

            <span>Press Tab + Enter To Refresh</span>

            <span onClick={() => setToggleTheme(toggleTheme => toggleTheme = !toggleTheme)}><i class="fa-solid fa-palette"></i> {themeTxt.theme}</span>
            
        
        </div>
    );
};


export default Footer