import "./manufacturerInfo.scss";

type PropsType = {
    manufacturer: string,
    guaranteeInMonths: number,
    batchNumber: string,
}

export default function manufacturerInfo({ guaranteeInMonths, manufacturer, batchNumber }: PropsType) {
    return <div className="manufacture-info">
        <span className="manufacturer-info__manufacturer">Производитель: {manufacturer}</span>
        <span className="manufacturer-info__guarantee">Гарантия:{guaranteeInMonths} мес.</span>
        <span className="manufacturer-info__batch-number">Парт. номер:{batchNumber}</span>
    </div>
}