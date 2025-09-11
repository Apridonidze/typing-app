import RefreshBtn from "../components/RefreshBtn";//importing component
import FooterBtn from "../components/FooterBtn";//importing component
import Controls from "../components/Controls";//importing component

const Footer = ({theme ,setToggleTheme, setToggleVersions}) => {

    return (

        <div className="footer-container container d d-flex flex-column align-items-center gap-3 fs-5 justify-content-center pb-5">

            <RefreshBtn theme={theme}/>

            <Controls />

            <FooterBtn setToggleTheme={setToggleTheme} setToggleVersions={setToggleVersions}/>
        
        </div>
        
    );
};//component returns : RefreshBtn , Controls & FooterBtn components


export default Footer; //exporting compoinent