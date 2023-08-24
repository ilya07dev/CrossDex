

export const mockTokenImage = '/logo.svg';

export function imgError(image:any) {
    image.currentTarget.onerror = null; // prevents looping

    image.currentTarget.src = '/logo.svg';
}