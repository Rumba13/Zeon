import "./socialNetworks.scss";
import SocialNetwork from "./socialNetwork/socialNetwork";
import Sprite from "../sprite/sprite";

export default function SocialNetworks() {
    return <div className="social-networks">
        <h2 className="social-networks__title">Мы в социальных сетях</h2>
        <div className="social-networks-list">
            <SocialNetwork link="https://www.facebook.com/ZeonGomel/" icon={<Sprite yOffset={-310}/>} />
            <SocialNetwork link="http://vk.com/public74271436" icon={<Sprite yOffset={-48}/>}  />
            <SocialNetwork link="https://www.instagram.com/zeon_by/" icon={<Sprite yOffset={-542}/>}  />
            <SocialNetwork link="http://www.ok.ru/group/53138614583551" icon={<Sprite yOffset={-446}/>}  />
            <SocialNetwork link="https://www.youtube.com/channel/UCaozapn6TjrSjtue6Xs0xxg" icon={<Sprite yOffset={-144}/>}  />
        </div>
    </div>



}