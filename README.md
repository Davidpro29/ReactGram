# ReactGram
App semelhante ao instagram para profundar os conhecimentos em React!

Frontend: 
- Perfil para modificar os dados
- Postagem de fotos e legenda
- CRUD 
- Interação como curtida, comentário
- Busca

Backend:
- Nodejs
- Express
- MongoDb com mongoose, ODM para não-relacional
- Validações para o login

Inicialização do projeto:
bcryptjs
cors
dotenv 
express
express-validator 
jsonwebtoken 
mongoose 
multer

Validações no postman:<br>
![gramValidacaoCodigo](https://user-images.githubusercontent.com/89535654/182633865-f5e52bab-09b3-4017-8056-3ac19bf6ea63.png)
![gramValidacaoPostman](https://user-images.githubusercontent.com/89535654/182633330-37f0354c-99bf-40af-81b7-4a233661c69e.png)

O que eu fiz e aprendi?
PROTEÇÃO DE AUTENTICAÇÃO
- Criado middlewares para bloquear usuário que quer acessar alguma rota mas não é possível pela falta de autenticação e validação do token.
- Função para validar usuário autenticado

- Middlewares de upload de imagens com multer 
- Ipload de imagens somente em png ou jpg

