export function formatTitle(manufacturer: string, type: string, batch: string) {
    return `${manufacturer ?? ""} ${type ?? ""} ${batch ?? ""}`;
}