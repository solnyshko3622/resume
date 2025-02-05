import Logo from "../components/Logo.jsx";
import Button from "../components/Button.jsx";
import DownloadIcon from "../assets/download.svg"

const Header = () => {
    return (
        <div className="container-small flex items-center justify-between">
            <Logo/>
            <Button>
                Resume
                <img src={DownloadIcon} alt=""/>
            </Button>
        </div>
    )
}

export default Header;
