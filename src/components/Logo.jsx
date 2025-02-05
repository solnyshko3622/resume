import PropTypes from "prop-types";

const Logo = ({ invert = false }) => {
    return (
        <div className="flex gap-3 items-center mt-2">
            <img src="/src/assets/logo.svg" alt="logo" className={`w-10 h-10 ${invert ? 'invert' : ''}`} />
            <h2 className={`text-lg font-bold ${invert ? 'text-white' : 'text-black'}`}>Yukhnina Marya</h2>
        </div>
    );
};

Logo.propTypes = {
    invert: PropTypes.bool,
}


export default Logo;


