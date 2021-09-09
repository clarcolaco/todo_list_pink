import BotaoConclui from "./components/concluiTarefa.js";
import BotaoDeleta from "./components/deletaTarefa.js";



    //evento criar tarefas
    const criarTarefa = (evento) => {
        evento.preventDefault();

        const lista = document.querySelector('[data-list]');
        const input = document.querySelector('[data-form-input]');
        const valor = input.value;
        console.log(valor);

        const tarefa = document.createElement('li');
        tarefa.classList.add('task');
        const conteudo = `<p class="content"> ${valor}</p>`;

        tarefa.innerHTML = conteudo;

        tarefa.appendChild(BotaoConclui());
        tarefa.appendChild(BotaoDeleta());
        lista.appendChild(tarefa);


        input.value = "";

    }
    //botão criar tarefas
    const novaTarefa = document.querySelector('[data-form-button]');
    novaTarefa.addEventListener('click', criarTarefa);




