
//evento criar tarefa

const concluirTarefa = (evento) => {

    const botaoConclui = evento.target;
    const tarefaCompleta = botaoConclui.parentElement;

    tarefaCompleta.classList.toggle('done');
}



//botão conclui embaixo!


const BotaoConclui = () => {
    const botaoConclui = document.createElement('button'); /* cria um novo botao */

    botaoConclui.classList.add('check-button'); /* do tipo check button */
    botaoConclui.innerText = 'Concluir';
    botaoConclui.addEventListener('click', concluirTarefa);
    return botaoConclui;
}


// so precisamos exportar o botãoconclui


export default BotaoConclui;