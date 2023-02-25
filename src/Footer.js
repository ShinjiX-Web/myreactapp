import './Footer.css';
import DateTime from './datetime';

const Footer = () => {
    const date = new Date();
    return (

        <footer>
            <p>
                Made by <strong>ShinjiX</strong> Copyright &copy; {date.getFullYear()}
            </p>
            <p>Time Now: <DateTime></DateTime></p>
        </footer>

    )


}


export default Footer;