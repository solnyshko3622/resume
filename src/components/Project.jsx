import PropTypes from "prop-types";

const Project = ({img, number, name, description, link, reverse=false}) => {
    return (
        <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} justify-between`}>
            <div className="flex-4 mr-5 ml-5">
                <img className="rounded-lg" src={img}/>
            </div>
            <div className="flex flex-col flex-5 ms-7">
                <span className="font-extrabold  text-white mt-5 mb-3 space-x-4 text-4xl">{number}</span>
                <span className="font-bold text-white mb-3 space-x-4 text-3xl">{name}</span>
                <span className="text-zinc-400 mb-3 space-x-4 text-base">{description}</span>
            </div>
        </div>
    );
};

Project.propTypes = {
    img: PropTypes.any,
    name: PropTypes.string,
    link: PropTypes.string,
    reverse: PropTypes.bool,
    number: PropTypes.string,
    description: PropTypes.string,
}

export default Project;
