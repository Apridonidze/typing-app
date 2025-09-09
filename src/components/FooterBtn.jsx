const FooterBtn = ( { setToggleTheme,setToggleVersions } ) => {
    return (
        <div className="footer-buttons-container">
            <span className="theme-btn fs-6 py-2 my-2" onClick={() => {setToggleTheme(toggleTheme => toggleTheme = !toggleTheme); setToggleVersions(toggleVersions => toggleVersions = false ) }}><i class="fa-solid fa-palette"></i> {localStorage.getItem('text-theme')}</span>
            <span className="version-btn fs-6 py-2 my-2" onClick={() => {setToggleVersions(toggleVersions => toggleVersions = !toggleVersions); setToggleTheme(toggleTheme => toggleTheme = false)}}><i class="fa-solid fa-code-branch"></i> v0.0.0</span>
                
        </div>
    )
}


export default FooterBtn