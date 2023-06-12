var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM tb_usuario;
    `;
  
    console.log("Executando a instrução SQL: \n" + instrucao);
    console.log("Executando a instrução SQL: \n" + instrucao2);
    return database.executar(instrucao, instrucao2);
}

function entrar(Email, Senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", Email, Senha)
    var instrucao = `
        SELECT * FROM tb_acesso join tb_usuario on fkUsuario = idUsuario WHERE Email = '${Email}' AND Senha = '${Senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
async function cadastrar(Nome, Contato, Cpf, Estado, Email, Senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", Nome, Contato, Cpf, Estado, Email, Senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO tb_usuario (Nome, Contato, Cpf, Estado) VALUES ('${Nome}','${Contato}','${Cpf}','${Estado}');
    `;
    var result = await database.executar(instrucao);
    var instrucao2 = `
        INSERT INTO tb_acesso (Email, Senha, fkUsuario) VALUES ('${Email}','${Senha}', ${result.insertId});
        `
    console.log("Executando a instrução SQL: \n" + instrucao);
    console.log("Executando a instrução SQL: \n" + instrucao2);
   return database.executar(instrucao2);
   
}

async function doar(fkProjeto, valor, idUsuario) { 
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function doar():", fkProjeto, valor);
    var instrucao = `
        Insert into tb_doacao (fkProjetos, valor, fkUsuarioDoacao) values (${fkProjeto}, ${valor}, ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

async function buscarDoacao(idUsuario) {

    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarDoacao():", idUsuario);
    var instrucao = `
         SELECT * FROM tb_doacao join tb_projetos on fkProjetos = idProjetos WHERE fkUsuarioDoacao = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

async function dadosGraficos() {

      console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarDoacao():");
    var instrucao = `
		SELECT Sum(valor) as valor, Nome as nome FROM tb_doacao join tb_projetos on fkProjetos = idProjetos group by Nome;`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    entrar,
    cadastrar,
    listar,
    doar,
    buscarDoacao,
    dadosGraficos
};