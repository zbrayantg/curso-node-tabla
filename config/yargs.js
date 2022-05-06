const argv = require('yargs')
        .option('b',{
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la base de la tabla de multiplicar'
        })
        .option('l',{
            alias: 'listar',
            type: 'boolean',
            default: false,
            describe: 'Lista la tabla de multiplicar en consola'
        })
        .option('h',{
            alias: 'hasta',
            type: 'number',
            default: 10,
            describe: 'Hasta que numero quieres la tabla de multiplicar'
        })
        .check( (argv, options) => {
            if (isNaN(argv.b)) {
                throw new Error('La base tiene que ser un número');
            }
            return true;
        })
        .argv;

module.exports = argv;