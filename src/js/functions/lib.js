export const random = (min = 0, max = 1) => {
    return Math.random() * (max - min) + min;
}
export const loadImage = url => {
    return new Promise((response, reject) => {
        const image = new Image();
        image.addEventListener('load', event => resolve(image));
        image.addEventListener('error', event => reject(event));
        image.setAttribute('src', url);
        if(image.complete){
            response(image);
        }
    });
}