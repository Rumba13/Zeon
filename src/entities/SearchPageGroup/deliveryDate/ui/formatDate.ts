export function formatDate(date?: Date) {
    return `${date?.getDay()}.${date?.getMonth()}.${date?.getFullYear()}`;
}