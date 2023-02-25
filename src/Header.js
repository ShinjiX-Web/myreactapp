import './Header.css';
import { ReactComponent as Logo } from "./logo.svg";

const Header = () => {

  return (
    <header>

      <nav className='navbar bg-body-tertiary bg-primary'>
        <div className='container'>
          <a className='navbar-brand text-white' href="#">
            <Logo></Logo>
            React JS App
          </a>
        </div>
      </nav >

    </header >
  )

}

export default Header;