const url = 'http://localhost:4000/clientes'

//crea un nuevo cliente
export const nuevoCliente = async cliente =>{
    try {
        await fetch(url,{
            //metodo POST es para crear un nuevo registro 
            method:'POST',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
}

// obtiene los clientes

export const obtenerClientes = async clientes =>{
    try {
        const resultado = await fetch(url);
        const clientes = await resultado.json();
        return clientes;          
    } catch (error) {
        console.log(error);
    }
}
