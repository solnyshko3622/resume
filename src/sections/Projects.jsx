import VariableWeightText from "../components/VariableWeightText.jsx";
import Project from "../components/Project.jsx";
import Zoopunk from "../assets/Zoopunk2.svg";
import DigitalLibrary from "../assets/DigitalLibrary.png"
import BlackAndWhite from "../assets/BlackAndWhite.png"

const Projects = () => {
    return (
        <div className="bg-black">
            <div className="container-section gap-5 flex flex-col items-center px-0 md:px-4 lg:px-8">
                <VariableWeightText regularText="My" extraBoldText="Projects" invert/>
                <Project name="Zoopunk" img={Zoopunk} link="" number="01" description="Как-то мы гуляли с друзьями по зоопарку и решили что в качестве учебного проекта будет интересно сделать приложение о новосибирском зоопарке, в которм будет собрана краткая интересная информация о животных, квизы и викторины за которые можно получать ачивки, а также интерактивная карта с помощью которой пользователи смогут построить маршруты по интересным животным или пройти по заранее заготовленным, или посмотреть информацию о животных которые находятся рядом."/>
                <Project name="Digital library" img={DigitalLibrary} link="" number="02" description="Проект который помогает пользователю найти ту самую книгу. Книги разбиты по коллекциям, с помощью которых пользователь может найти книги какой-то категории, а также есть поиск по названию, теме, отрывку или автору, который учитывает опечатки пользователя и выдаёт в результате несколько книг, которые максимально подходят под запрос." reverse/>
                <Project name="Black and white" img={BlackAndWhite} link="" number="03" description="В новосибирске очень много кофеен с вкусным хорошим кофе, но иногда бывает сложно определиться с тем что сегодня хочется попробовать, а может хочется посетить новое место, для этого нужно наше приложение, оно хранит информацию о кофейнях, позволяет пользователю искать по названию, фильтрам, отзывам и рейтингу место и напиток, котрые подойдут ему сегодня. А так же запоминать любимые места и кофе."/>

            </div>
        </div>
    );
};

export default Projects;
