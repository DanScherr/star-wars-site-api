# star wars site api

###

***

# Sumário:

- [Introdução](#introdução)

# Introdução:

- ### **NodeJS**:
    - Uma plataforma JavaScript para construção de aplicações rápidas e escaláveis
    - Executa código JavaScript do lado do servidor


- ### **Npm**:
    - Instalador de pacotes do NodeJS


- ### **Criando um projeto e executando**:
    - ```$ ng {nome projeto}``` -> prepara o ambiente criando toda a estrutura de arquivos e instalando dependências com o npm.
    - ```$ cd {nome projeto}```
    - ```$ ng serve``` -> compila código e instancia um servidor web com o projeto.
        - **servidor em modo escuta**, ou seja, atualiza instantaneamente as mudanças efetuadas na aplicação.
    
- ### **Arquitetura modular do Angular**:
    - Modular: parecido ao microserviços. Pequenos pedaços de software dentro dele que se comunicam entre si. 
    - Para cada entidade de negócio, um novo módulo deve ser criado. 
        - Dentro do módulo de cada entidade, seguem as ações correspondentes de cada uma
    - Módulo Principal (applicação será executada através dele, o qual conterá outros módulos dentro dele):

- ### **TypeScript**:
    - Linguagem utilizada pelo Angular para o desenvolvimento.
    - [Check for more](https://www.typescriptlang.org/)

- ### **Webpack**:
    - Gerenciador de códigos para a nossa applicação.
    - Traduz os códigos de diferentes formatos para o navegador entender.

- ### **Estrutura do projeto**:
    - ./angular.json: arquivo de configuração do Angular CLI.
    - .editorconfig: configurações do editor
    - karma.config.js: configurações de execução de testes unitários
    - package.json: onde se encontram todas as dependências do projeto
    - protactor.config.js: testes de integração.
    - tsconfig: informações sobre a compilação.
    - tslint.json: validação de código.
    - ./e2e/: dir voltado para testes de integração.
    - ./node_modules/: contém todas as bibliotecas do projeto. Se interage a ele através dos comandos npm, o qual faz o gerenciamento.
    - ./src: source Root. todo codigo fonte da applicação
        - /app: onde ficará nosso código fonte. ***Módulo principal***. Para cada outro módulo (entidade de negócio), terá uma estrutura de 5 arquivos como segue abaixo:
            - /app.component.css: aplicação de estilo css ao componente.
                - {{}} -> atributo entre componente e view.
            - /app.component.html: o que vai renderizar na tela.
            - app.component.spec.ts: arquivo de teste.
            - app.component.ts: arquivo responsável por configurar a classe dos componentes (nome da tag que será importada em ./../../index.html e etc.)
            - app.module.ts: arquivo de configuração de módulo, o qual contem os componentes.
                - @NGModule:
                    - declaração do nosso componente exportada pelo app.component.ts que será renderizado na tela.
                    - imports
                        - outros módulos
                    - providers = serviços (normalmente utilizado nos componentes)
                    - bootstrap: informa que este é o modulo principal e que será executado no momento em que a página será executada.

        - /assets: imagens ou arquivos estáticos.
        - /environment: versão de produção ou desenvolvimento.
        - polyfills.ts: adicionar bibliotecas que servem para contornar erros entre outras coisas do projeto.

### Funcionamento:

Navegador -> URL -carrega> index.html -executa arquivo bootstrap do angular-> app.modules.ts -referencia-> app.component.ts -contém a configuração que a tag em index.html irá ser substituida pelo app.component.html.

