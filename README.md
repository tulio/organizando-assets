Organizando os assets com gruntjs
=================================

A ideia deste repositório é criar um pipe com as configurações de todas ferramentas que uso. Vai 
servir para facilitar na hora de configurar todas as tarefas que eu sempre uso, mesmo que o projeto
seja de um site estático e eu não esteja usando nenhum framework como o Ruby On Rails.


## Como Usar

Todas as dependências do projetos são listadas no arquivo `package.json`.
 O `*` significa que pode ser qualquer versão, quando for executado o comando
 `npm install` ele vai buscar a última, é possível especificar uma versão do 
 pacote, mas eu prefiro sempre a mais atual.

```json
	{
		"name": "organizando-assets",
		"version": "0.1.0",
		"devDependencies": {
			"grunt": "*",
			"grunt-contrib-jshint": "*",
			"grunt-contrib-watch": "*",
			"grunt-contrib-uglify": "*",
			"grunt-contrib-concat": "*",
			"grunt-contrib-sass": "*",
			"grunt-contrib-imagemin": "*"
		}
	}
```