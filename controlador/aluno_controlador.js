class AlunoControlador {

    constructor() {
        this.servico = new AlunoService();
    }

    inserir() {
        const nomeElemento = document.querySelector("#nome");
        const idadeElemento = document.querySelector("#idade");
        const matriculoElemento = document.querySelector("#matricula");
        const alunoInserido = this.servico.inserir(nomeElemento.value, Number(idadeElemento.value),
            matriculoElemento.value);
        const listaAlunosElemento = document.querySelector("#listaAlunos");
        if (alunoInserido) {
            this.inserirAlunoNoHtml(alunoInserido, listaAlunosElemento);
        }
    }

    inserirAlunoNoHtml(aluno, elementoDestino) {
        const alunoElemento = document.createElement("li");
        const buttonElemento = document.createElement("button");

        alunoElemento.textContent = `Nome: ${aluno.nome} - Idade: ${aluno.idade} - Matrícula: ${aluno.matricula} - `;
        alunoElemento.classList.add(`aluno${aluno.matricula}`);
        buttonElemento.textContent = 'Remover aluno';

        buttonElemento.addEventListener("click", () => {
            this.removerAluno(aluno.matricula);
        })

        alunoElemento.appendChild(buttonElemento);
        elementoDestino.appendChild(alunoElemento);
    }

    listarAlunosMenoresIdade() {
        const listaAlunosMenoresElemento = document.querySelector('#listaAlunosMenores');
        const alunosMenores = this.servico.listarMenoresIdade();
        alunosMenores.forEach(menor => this.inserirAlunoNoHtml(menor, listaAlunosMenoresElemento));
    }

    removerAluno(matricula) {
        const alunoElemento = document.querySelector(`.aluno${matricula}`);
        this.servico.remover(matricula);
        alunoElemento.parentNode.removeChild(alunoElemento);
    }

}
