import mockToken from './mockToken.png'

export const mockTokenImage = mockToken;

export function imgError(image:any) {
    image.onerror = "";
    image.src = mockToken;
    return true;
}