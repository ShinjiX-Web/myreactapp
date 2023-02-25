import './Footer.css';

const Footer = () => {

    const date = new Date();
    const showTime = date.getHours()
        + ':' + date.getMinutes()
        + ":" + date.getSeconds();

    return (

        <footer>
            <p>
                Made by <strong>ShinjiX</strong> Copyright &copy; {date.getFullYear()}
            </p>
            <p>Time Now: {showTime}</p>
        </footer>

    )

}

export default Footer;