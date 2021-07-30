# casestone_backend

## **Para instalar as dependências do projeto:**
Execute o comando **yarn**

## **Para rodar o servidor de maneira local**
Execute o comando **yarn dev**

## **Para que o projeto funcione de maneira total**
É recomendável a instalação de docker ou rode o banco de dados (postgres) e mude os dados no ormconfig.js


# EndPoints

## Usuários
- Criação de usuário POST /users/signup
- Atualização de usuário PUT /users/update
- Autenticação/login na aplicação POST users/signin

## UsersComics -> para consumir essa rota é necessário um token de autorização gerado na rota de Login
- Criação de um Comic POST /comics
- Retornar Comic por id de usuario GET /comics
- Deletar comic por comic_id e user_id DELETE /comics

## UsersCharacters -> para consumir essa rota é necessário um token de autorização gerado na rota de Login
- Criação de um Comic POST /characters
- Retornar Comic por id de usuario GET /characters
- Deletar comic por comic_id e user_id DELETE /characters


## Requisições para api da marvel

### Characters
- Listar characters GET /marvel/characters
- Listar chharacters por nome GET /marvel/characters/:name
- Listar character por id GET /marvel/charactersId/:character_id

### Comics
- Listar comics por título GET /marvel/comics/:title
- List comics por Id GET /marvel/comicsId/:comic_id
