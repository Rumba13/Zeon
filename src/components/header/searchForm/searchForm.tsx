import Icon from "../../icon/icon";
import "./searchForm.scss";
import { ICONS } from "../../../images/images";


export default function searchForm() {
    return <div className="search-wrapper">
        <div className="search">
            <input  className="search__form" placeholder="Поиск по каталогу" type="text" />
            <Icon icon={ICONS.search}/>
        </div>
            
    </div>
}