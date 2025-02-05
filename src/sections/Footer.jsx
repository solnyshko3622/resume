import Logo from "../components/Logo.jsx";


const Footer = () => {
    return (
        <div className="bg-black">
            <div className="text-white container-small flex items-center justify-between">
                <Logo invert/>
                <p className="text-white">Developed with React</p>
            </div>
        </div>
    );
};

export default Footer;
