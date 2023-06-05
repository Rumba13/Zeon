type PropsType = {
    title: string
}

export function PageTitle({ title }: PropsType) { 
    return <h2 className="product-selection-page__title">{title}</h2>
}