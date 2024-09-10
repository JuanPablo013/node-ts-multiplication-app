import fs from 'fs';
import { yarg } from './config/plugins/args.plugin';

console.log( yarg.b );

const { b:base, l:limit, s:showTable } = yarg;

// const num = 5;

// const message = `Tabla del ${num} `;

// console.log( message );

// for (let i = 1; i <= 10; i++) {
//     const result = num * i;
//     console.log(num + ' x ' + i + ' = ' + result);
// }

// const baseYarg = yarg.b;
// const limitYarg = yarg.l;

let outputMessage = '';
// const base = 5;
// const headerMessage = `
// =============================
//     Tabla del ${ yarg.b }         
// =============================\n
// `;

const headerMessage = `
=============================
    Tabla del ${ limit }         
=============================\n
`;

// for( let i = 1; i <= 10; i++ ) {
//     outputMessage += `${ base } x ${ i } = ${ base * i }\n`;
// } 

// for( let i = 1; i <= yarg.l; i++ ) {
//     outputMessage += `${ yarg.b } x ${ i } = ${ yarg.b * i }\n`;
// }

for( let i = 1; i <= limit; i++ ) {
    outputMessage += `${ base } x ${ i } = ${ base * i }\n`;
}

outputMessage = headerMessage + outputMessage;

// if( yarg.s ) console.log(outputMessage);

if( showTable ) {
    console.log(outputMessage);
}

const outputPath = `outputs`;

fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`outputs/tabla-${ base }.txt`, outputMessage);
console.log('File created!');

// Grabar en el archivo de salida
// path: outputs/tabla-5.txt