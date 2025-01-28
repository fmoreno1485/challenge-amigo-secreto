// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Array para almacenar los nombres de amigos
let amigos =[];

//Funcion para agregar un amigo
function agregarAmigo(){
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
    //Validar que el campo no este vacio
    if (nombreAmigo === ""){
        alert("Por favor, inserte un nombre.");
        return; //Detiene la ejecucion de la funcion
    }
    //Validar que el nombre no este duplicado
    if(amigos.includes(nombreAmigo)){
        alert(`El nombre ${nombreAmigo} ya esta en la lista`);
        return;
    }
    //Agrega el nombre al array de amigos
    amigos.push(nombreAmigo);
    //Limpiar el campo de entrada
    inputAmigo.value = "";
    //Actualizar la lista en el HTML
    actualizarLista();
}

//Funcion para actualizar la lista de amigos en la interfaz
function actualizarLista(){
    const listaAmigos = document.getElementById('ListaAmigos');
    //Limpiar el contenido actual de la lista
    listaAmigos.innerHTML = ""; // Borra cualquier contenido previo dentro del contenedor de la lista
    //Recorrer el array con un ciclo for
    for (let i = 0; i <amigos.length; i++){
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

//Funcion para seleccionar un amigo aleatorio
function sortearAmigo(){
    //Validar que haya amigos disponibles
    if(amigos.lenth === 0){ //Compueba si el array 'amigos' esta vacio.
        alert("No hay amigos disponibles para sortear. Agrega al menos uno.");
        return;
    }

    //Genera un indice aleatorio
    const indiceAletorio = Math.floor(Math.random() * amigos.length); //Genera un numero aleatorio entre 0 y la longitud del array menos

    //Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAletorio]; //Usa el indice aleatorio para obtener un nombre del array.

    //Mostrar el resultado en el HTML
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}