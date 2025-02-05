import PropTypes from "prop-types";

const SkillCard = ({skillIcon, skillName}) => {
    return (
        <div className="hover:invert max-w-[186px] max-h-[186px] border-2 rounded-md border-black aspect-square">
            <div className= "rounded-md bg-white aspect-square flex flex-col p-6 gap-8 items-center">
                <img src={skillIcon}  alt="Skill icon"/>
                <p className="text-lg font-bold">{skillName}</p>
            </div>
        </div>
    );
};

SkillCard.propTypes = {
    skillIcon: PropTypes.any.isRequired,
    skillName: PropTypes.string.isRequired
}

export default SkillCard;
