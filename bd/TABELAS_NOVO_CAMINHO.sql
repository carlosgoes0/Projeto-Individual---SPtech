CREATE DATABASE NovoCaminho;
USE NovoCaminho;


create table tb_usuario(
idUsuario int primary key auto_increment,
Nome varchar(45),
Contato char (11),
Cpf char(11),
Estado varchar(3),
Email varchar(45),
Senha int
);

select * from tb_usuario;

create table tb_doacao (
idDoacao int primary key auto_increment,
Valor int,
fkUsuario int,
fkProjetos int,
constraint fkUsuario foreign key (fkUsuario) references tb_usuario (idUsuario),
constraint fkProjetos foreign key (fkProjetos) references tb_projetos (idProjetos)
);


create table tb_projetos (
idProjetos int primary key auto_increment,
Nome varchar(45)
);

