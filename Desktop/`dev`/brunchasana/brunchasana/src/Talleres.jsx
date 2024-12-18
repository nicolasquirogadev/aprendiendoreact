import './Talleres.css'

function Talleres( {title, ptext, schedule, imgsrc}  ) {

    return (
        <>
        <div className="ta-card">
            <div className="card-img-container">
                <img src={imgsrc} alt="taller foto" />
            </div>
            <h3 className="card-title">{title}</h3>
            <p className="card-text">{ptext}</p>
            <i className="card-schedule">{schedule}</i>
            <button className="card-btn">Inscribirme</button>
        </div>
        </>
    )
}

export default Talleres