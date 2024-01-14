//Digitar atividade no campo de input
// Clicar no botao para inserir atividade
//pegar valor inserido no input e inserir em uma variavel
// Mostrar valor na tela
//adicionar opção de deletar valor
//adicionar opção de marcar como feito

let input = document.querySelector('#input_box');
let addBtn = document.querySelector('.addButton');
let atividades_container = document.querySelector('.lista_atividades');



//Evento de clicar no botao para inserir atividade na lista
addBtn.addEventListener('click', () => {
    if (input.value.trim() == ""){
        alert('Digite algo');
    } else{
        //inserindo o valor do input como parametro para ser executado na função de adicionar atividades na lista.
        adicionandoAtividade(input.value);
        input.value =""
    }
})



//adicionando atividade na lista
function adicionandoAtividade (texto){
    //criando a div para depois inserir a lista/atividade e o botao
    let divTodo = document.createElement('div');

    //criando uma lista/atividade
    let atividade = document.createElement('li')
    atividade.classList.add('list_style')
    atividade.innerText = texto;

    //criando botao de delete
    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add('deleteBtn')
    deleteBtn.innerText = 'Delete';

    //colocando atividade e delete button como filhos da div;
    divTodo.appendChild(atividade);
    divTodo.appendChild(deleteBtn);

    // Inserindo div como filha do container para aparecer na pagina
    atividades_container.appendChild(divTodo);

    salvarDados();
    
}

// removendo a atividade e adicionando efeito de riscado na atividade feita
document.addEventListener('click',(evento) =>{
    const targetEvent = evento.target;
    const parentEvent = targetEvent.closest('div');
    // Deletando atividade
    if (targetEvent.classList.contains('deleteBtn')){
        parentEvent.remove();
        salvarDados();
    }
    //riscando atividade
    if (targetEvent.classList.contains('list_style')){
        targetEvent.classList.toggle('checked');
        salvarDados();
    }
})

function salvarDados (){
    localStorage.setItem('dados', atividades_container.innerHTML);
};

function mostraDadosSalvos(){
    atividades_container.innerHTML = localStorage.getItem('dados');
}
mostraDadosSalvos();

