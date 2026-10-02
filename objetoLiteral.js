const user = {
    nome: "Fernando",
    email: "Fernando@xaxa.com",
    nascimento: "2009/10/02",
    role: "estudantes",
    ativo: true,
    exibirInfos: function(){
        console.log(this.nome, this.email)
    }
}

const admin = {
    nome: "Mariana",
    email: "Mariana@.com",
    role: "admin",
    criarCurso(){
        console.log('Curso criado!')
    }
}

Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.distribuiInfos()

//user.exibirInfos()
//const exibir = user.exibirInfos
//exibir()
/*
const exibir = function(){
    console.log(this.nome)
}

const exibirNome = exibir.bind(user)
exibirNome()
exibir();
*/