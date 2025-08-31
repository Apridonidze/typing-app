const RefreshBtn = () => {
    return (
        <button className="btn text-info p-2" onClick={() => window.location.reload() } tabIndex='0' role="button"><i className="fa-solid fa-rotate-right"></i></button>
    )
}


export default RefreshBtn