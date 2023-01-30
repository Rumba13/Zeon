import Icon from "../icon/icon";
import SocialNetwork from "../socialNetwork/socialNetwork";
import "./socialNetworks.css";

export default function SocialNetworks() {
    return <div className="social-networks-wrapper">
        <h2 className="social-networks__title">Мы в социальных сетях</h2>
        <div className="social-networks">
            <SocialNetwork link="https://www.facebook.com/ZeonGomel/" icon={<Icon sprite={{yOffset:-310}}/>} />
            <SocialNetwork link="http://vk.com/public74271436" icon={<Icon sprite={{yOffset:-48}}/>}  />
            <SocialNetwork link="https://www.instagram.com/zeon_by/" icon={<Icon sprite={{yOffset:-542}}/>}  />
            <SocialNetwork link="http://www.ok.ru/group/53138614583551" icon={<Icon sprite={{yOffset:-446}}/>}  />
            <SocialNetwork link="https://www.youtube.com/channel/UCaozapn6TjrSjtue6Xs0xxg" icon={<Icon sprite={{yOffset:-144}}/>}  />
        </div>
    </div>



}