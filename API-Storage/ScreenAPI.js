import { RandomTopbarID } from './Random.js';
import { throwNewError } from './Console.js';




const container = [];

export const topbarInsetDIV = function(id) {
    let y
    if (container[id]) {
        y = document.getElementById(container[id])
    }


    if (!(id || (typeof id == 'string' || typeof id == 'number'))) {
        throwNewError('arg #1 (string or number exspected, got ' + typeof id + ')')
        return;
    }


    console.log(y, !(typeof y == 'undefined'))

    if ((typeof y == 'undefined')) {
        const randomID = 'r' + RandomTopbarID(10, container);
        const randomCSS = RandomTopbarID(20, container);


        


        container[id] = randomID;


        console.log(container[id])


        const topbarDIV = document.createElement('div');
        topbarDIV.id = randomID;
        topbarDIV.style.position = `sticky`;
        topbarDIV.style.top = `0`;
        topbarDIV.style.zIndex = 1000;
        topbarDIV.style.width = 'auto';
        topbarDIV.style.backgroundColor = `rgba(0, 0, 0, 0)`;
        topbarDIV.style.height = `auto`;
        topbarDIV.style.visibility = 'unset';
        topbarDIV.style.display = 'flex';
        topbarDIV.style.gap = '10px';


        document.body.appendChild(topbarDIV);


        return [topbarDIV, container[id]];
    } else {
        return [y, container[id]];
    }
}