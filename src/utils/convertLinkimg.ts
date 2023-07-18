
export const convertLinkImg = (logo:string, address:string) => {
    return logo.length > 0 ? logo : `https://tokens.1inch.io/${address}.png`
}