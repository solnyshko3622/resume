import PropTypes from "prop-types";

const EducationCard = ({logo, company, date, description}) => {
    return (
        <div className="border border-zinc-500 rounded-2xl p-6 bg-zinc-900 hover:bg-zinc-800 transition duration-300">
            <div className="flex items-center justify-between mb-4 flex-col sm:flex-row">
                <div className="flex items-center space-x-4">
                    <img
                        src={logo}
                        alt={`${company} logo`}
                        className="w-10 h-10 rounded-full"
                    />
                    <h2 className="text-xl font-semibold text-zinc-300 mr-4">
                        {company}
                    </h2>
                </div>
                <span className="text-sm text-zinc-400 sm:mt-10">{date}</span>
            </div>
            <p className="text-zinc-300 leading-relaxed">{description}</p>
        </div>
    )
}

EducationCard.propTypes = {
    logo: PropTypes.any.isRequired,
    company: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}


export default EducationCard;
