//Ex1

var array1 = [17, 43, 8, 4, 97, 56, 29, 95];

array1.forEach( array1 => {
    if (array1 % 2 === 0) {
        console.log(`${array1} é par`)
    }  else {
        console.log(`${array1} é impar`)
    }
})

//Ex2

var array2 = [ 17, 43, 8, 4, 97, 56, 29, 3, 75, 34, 88, 82, 61, 59];

var filter = array2.filter( (valor) =>{
    return valor > 20 && valor
})

console.log(`Os números entre 20 e 80 são: ${filter}`);
