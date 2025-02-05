import React from 'react';
import PropTypes from "prop-types";

const SocialIcon = ({icon, link}) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <div className="p-3 hover:invert border-2 bg-white rounded w-[48px] h-[48px]">
                <img src={icon} alt="соц сеть" width="48px" height="48px"/>
            </div>
        </a>
    );
};


SocialIcon.propTypes = {
    icon: PropTypes.any.isRequired,
    link: PropTypes.string.isRequired,
}

export default SocialIcon;
