const Inserted = ( { inserted } ) => {
    return(
    <div className="inserted-container">
        {inserted.map((e,i) => (
            
            <span className={e.className + ' mx-2'} key={i}>{e.text}</span>
    ))}

        </div>
        
    )
}


export default Inserted