export function formatCharacteristics(characteristics: any) {
    const characteristicsArray: string[] = [];

    for (const key in characteristics) {
        if (characteristics.hasOwnProperty(key)) {
            const characteristic = characteristics[key];
            characteristicsArray.push(characteristic)
        }
    }

    return characteristicsArray.join(", ")
}