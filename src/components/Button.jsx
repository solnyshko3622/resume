import PropTypes from "prop-types";
import Resume from "../assets/resume.pdf"

const Button = ({children}) => {
    return (
        <a
            href={Resume}
            download="Резюме.pdf">
            <button className="rounded font-semibold px-5 py-4 flex gap-2 items-center text-white bg-black hover:bg-neutral-700">
                {children}
            </button>
        </a>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Button;
