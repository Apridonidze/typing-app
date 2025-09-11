const RefreshBtn = ( ) => {
    return (

        <button style={{color : localStorage.getItem('color-theme')}} className="btn p-2" onClick={() => window.location.reload() } tabIndex='0' role="button"><i className="fa-solid fa-rotate-right"></i></button>

    );
}; //refresh button that reloads page when clicked (its tabIndex is zero so when user clicks Tab key this button will be selected first)


export default RefreshBtn; //exporting component