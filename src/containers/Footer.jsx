import RefreshBtn from "../components/RefreshBtn";


const Footer = ({theme,themeTxt,setToggleTheme}) => {
    return (
        <div className="footer-container container d d-flex flex-column align-items-center gap-3 fs-5 justify-content-center pb-5">


            <RefreshBtn theme={theme}/>

            <span>Press Tab + Enter To Refresh</span>

            <div className="py-2">
                
                <span className="theme-btn fs-6 py-2 my-2" onClick={() => setToggleTheme(toggleTheme => toggleTheme = !toggleTheme)}><i class="fa-solid fa-palette"></i> {themeTxt.theme}</span>
            
            </div>
        
        </div>
    );
};


export default Footer