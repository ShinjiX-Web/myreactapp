import './Header.css';
import { ReactComponent as Logo } from "./logo.svg";

const Header = () => {

  return (
    <header>

      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <a href="https://go.dev/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none mylogo">
            <Logo></Logo>
          </a>

          <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><a href="{sample}" className="nav-link px-2 link-dark">Pinay</a></li>
            <li><a href="https://go.dev/" className="nav-link px-2 link-dark">BBC</a></li>
            <li><a href="https://go.dev/" className="nav-link px-2 link-dark">Scandal</a></li>
            <li><a href="https://go.dev/" className="nav-link px-2 link-dark">Secret Files</a></li>
            <li><a href="https://go.dev/" className="nav-link px-2 link-dark">About</a></li>
          </ul>

          <div class="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">Mag Login</button>
            <button type="button" className="btn btn-primary">Mag Sign-up</button>
          </div>
        </header>
      </div>

    </header>

  )

}

export default Header;