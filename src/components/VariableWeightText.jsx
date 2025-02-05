import PropTypes from "prop-types";

const VariableWeightText = ({regularText, extraBoldText, invert=false}) => {
    return (
        <h2 className={`mt-5 mb-5 space-x-4 text-regular text-5xl ${invert ? 'invert' : ''}`}>
            {regularText}
            <span className="font-extrabold ms-4">{extraBoldText}</span>
        </h2>
    );
};

VariableWeightText.propTypes = {
    regularText: PropTypes.string.isRequired,
    extraBoldText: PropTypes.string,
    invert: PropTypes.bool
}


export default VariableWeightText;
