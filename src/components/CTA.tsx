import { Social } from "./Social"
import gear_down from '../assets/engrenagem_baixo_menor.png'
import logo from '../assets/logo_hero2.png'

export function CTA() {
    return (
        <div className="flex flex-col mx-auto ">           
            
            <img src={logo} alt="" className="md:max-w-2xl relative lg:-ml-24" />

            <h1 className="text-5xl font-sans-thin text-start -mt-12 md:-mt-28 mx-auto lg:ml-24">
                Em breve <br />estaremos

                <p className="font-sans font-bold text-transparent bg-clip-text bg-onair_bg">no ar</p>
  
            </h1>

            <div className="w-[250px] relative mt-12 ml-24 md:mx-auto lg:ml-12">
                <img src={gear_down} alt="" className="max-w-[120px] absolute -left-24 -top-6"/>
                <div className="bg-[#47a783] max-w-[200px] px-6 py-2 rounded-xl text-white font-sans-thin text-end">site em construcao</div>
            </div>

            <Social />
               
        </div>
    )
}