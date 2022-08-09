const _nav = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Network Map</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor03">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link active" href="/">Home
                <span className="visually-hidden">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Disconnect</a>
            </li>
          </ul>
          <form className="d-flex">
            {/* <input type="button" className="btn btn-secondary my-2 my-sm-0">Add project</input> */}
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Add project</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default _nav