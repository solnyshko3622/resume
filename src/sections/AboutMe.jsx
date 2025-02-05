import VariableWeightText from "../components/VariableWeightText.jsx";
import Banner from "../assets/banner2.svg";

const AboutMe = () => {
    return (
            <div className="container-section flex flex-col lg:flex-row md:flex-row justify-around sm:flex-col">
                <img  src={Banner} alt="" className="flex-1 mr-20"/>
                <div className="flex flex-col flex-2">
                    <VariableWeightText regularText="About" extraBoldText="Me"/>
                    <p className="text-gray-700 text-lg">Я Маша - девочка из города Сыктывкар. Активная, творческая, занимаюсь спортом, учусь. Занимаюсь программированием с 14 лет. Начала с курсов 1C по HTML+Js, потом на разных курсах занималась Python+Django, и после 11 класса поступила в НГУ, где начала уже плотненько изучать программирование. На 1 курсе учила алгосы на C. Второй курс почти полностью был посвящён Java, ООП, многопоточному программированию. Также на втором курсе я впервые познакомилась с ReactNative, мы писали на нём учебный проект про новосибирский зоопарк. Первый проект конечно получился не самым удачным, после этого я решила попробовать Flutter и написала на нём небольшой проект, но он не сильно мне зашёл. Летом после 2 курса решила попробовать React и он мне понравился, на нём я написала пару небольших проектов: магазинчик с кофе, и учебный-пет проект Digital Library. Также на 3 курсе я стала проходить курсы по JS, ТS. И сделала небольшой учебный проект снова с ReactNative аналог Untappd но про кофе. Ещё один проект написан на Django - система автоматизации для упрощения работы с гугл сервисами. Сейчас я продолжаю развиваться, пишу пет проекты, прохожу курсы.</p>
                </div>
            </div>
    );
};

export default AboutMe;
