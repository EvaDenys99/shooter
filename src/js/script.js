{
    console.log("Game started");

    const $canvas = document.querySelector(`#canvas`),
        ctx = $canvas.getContext(`2d`);

    let catalog = {};

    let obj = {};
    let key = 'propnaam';
    let value = 'de waarde voor de property';
    obj[key] = value; 

    const init = () => {
        console.log("hello");
    };

    init();
}