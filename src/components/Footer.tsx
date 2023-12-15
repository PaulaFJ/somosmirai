import logo from '../assets/logo_footer.png'

export function Footer() {
    return (
        <div className="fixed bottom-0 flex justify-center items-center w-full z-10 p-0 h-28 bg-footer-bg md:px-40">
            <div className="flex md:flex-row flex-col max-w-3xl">
                <div className="flex m-auto w-[100px] md:w-[400px] md:mr-14 justify-center md:justify-normal">
                    <img src={logo} alt="Somos Mirai" />
                </div>
                <div className="text-white border-l-2 pl-16 font-sans-thin text-md hidden md:block ">
                    Transformamos ideias em resultados! 
                    <br/>Estratégia, design, comunicação e web. Unindo talento e criatividade para levar sua empresa ao próximo nível.
                </div>
            </div>
        </div>
    )
}