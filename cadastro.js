//Prova A1 aluna: Geovana Cassimiro de Assis; RA:82117902.
const express = require("express");
const app = express ();
const bodyParser = require ("body-parser");//Interpretador
app.use (bodyParser.json());


//atributos: IdProd, NomeProd, Prec

id = 2;

let produtos = [
    {
        idProd: 1,
        "nome": "Caneta",
        "preco": "2,50",
},
{
        idProd: 2,
        "nome": "Regua",
        "preco": "2,50",
},
];

//os verbos utilizados devem ser POST, GET, PUT e DELETE

app.get('/', function(req,res){//obtém dados.
  
    res.status(200).send("Cadastro de Produtos realizado")
    
});

app.get('/produtos', function(req,res){
    console.log("Lista de produtos");
    res.status(200).json(produtos) // 200;requisição foi atendida com sucesso.
});

app.post('/produtos', function(req,res){
    const elemento = {
    idProd: produtos.length +1,
    nome: req.body.nome,
    preco: req.body.preco,
    };
    produtos.push(elemento);
    res.status(201).json(elemento);//201; A requisição foi atendida com sucesso e resultou na criação de um novo Id.
});

app.put('/produtos', function(req,res,net){
    produtos.forEach((produto)=>{
        if (produto.idProd === req.body.id){
            (produto.nome = req.body.idProd),
            (produto.preco = req.body.preco);
        }
    })
    res.status(200).end();
});

app.delete('/produtos', function(req,res,next){
    let indice = produtos.findIndex((obj)=> obj.idProd == req.body.idProd);
    if(indice >=0){
        produtos.splice(indice, 1);
        res.status(200).json(produtos);
    }
    else{
        res.status(204).end();//erro
    }
});

app.listen(3022,function(){
    console.log("servidor rodando");
})
