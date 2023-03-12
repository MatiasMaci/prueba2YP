fetch('http://127.0.0.1:5500/prueba2.json').then((response) => response.json()).then((prueba2) => { 
    const edadesprueba2 = prueba2.map((prueba) => prueba.Nombre);
    console.log(JSON.stringify(edadesprueba2));
});
