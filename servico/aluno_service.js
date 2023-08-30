class AlunoService {
    constructor() {
        this.repositorio = new AlunoRepositorio();
    }

    inserir(nome, idade, matricula) {
        const alunoPesquisado = this.pesquisarPorMatricula(matricula);
        if (alunoPesquisado.length > 0) {
            alert('Aluno já cadastrado! O aluno que você está tentando inserir já está cadastrado.');
            throw new Error('Aluno já cadastrado!');
        }

        if (idade < 18) {
            alert('Aluno menor de idade! Não é permitido o cadastro de alunos menores de idade.')
            throw new Error('Não é permitido o cadastro de alunos menores de idade.');
        }

        const alunoNovo = new Aluno(nome, idade, matricula);
        this.repositorio.inserir(alunoNovo);
        return alunoNovo;
    }

    pesquisarPorMatricula(matricula) {
        return this.repositorio.listar().filter(
            aluno => aluno.matricula === matricula);
    }

    remover(matricula) {
        this.repositorio.remover(matricula);
    }

    listarMenoresIdade() {
        return this.repositorio.listar().filter(aluno => aluno.idade < 18);
    }
}
