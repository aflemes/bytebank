Projeto básico simulando um sistema de banco desenvolvido em angular 10.1.6 contendo as funcionalidades:
-> Lista extrato
-> Transferência

Os dados estão sendo armazenados em um arquivo .json na pasta dados e obtitdos através de requisições GET/POST.
Para subir o server json utilizar o comando:
cd dados/
json-server --watch dados.json

Dependencias
npm install -g @angular/cli@10.1.6
npm install -g json-server