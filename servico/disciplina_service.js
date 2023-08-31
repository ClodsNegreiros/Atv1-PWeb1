class DisciplinaService {
    constructor() {
        this.repositorio = new DisciplinaRepositorio();
    }

    inserir(codigo, nome) {
        const codigoPesquisado = this.pesquisarPorCodigo(codigo);
        if (codigoPesquisado.length > 0) {
            alert('Disciplina já cadastrada! A Disciplina que você está tentando inserir já está cadastrada.');
            throw new Error('Aluno já cadastrado!');
        }

        const disciplinaNova = new Disciplina(codigo, nome);
        
        this.repositorio.inserir(disciplinaNova);
        return disciplinaNova; 
    }

    pesquisarPorCodigo(codigo) {
        return this.repositorio.listar().filter(
            disciplina => disciplina.codigo === codigo
        );
    }

    remover(codigo) {
        this.repositorio.remover(codigo);
    }

    inserirAlunoNaDisciplina(codigo, aluno) {
        return this.repositorio.inserirAlunoNaDisciplina(codigo, aluno);
    }

    listarAlunos(codigo) {
        this.repositorio.listarAlunos(codigo);
    }

}