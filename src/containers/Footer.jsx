import RefreshBtn from "../components/RefreshBtn";

const Footer = ({theme}) => {
    return (
        <div className="footer-container container d d-flex flex-column align-items-center gap-3 fs-5 justify-content-center pb-5">


            <RefreshBtn theme={theme}/>

            <span>Press Tab + Enter To Refresh</span>

            
            
        
        </div>
    );
};


export default Footer