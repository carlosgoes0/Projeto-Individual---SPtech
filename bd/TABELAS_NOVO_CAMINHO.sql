-- drop DATABASE NovoCaminho;
CREATE DATABASE NovoCaminho;
USE NovoCaminho;


create table tb_usuario(
idUsuario int primary key auto_increment,
Nome varchar(45),
Contato char (11),
Cpf char(11),
Estado varchar(3)
);
select * from tb_usuario;

create table tb_acesso (
idAcesso int primary key auto_increment,
Email varchar(45),
Senha int,
fkUsuario int,
constraint fkUsuario foreign key (fkUsuario) references tb_usuario (idUsuario));

select * from tb_acesso;


create table tb_projetos (
idProjetos int primary key auto_increment,
Nome varchar(45),
MetaDoacoes decimal (5,3)
);

select * from tb_projetos;
insert into tb_projetos values 
(null, "Cuidar é Amar", 10.000),
(null, "Vínculos para a Vida", 10.000),
(null, "Mãos Estendidas", 10.000),
(null, "Novos Começos", 10.000);


create table tb_doacao (
idDoacao int primary key auto_increment,
Valor int,
fkUsuarioDoacao int,
fkProjetos int,
constraint fkUsuarioDoacao foreign key (fkUsuarioDoacao) references tb_usuario (idUsuario),
constraint fkProjetos foreign key (fkProjetos) references tb_projetos (idProjetos)
);
select * from  tb_doacao;
