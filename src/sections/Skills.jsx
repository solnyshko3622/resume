import VariableWeightText from "../components/VariableWeightText.jsx";
import SkillCard from "../components/SkillCard.jsx";
import GitIcon from "../assets/icon-git.svg";
import JSIcon from "../assets/icon-javscript.svg";
import ReactIcon from "../assets/icon-react.svg";
import JavaIcon from "../assets/icon-java.svg";
import PythonIcon from "../assets/icon-python.svg";
import CIcon from "../assets/icon-c.svg";

const Skills = () => {
    return (
        <div className="container-section gap-5 flex flex-col items-center px-0 md:px-4 lg:px-8">
            <VariableWeightText regularText="My" extraBoldText="Skills"/>
            <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 grid-flow-row gap-4">
                <SkillCard skillIcon={GitIcon} skillName="Git"/>
                <SkillCard skillIcon={JSIcon} skillName="JavaScript"/>
                <SkillCard skillIcon={ReactIcon} skillName="React"/>
                <SkillCard skillIcon={ReactIcon} skillName="ReactNative"/>
                <SkillCard skillIcon={JavaIcon} skillName="Java"/>
                <SkillCard skillIcon={PythonIcon} skillName="Python"/>
                <SkillCard skillIcon={CIcon} skillName="C"/>
            </div>
        </div>
    );
};

export default Skills;
