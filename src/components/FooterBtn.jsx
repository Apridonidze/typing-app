const FooterBtn = ( { setToggleTheme,setToggleVersions } ) => {
    return (
        <div className="footer-buttons-container container align-items-center d-flex justify-content-between fs-6 " style={{height: '50px'}}>
            
            <div className="d-flex gap-2" style={{height: '50px'}}>
                <span className="footer-btn py-2 my-2" onClick={() => {window.location.href = 'https://github.com/Apridonidze'}}><i class="fa-brands fa-github"></i> Github</span>
                <span className="footer-btn py-2 my-2" onClick={() => {window.location.href = 'https://www.linkedin.com/in/giorgi-afridonidze-7aa896291/'}}><i class="fa-brands fa-linkedin"></i> LinkedIn</span>
            </div>


            <div className="d-flex gap-2" style={{height: '50px'}}>
                <span className="footer-btn py-2 my-2 " onClick={() => {setToggleTheme(toggleTheme => toggleTheme = !toggleTheme); setToggleVersions(toggleVersions => toggleVersions = false ) }}><i class="fa-solid fa-palette"></i> {localStorage.getItem('text-theme')}</span>
                <span className="footer-btn py-2 my-2" onClick={() => {setToggleVersions(toggleVersions => toggleVersions = !toggleVersions); setToggleTheme(toggleTheme => toggleTheme = false)}}><i class="fa-solid fa-code-branch"></i> v0.0.0</span>
            </div>

        </div>
    )
}


export default FooterBtn