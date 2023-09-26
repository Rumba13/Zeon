import Loading from "../../../shared/ui/loading/ui";


type PropsType = {
    title?:string
}

export function SearchPageTitle({title}:PropsType) {
    if(!title) {
        return <Loading/>
    }

    return <h2 className="search-page__title">{title}</h2>
}
