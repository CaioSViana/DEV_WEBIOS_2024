//Ex1

var array1 = [17, 43, 8, 4, 97, 56, 29, 95];

function imparpar(item){
    if (item % 2 === 0) {
        console.log(`${item} é par`)
    }  else {
        console.log(`${item} é impar`)
    }
}

array1.forEach(imparpar)

//Ex2

var array2 = [ 17, 43, 8, 4, 97, 56, 29, 3, 75, 34, 88, 82, 61, 59];

var filter = array2.filter( (valor) =>{
    return valor > 20 && valor < 80
})

console.log(`Os números entre 20 e 80 são: ${filter}`);
