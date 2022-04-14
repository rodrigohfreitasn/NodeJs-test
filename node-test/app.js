const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Aqui você tem um exemplo de função Hellow World do Node.JS. O teste é: modificar/corrigir o método abaixo para que mostre corretamente a resposta da pergunta "Qual o seu nome completo?" carregada na página "index.html".')
});

app.put('/nomes/', (req, res) => {
    var nome =''
    var sobrenome = '';
    res.send('Nome Completo: '+nome + ' '+sobrenome);
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})