export const timestampToLocalString = (timestamp: number): string => {
    const date = new Date(timestamp);

    return date.toLocaleString();
}