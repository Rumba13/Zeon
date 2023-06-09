import "./styles.scss";

type PropsType = {
    manufacturer: string,
    guaranteeMonths: number,
    batch: string,
}

export function ManufacturerInfo({ guaranteeMonths, manufacturer, batch }: PropsType) {
    return <div className="manufacture-info">
        <span className="manufacturer-info__manufacturer">Производитель: {manufacturer}</span>
        <span className="manufacturer-info__guarantee">Гарантия:{guaranteeMonths} мес.</span>
        <span className="manufacturer-info__batch-number">Парт. номер:{batch}</span>
    </div>
}