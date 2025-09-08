const ThemeButtons = ( { handleThemeButtons } ) => {
    
    const darkTheme = {theme : 'Dark Theme',backgroundColor: 'black', color : 'white'}
    const lightTheme = {theme : 'Light Theme',backgroundColor : 'white', color: 'black'}
    const devTheme = {theme : 'Dev Theme',backgroundColor : '#1b2028', color : '#23a9d5'}
    const matrixTheme = {theme : 'Matrix Theme',backgroundColor : '#000000 ', color : '#15ff00'}
    const vsCodeTheme = {theme : 'VsCode Theme',backgroundColor: '#1e1e1e', color : 'white'}
    const creamsicle = {theme : 'CreamSicle Theme',backgroundColor: '#ff9869' , color : 'white'}
    

    return(
        <div className="theme-buttons-container container d-flex flex-column gap-3 justify-content-start align-items-center h-auto ">
            
            <button style={{background : darkTheme.backgroundColor,color : darkTheme.color}} className="dark-theme-btn btn btn-md border border-1 w-25" onClick={() => handleThemeButtons(darkTheme)}>{darkTheme.theme}</button>
            <button style={{background : lightTheme.backgroundColor,color : lightTheme.color}} className="light-theme-btn btn btn-md border border-1 border-dark w-25" onClick={() => handleThemeButtons(lightTheme)}>{lightTheme.theme}</button>
            <button style={{background : devTheme.backgroundColor,color : devTheme.color}} className="dev-theme-btn btn btn-md border border-1 border-info w-25" onClick={() => handleThemeButtons(devTheme)}>{devTheme.theme}</button>
            <button style={{background : matrixTheme.backgroundColor,color : matrixTheme.color , border: '1px solid #15ff00'}} className="matrix-theme-btn btn btn-md w-25" onClick={() => handleThemeButtons(matrixTheme)}>{matrixTheme.theme}</button>
            <button style={{background : vsCodeTheme.backgroundColor,color : vsCodeTheme.color}} className="vsCode-theme-btn btn btn-md border border-1 w-25" onClick={() => handleThemeButtons(vsCodeTheme)}>{vsCodeTheme.theme}</button>
            <button style={{background : creamsicle.backgroundColor,color : creamsicle.color}} className="creamsicle-theme-btn btn btn-md border border-1 w-25" onClick={() => handleThemeButtons(creamsicle)}>{creamsicle.theme}</button>
           
        </div>
    );
};



export default ThemeButtons