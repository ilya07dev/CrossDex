
export const shortName = (name:string) => {
    if(name.length > 10) return `${name.slice(0, 4)}...${name.slice(-4)}`
    return name
}