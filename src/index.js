// import _ from "lodash"
// import "./style.css";
// import printMe from "./print";
// import Logo from "./logo.png"
// function component() {
    // const element = document.createElement('div');
    // const btn = document.createElement('button');
    // element.innerHTML = _.join(['hello', 'webpack'], ' ')
    // element.classList.add('hello');
    // const myLogo = new Image();
    // myLogo.src = Logo;
    // element.appendChild(myLogo);

    // btn.innerHTML = 'Click me and check the console!';
    // btn.onclick = printMe;
    // element.appendChild(btn);
    // return element;
// }

// document.body.appendChild(component());


async function getComponent () {
    //之所以需要 default，是因为 webpack 4 在导入 CommonJS 模块时，将不再解析为 module.exports 的值
    const element = document.createElement('div');
    const { default: _ } = await import('lodash');
    element.innerHTML = _.join(['hello', 'webpack', 'by async await'], ' ')

    return element;

    // return import('lodash').then(({default: _}) => {
    //     const element = document.createElement('div');
    //     element.innerHTML = _.join(['hello', 'webpack'], ' ')
    //     return element;
    // }).catch((error) => 'An error occurred while loading the component');
}

getComponent().then((component) => {
    document.body.appendChild(component);
})