import Banner from "../assets/Banner.svg"
import SocialIcon from "../components/SocialIcon.jsx";
import TelegramIcon from "../assets/telegram-icon.svg";
import VKIcon from "../assets/vk-icon.svg";
import HHIcon from "../assets/HH-icon.svg";
import GithubIcon from "../assets/icon-git.svg";

let SocialData = [
    {
        icon: TelegramIcon,
        link: "https://t.me/solnyshko3622",
    },
    {
        icon: VKIcon,
        link: "https://vk.com/solnyshko3622",
    },
    {
        icon: HHIcon,
        link: "https://hh.ru/resume/4e5fc00eff0df238f40039ed1f353131583343",
    },
    {
        icon: GithubIcon,
        link: "https://github.com/solnyshko3622",
    }
]


const Hero = () => {
    return (
        <div className="container-section min-h-screen flex items-center justify-center">
            <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center sm:flex-col-reverse">
                <div className="w-full md:w-1/2 mb-12 md:mb-0">
                    <h1 className="text-4xl md:text-5xl mb-4">
                        Hello I'm <span className="font-bold">Marya Yukhnina.</span><br/>
                        <span className="font-bold">Frontend</span> Developer <br/>
                        Based in <span className="font-bold">Novosibirsk.</span>
                    </h1>
                    <p className="text-gray-700 mb-6">Я Юхнина Мария - студентка Нововсибирского государственного университета. Сейчас самостоятельно изучаю фронтенд разработку и ищу работу в IT.</p>
                    <div className="flex space-x-4">
                        {SocialData.map((item, index) => (
                            <SocialIcon icon={item.icon} link={item.link} key={index}/>
                        ))}
                    </div>
                </div>

                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src={Banner}
                        alt="Illustration"
                        className="w-3/4 md:w-full"
                    />
                </div>

            </div>
        </div>
    );
};

export default Hero;
