import './Footer.css';

const Footer = () => {

    const today = new Date();

    const date = new Date();
    const showTime = date.getHours()
        + ':' + date.getMinutes()
        + ":" + date.getSeconds();

    return (

        <footer>
            <p>
                Made by <strong>ShinjiX</strong> Copyright &copy; {today.getFullYear()}
            </p>
            <p>Time Now: {showTime}</p>
        </footer>

    )

}

export default Footer;