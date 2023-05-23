# Projeto Back-end "LeguariBooks Server"

### Criação de Servidor de Dados para o  projeto front-end AluraBooks

*******

## Instruções da criação do Server
- `node.js`
- `npm init`


## Dependências

`npm install express`
`npm install nodemon -g`


> **Note**: Comando para execução do projeto

`nodemon app.js`

*******
### API
- Resumidamente quando o front-end solicita algum dado a API retorna esse dados após um determinado tempo.

*******

# Estruturação deste projeto node.js

## Router

- Todas as APIs possuem rotas, uma rota é uma ligação entre um método HTTP, uma URL e uma função. Os routers têm a responsabilidade de direcionar o código para o local certo.

## Controladores

- Já os controladores têm a responsabilidade de retornar status e respostas. Dessa maneira, o projeto fica mais organizado.

## Serviços

- Conexões com dados externos(por exemplo: leitura de JSON, banco de dados).

*******

# Fillesystem

 - O fs é uma ferramenta para manipular arquivos do JavaScript, inserir/escrever pela função fs.writeFileSync() e ler  pela função fs.readFileSync() os dados do json.
 - O dado é inserido de modo permanente no JSON.
