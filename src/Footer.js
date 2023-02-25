import './Footer.css';
import DateTime from './datetime';

const Footer = () => {
    const date = new Date();
    return (

        <footer className='extra-one'>
            <p>
                Made by ShinjiX Copyright &copy; {date.getFullYear()}
            </p>
            <p>Time Now: <DateTime></DateTime></p>
        </footer>
    )
}

export default Footer;