
export function randomColor(){
    const colorStr = Math.floor(Math.random()*0xFFFFFF).toString(16).toUpperCase();
    return colorStr.length===5?`#${colorStr}0`:`#${colorStr}`;
}
