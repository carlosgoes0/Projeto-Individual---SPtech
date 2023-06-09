var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    usuarioModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function entrar(req, res) {
    var Email = req.body.emailServer;
    var Senha = req.body.senhaServer;
    if (Email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (Senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        
        usuarioModel.entrar(Email, Senha)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    console.log(req.body);
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var Nome = req.body.nome;
    var Contato = req.body.contato;
    var Cpf = req.body.cpf;
    var Estado = req.body.estado;
    var Email = req.body.email;
    var Senha = req.body.senha;

    // Faça as validações dos valores
    if (Nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
        console.log("Seu nome está undefined!");
    } else if (Contato == undefined) {
        res.status(400).send("Seu contato está undefined!");
            console.log("Seu contato está undefined!");
    } else if (Cpf == undefined) {
        res.status(400).send("Sua cpf está undefined!");
        console.log("Sua cpf está undefined!");
    } else if (Estado == undefined) {
        res.status(400).send("Sua estado está undefined!");
        console.log("Sua estado está undefined!");
    } else if (Email == undefined) {
        res.status(400).send("Sua email está undefined!");
        console.log("Sua email está undefined!");
    } else if (Senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
        console.log("Sua senha está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(Nome, Contato, Cpf, Estado, Email, Senha)
            .then(
                
                function (resultado) {

                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function doar(req, res) {

    var fkProjeto = req.params.fkProjeto;
    var valor = req.params.valor;
    var idUsuario = req.params.idUsuario;

 usuarioModel.doar(fkProjeto, valor, idUsuario)
          .then ((resultado) => {
            console.log(resultado);
            res.status(200).json(resultado);
          }) 

}

function buscarDoacao (req, res) {
    var idUsuario = req.params.idUsuario;
    usuarioModel.buscarDoacao(idUsuario)
        .then ((resultado) => {
            console.log(resultado);
            res.status(200).json(resultado);
        })

}


function dadosGraficos(req, res) {


    usuarioModel.dadosGraficos()
    .then ((resultado) => {
            console.log(resultado);
            res.status(200).json(resultado); 
})
}

module.exports = {
    entrar,
    cadastrar,
    listar,
    testar,
    doar,
    buscarDoacao,
    dadosGraficos
}