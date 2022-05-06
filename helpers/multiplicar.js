
const fs = require('fs');
const colors = require('colors');

const crearArchivo = (base = 5, listar = false, hasta = 10) => {
    return new Promise((resolve, reject) => {

        console.clear();
        let salida = '';
        let consola = '';

        for(let i = 1; i <= hasta; i ++){
            salida += `${base} x ${i} = ${base*i}\n`;
            consola += `${base} ${('x').green} ${i} ${('=').green} ${base*i}\n`;
        }
        
        if (listar){
            console.log(colors.blue('==================================='));
            console.log(`${colors.blue('=')}           ${colors.blue('Tabla del')} ${colors.blue(base)}           ${colors.blue('=')}`);
            console.log(colors.blue('==================================='));
            listar && console.log(consola);
        }
        
        
        /* fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
            if(err) throw err;
            console.log(`El archivo tabla-${base}.txt ha sido creado!`);
        }); */
        try{
            fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
            resolve(`El archivo tabla-${base}.txt ha sido creado!`);
        }
        catch(error){
            reject(error);
        }
    });
}


module.exports = {
    crearArchivo
};