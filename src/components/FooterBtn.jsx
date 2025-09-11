const FooterBtn = ( { setToggleTheme,setToggleVersions } ) => {

    return (

        <div className="footer-buttons-container container align-items-center d-flex justify-content-between fs-6 " style={{height: '50px'}}>
            
            <div className="d-flex gap-2" style={{height: '50px'}}>

                <span className="footer-btn py-2 my-2" onClick={() => {window.location.href = 'https://github.com/Apridonidze'}}><i className="fa-brands fa-github"></i> Github</span>
                <span className="footer-btn py-2 my-2" onClick={() => {window.location.href = 'https://www.linkedin.com/in/giorgi-afridonidze-7aa896291/'}}><i className="fa-brands fa-linkedin"></i> LinkedIn</span>
            
            </div>


            <div className="d-flex gap-2" style={{height: '50px'}}>

                <span className="footer-btn py-2 my-2 " onClick={() => {setToggleTheme(toggleTheme => toggleTheme = !toggleTheme); setToggleVersions(toggleVersions => toggleVersions = false ) }}><i className="fa-solid fa-palette"></i> {localStorage.getItem('text-theme')}</span>
                <span className="footer-btn py-2 my-2" onClick={() => {setToggleVersions(toggleVersions => toggleVersions = !toggleVersions); setToggleTheme(toggleTheme => toggleTheme = false)}}><i className="fa-solid fa-code-branch"></i> v0.0.0</span>
            
            </div>

        </div>

    );
}; //container of footer buttons. first div holds contact links (github, linkedin) second div holds toggle buttons for Theme.jsx and Versions.jsx


export default FooterBtn; //exporting component