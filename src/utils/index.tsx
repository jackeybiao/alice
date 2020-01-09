import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale("ZH-cn");

export function randomColor(){
    const colorStr = Math.floor(Math.random()*0xFFFFFF).toString(16).toUpperCase();
    return colorStr.length===5?`#${colorStr}0`:`#${colorStr}`;
}

export function format(date = "") {
    return moment(date).format("YYYY年MM月DD日");
}

export function formatWeek() {
    return moment(new Date()).format("dddd");
}