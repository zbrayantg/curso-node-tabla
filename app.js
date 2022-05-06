const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();
//console.log(process.argv);
console.log(argv);
console.log(`base: ${ argv.base }`);

/* const [, , arg3=5] = process.argv;
const [,base=5] = arg3.split('='); */

//console.log(base);
crearArchivo(argv.b, argv.l, argv.h)
    .then(archivo => console.log(archivo))
    .catch(err => console.log(err));


