class DisciplinaRepositorio {
    constructor() {
        this.disciplinas = [];
    }

    inserir(disciplina) {
        this.disciplinas.push(disciplina);
    }

    remover(codigo) {
        const indxDisciplinaARemover = this.disciplinas.findIndex(
            disciplina => disciplina.codigo === codigo
        );

        if (indxDisciplinaARemover > -1) {
            this.disciplinas.splice(indxDisciplinaARemover, 1);
        }
    }

    listar() {
        return this.disciplinas;
    }

    inserirAlunoNaDisciplina(codigo, aluno) {
        const indxDisciplinaAListar = this.disciplinas.findIndex(
            disciplina => disciplina.codigo === codigo
        );
        
        this.disciplinas[indxDisciplinaAListar].alunos.push(aluno);

        return aluno;
    }

    listarAlunos(codigo) {
        const indxDisciplinaAListar = this.disciplinas.findIndex(
            disciplina => disciplina.codigo === codigo
        );

        return this.disciplinas[indxDisciplinaAListar].alunos;
    }
}