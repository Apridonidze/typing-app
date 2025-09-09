import RefreshBtn from "../components/RefreshBtn";
import FooterBtn from "../components/FooterBtn";

const Footer = ({theme,themeTxt,setToggleTheme, setToggleVersions}) => {
    return (
        <div className="footer-container container d d-flex flex-column align-items-center gap-3 fs-5 justify-content-center pb-5">


            <RefreshBtn theme={theme}/>

            <span>Press Tab + Enter To Refresh</span>
            <span className="fs-4">Or</span>
            <span>Press F5</span>

            <FooterBtn setToggleTheme={setToggleTheme} setToggleVersions={setToggleVersions}/>
        
        </div>
    );
};


export default Footer