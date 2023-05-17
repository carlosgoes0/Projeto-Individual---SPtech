CREATE DATABASE NovoCaminho;
USE NovoCaminho;


create table Empresa(
idEmpresa int primary key auto_increment,
nomeFantasia varchar(45),
razaoSocial varchar (45),
email varchar(45) not null,
telefone varchar(12),
cep char(9),
cnpj char(16) not null,
rua varchar(25),
numero varchar(8), 
complemento varchar (25)
);

desc Empresa;


create table Usuario(
idUsuario int auto_increment,
nome varchar(45),
email varchar(45) not null,
senha varchar(20) not null,
cpf char (12) not null,
fkEmpresa int,
constraint fkEmpresaUsuario foreign key (fkEmpresa) references Empresa(idEmpresa),
constraint pkComposta primary key (idUsuario, fkEmpresa)
);



insert into Empresa values
(null, '', '', '', '', '', '', '', '', null);

insert into Usuario values
(null, '', '', '', '', '');

insert into p values
(null, 'coca'),
(null, 'pepsi');

