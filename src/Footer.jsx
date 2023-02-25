import './Footer.css';
import DateTime from './datetime';
import { ReactComponent as Logo } from "./logo.svg";

const Footer = () => {
    const date = new Date();
    return (

            <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top extra-one">
                <div className="col-md-4 d-flex align-items-center">
                <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"><Logo></Logo></a>
                <span className="mb-3 mb-md-0">&copy; 2023 Company, Inc</span>
                </div>
                <p className='text-align-center'>Made by ShinjiX Copyright &copy; {date.getFullYear()}</p>
                <p className='display'><DateTime></DateTime></p>
                </footer>
            </div>
    )
}

export default Footer;