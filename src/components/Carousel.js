const Carousel = () => {

    return(
      <div className="carousel-container">

          <div id="carouselExampleFade" className="carousel slide carousel-fade">
              <div className="carousel-inner">
                  <div className="carousel-item active">
                      <img src="https://previews.dropbox.com/p/thumb/ACDvJYADMRoGTynXAW_pVAZucdMIrVQS_NRXu0QGj6RC9pgkO8BHuFnBrnQVWhchOj8Cl83lJ6c95gor3789_Gns17erBd-d-KGp_0dPY84hOAvYESSqLZcjDCclSBMsQYe-RAsCnKP420nDwjdmBxmtiqiRQI_5CayBl8OhD5G7MP3mN0doC23db1-w4xu096ugNQIqB5bxdjeXiWY-cYmUNRuTaGEWLZOoeOg0gAH1_pmehUCFHwkGyJowuhj1hB5ZNzLObS87UliCIBMTMuPzgmRSH39UeYm_TpDyolcj9JIIN2C0SiGk6ZNRUjj1RwwUD_KQ8w8x-IuCna5p-v7a/p.png" className="d-block w-100" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                        <img src="https://previews.dropbox.com/p/thumb/ACCfV7Rg9XJR9K6Cc9sXWztEaHnTlZx0VD-NXGALQHBdgdedNbdAMWbLCwwnFkDy1PrZ2yXh4OItcVYaNgf62MuapmgDhesUZ1lMg1hodo_USFUPNW2nFXPilgpUttSVxxfiJY378PTa_e_D83DE2mwDM_ZI3O-irvzo3FLOe8hj71BE_5nnLrcH03WeJ8LLTtGDOi6YqyFHmMpAkt4nhedhA-erfdy3vyJ_FlZBfQcH9Jww3fZb74xqOgvPdouGllnhNjMeJdLVW7bQxDzJ32PDsHbiasCWEIJB-CykFvuyKiTMlPe_6aB-R-jAVfnNpLUDX_WfwTI2d8dQ6PVkHo7Y/p.jpeg" className="d-block w-100" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                        <img src="https://cdn.carbuzz.com/gallery-images/2023-bmw-m4-coupe-control-panel-carbuzz-1033635-900x600.jpg" className="d-block w-100" alt="..."></img>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carousel