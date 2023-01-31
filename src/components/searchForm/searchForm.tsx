import "./searchForm.css";


export default function searchForm() {
    return <div className="search-wrapper">
        <div className="search">
            <input  className="search__form" placeholder="Поиск по каталогу" type="text" />
            <img src="https://азбукаинтернета.рф/schoolbook/textbook/module_12/3.3.4.png" alt="" className="search__icon" /> {/*TODO:Download icon and make Icon component*/}
        </div>
            
    </div>
}