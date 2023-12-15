import { InstagramLogo, FacebookLogo, WhatsappLogo} from "@phosphor-icons/react";

export function Social() {
    return (
        <div className="flex flex-row  mx-auto md:ml-56 lg:ml-16 gap-4 mt-4">
            <a href="wa.me/+554396021863" target="blank"><WhatsappLogo size={32} color="gray" /></a>
            <a href="https://www.instagram.com/somos.mirai/" target="blank"><InstagramLogo size={32} color="gray" /></a>
            <a href="https://www.facebook.com/profile.php?id=61553627565865" target="blank"><FacebookLogo size={32} color="gray" /></a>
        </div>
    )
}