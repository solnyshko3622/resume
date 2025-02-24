import VariableWeightText from "../components/VariableWeightText.jsx";
import EducationCard from "../components/EducationCard.jsx";
import NSULogo from "../assets/NSULogo.svg";
import StepicLogo from "../assets/stepicLogo.svg";
import FreeCodeCampLogo from "../assets/free-code-camp-svgrepo-com.svg";

const Education = () => {
    return (
        <div className="bg-black">
            <div className="container-section gap-5 flex flex-col items-center px-0 md:px-4 lg:px-8">
                <VariableWeightText regularText="My" extraBoldText="Education" invert/>
                <div className="grid grid-flow-row gap-y-8">
                    <EducationCard  logo={NSULogo} date="September 2022 - May 2026" company="NSU" description="Обучаюсь в НГУ на направлении Компьютерные науки и системотехника. В рамках программы изучаю алгоритмы, структуры данных, C, Java, а так же делаю учебные проекты на React, ReactNative, Django."/>
                    <EducationCard  logo={StepicLogo} date="September 2024 - December 2026" company="Stepic" description="Прошла курсы по JavaScript и TypeScript на платформе Stepic. Освоила фундаментальные концепции современного JavaScript: работа с переменными, функциями, массивами и объектами, управление потоком выполнения, взаимодействие с DOM и событиями, а также основы ООП и асинхронного программирования. В курсе по TypeScript изучила строгую типизацию, интерфейсы, дженерики и работу с React и Redux приложениями. Закрепила знания с помощью практических заданий и выполнения нескольких проектов."/>
                    <EducationCard  logo={FreeCodeCampLogo} date="February 2025 - March 2025" company="FreeCodeCamp" description="Прошла курс Responsive Web Design Certification от freeCodeCamp, в рамках которого улучшила понимание ключевых технологий для создания адаптивных и доступных веб-страниц. В ходе обучения вспомнила основы HTML и CSS. Выполнила несколько практических проектов, включая создание сайта с фотографиями котиков для освоения базовых концепций HTML и CSS, а также более сложные задания, такие как разработка пингвина с использованием современных техник, включая CSS-переменные, и создание сайта с тестами с учетом лучших практик доступности (accessibility). Кроме того, научилась создавать адаптивные веб-страницы, которые корректно отображаются на различных устройствах, используя Flexbox для создания фотогалереи и CSS Grid для верстки макета журнальной статьи. Этот курс позволил мне развить навыки верстки, работы с современными инструментами веб-разработки и понимание принципов создания доступных и адаптивных пользовательских интерфейсов."/>
                </div>
            </div>
        </div>
    );
};

export default Education;
