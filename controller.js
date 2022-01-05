const express = require("express");
const cors = require("cors");

const model = require("./models");

let app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

let user = model.Usuarios;
let cachorros = model.Cachorros;

//cadastro
let promise = new Promise((resolve, reject) => {
  app.post("/create", async (req, res) => {
    let reqs = await user.create({
      nome: req.body.nome,
      senha: req.body.senha,
      email: req.body.email,
      cpf: req.body.cpf,
      cep: req.body.cep,
      endereco: req.body.endereco,
      telefone: req.body.telefone,
      cidade: req.body.cidade,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    promise.then((reqs) => {
      resolve(
        res.send(JSON.stringify("cadastrado"))
      );
    });
    promise.catch((err) => {
      console.log(error);
      res.send(JSON.stringify("erro"))
      reject(err);
    });
  });
});

//login

app.post('/login',async (req,res)=>{
  let response=await user.findOne({
      where:{email:req.body.email, senha: req.body.senha}
  });
  if(response === null){
      res.send(JSON.stringify('error'));
  }else{
      res.send(response);
  }
});

//verifica se o usuario já possui um cadastro


//cadastro dog

let promise2 = new Promise((resolve, reject) => {
  app.post("/createdog", async (req, res) => {
    let reqs = await cachorros.create({
      nome: req.body.nome,
      foto: req.body.foto,
      descricao: req.body.descricao,
      sexo: req.body.sexo,
      castrado: req.body.castrado,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    promise2.then((reqs) => {
      resolve(
        res.send(JSON.stringify("O cachorro foi cadastrado com sucesso!"))
      );
    });
    promise2.catch((err) => {
      console.log(error);
      reject(err);
    });
  });
});

let port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
  console.log("Servidor Rodando");
});
