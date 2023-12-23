let listaSorteio = [];


function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    if (amigo.value == ''){
        alert('Digite um nome válido');
        amigo.value = ''
        return;
    }

    if (listaSorteio.includes(amigo.value.toUpperCase())) {
        alert(`O nome ${amigo.value} já foi inserido!`)
        amigo.value = ''
        return;
    } 
    let lista = document.getElementById('lista-amigos');
    listaSorteio.push(amigo.value.toUpperCase());

    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }
    amigo.value = '';
}

function sortear() {
    if (listaSorteio.length < 4) {
        alert ('Adicione pelo menos 4 participantes');
        return;
    }
    embaralha(listaSorteio);
    let sorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < listaSorteio.length; i++) {
        if ( i == listaSorteio.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + listaSorteio[i] + ' ==> ' + listaSorteio[0] + '<br>'
        } else {
            sorteio.innerHTML = sorteio.innerHTML + listaSorteio[i] + ' ==> ' + listaSorteio[i+1] + '<br>'
        }
    }
}

function reiniciar() {
    listaSorteio = [];
    document.getElementById('lista-amigos').innerHTML = '';

    document.getElementById('lista-sorteio').innerHTML  = '';
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);
        
        // guarda de um índice aleatório da lista
        const elemento = lista[indice - 1];
        
        lista[indice - 1] = lista[indiceAleatorio];
        
        lista[indiceAleatorio] = elemento;
    }
}