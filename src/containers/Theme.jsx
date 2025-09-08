import ThemeButtons from "../components/ThemeButtons"

const Theme = ({handleThemeButtons}) => {
    

    return(
        <div className="theme-container container d-flex flex-column text-center  gap-2 ">

            <span className="fs-1 pt-5 pb-4" >Choose your Theme...</span>

           <ThemeButtons handleThemeButtons={handleThemeButtons} />

        </div>
    )
}

export default Theme