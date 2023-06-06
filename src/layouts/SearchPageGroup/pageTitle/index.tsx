import "./styles.scss";

type PropsType = {
    title: string
}

export function PageTitle({ title }: PropsType) { 
    return <h2 className="search-page__title">{title}</h2>
}