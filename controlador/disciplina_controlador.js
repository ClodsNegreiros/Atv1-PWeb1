class DisciplinaControlador {
    
    constructor() {
        this.servico = new DisciplinaService();
    }

    inserir() {
        const codigoElemento = document.querySelector('#codigo');
        const nomeElemento = document.querySelector('#nome');
        const listaDisciplinaElemento = document.querySelector('#listaDisciplinas');

        const disciplinaInserida = this.servico.inserir(codigoElemento.value, nomeElemento.value);

        if (disciplinaInserida) {
            this.inserirNoHtml(disciplinaInserida, listaDisciplinaElemento);
        }
    }

    inserirNoHtml(disciplina, elementoDestino) {
        const disciplinaElmento = document.createElement('li');
        
        disciplinaElmento.innerHTML = `
        <div>
            Código: ${disciplina.codigo} - Nome: ${disciplina.nome}
        </div>
        <input class="input-disciplina${disciplina.codigo}" type="text">
        <button class="button-disciplina${disciplina.codigo}">Inserir aluno</button>
        <div>
            Lista de Alunos: ${disciplina.alunos}
            <ol id="listaAlunos">
            </ol>
        </div>
        `;
        disciplinaElmento.classList.add(`disciplina${disciplina.codigo}`);
        
        elementoDestino.appendChild(disciplinaElmento);

        const buttonDisciplina = document.querySelector(`.button-disciplina${disciplina.codigo}`);

        buttonDisciplina.addEventListener('click', () => {
            let aluno = this.inserirAlunoNaDisciplina(disciplina.codigo);
            console.log(aluno);
            this.atualizaListaHtml(aluno);
        })
    }

    atualizaListaHtml(aluno) {
        const alunoElemento = document.createElement('li');
        const alunosElemento = document.querySelector('#listaAlunos');
        alunoElemento.textContent = `${aluno}`;

        alunosElemento.appendChild(alunoElemento);
    }

    inserirAlunoNaDisciplina(codigo) {
        const alunoElemento = document.querySelector(`.input-disciplina${codigo}`);
        return this.servico.inserirAlunoNaDisciplina(codigo, alunoElemento.value);
    }

    listarAluno(codigo) {
        this.servico.listarAlunos(codigo);
    }
}