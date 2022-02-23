import _ from "lodash"
import "./style.css";
import printMe from "./print";
// import Logo from "./logo.png"
function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
    element.innerHTML = _.join(['hello', 'webpack'], ' ')
    element.classList.add('hello');
    // const myLogo = new Image();
    // myLogo.src = Logo;
    // element.appendChild(myLogo);

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);
    return element;
}

document.body.appendChild(component());