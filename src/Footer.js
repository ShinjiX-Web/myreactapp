import './Footer.css';

const Footer = () => {

    const today = new Date();

    return (

        <footer>
            <p>
                Made by <strong>ShinjiX</strong> Copyright &copy; {today.getFullYear()}
            </p>
            <p>Time Now: {today.getHours()}:{today.getMinutes()}:{today.getSeconds()}</p>
        </footer>

    )

}

export default Footer;