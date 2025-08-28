const Inserted = ( { inserted } ) => {
    return(
    <div className="inserted-container">
        {inserted.map((e,i) => (
            
            <span className={e.className + ' pe-2 text-break'} key={i}>{e.text}</span>
    ))}

        </div>
        
    )
}


export default Inserted