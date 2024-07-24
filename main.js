function saludar(sexo) {
    let h = 'hombre';
    let m = 'mujer';

    if (sexo === 'h'){
        return 'Hola, ${h}';
    } else if (genero === 'm'){
        return 'Hola, ${m}';
    } else {
        return 'Hola, desconocido'
    }
}

console.log(saludar(h))