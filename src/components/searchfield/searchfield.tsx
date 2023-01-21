import "./searchfield.css";


export default function Searchfield() {
    return <div className="search">
        <div className="search-wrapper">
            <input  className="search__field" placeholder="Поиск по каталогу" type="text" />
            <img src="https://азбукаинтернета.рф/schoolbook/textbook/module_12/3.3.4.png" alt="" className="search__icon" />
        </div>
            
    </div>
}