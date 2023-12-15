
import woman from '../assets/woman_hero.png'
import { CTA } from "../components/CTA"


export function Hero() {
    return (
        <div className="m-auto top-0 fixed">  
            <div className="flex flex-row justify-normal gap-0 md:pl-12 xl:pl-32">
                <img src={woman} alt="" className="bg-auto max-h-[700px] z-10 hidden lg:block flex-1"/>
            

                <CTA />
            </div>
        </div>
    )
}
