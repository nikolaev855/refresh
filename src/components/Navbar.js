const Navbar = () => {
    return(
<nav className="navbar navbar-expand-lg bg-black">
    <div className="container-fluid">
        <a className="navbar-brand link-light" href="#">ReFresh</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <a className="nav-link link-light" aria-current="page" href="#">Начало</a>
                <a className="nav-link link-light " href="/about">За нас</a>
                <a className="nav-link link-light" href="/services">Услуги</a>
                <a className="nav-link link-light" href="/results">Резултати</a>
                </div>
            </div>
    </div>
</nav>
)
}
export default Navbar