
export const formatDate = (timeStamp:number) => {
    const date = new Date(timeStamp);

    const options = {
        month: "short",
        day: "2-digit",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: false,
    } as const;
    return date.toLocaleString("en-US", options).replace(/,/g, "");
}