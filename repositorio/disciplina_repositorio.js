class DisciplinaRepositorio {
    constructor() {
        this.disciplinas = [];
    }

    inserir(disciplina) {
        this.disciplinas.push(disciplina);
    }

    remover(codigo) {
        const indxDisciplinaARemover = this.pesquisarPorCodigo(codigo);

        if (indxDisciplinaARemover > -1) {
            this.disciplinas.splice(indxDisciplinaARemover, 1);
        }
    }

    listar() {
        return this.disciplinas;
    }

    inserirAlunoNaDisciplina(codigo, aluno) {
        const indxDisciplinaAListar = this.pesquisarPorCodigo(codigo);
        
        this.disciplinas[indxDisciplinaAListar].alunos.push(aluno);

        return aluno;
    }

    listarAlunos(codigo) {
        const indxDisciplinaAListar = this.pesquisarPorCodigo(codigo);
        return this.disciplinas[indxDisciplinaAListar].alunos;
    }

    pesquisarPorCodigo(codigo) {
        return this.disciplinas.findIndex(
            disciplina => disciplina.codigo === codigo
        );
    }
}