# Bot de automação de postagem para o Threads
![PyPI - Python Version](https://img.shields.io/pypi/pyversions/spotify-recommender-api?style=plastic)
![GitHub repo size](https://img.shields.io/github/repo-size/777freezy/Bot-Threads)
![GitHub last commit](https://img.shields.io/github/last-commit/777freezy/Bot-Threads?style=plastic)

<br>

<img src='https://static01.nyt.com/images/2023/07/07/multimedia/07THREADS-LOGO-zmkv/07THREADS-LOGO-zmkv-videoSixteenByNine3000.jpg' width='60%'>

- [Caso de uso](#use-case)
- [Setup](#setup)
- [Packages used](#packages-used)
- [Contribution Rules](#contributing)


## Use Case
 - Por favor, leia aqui para saber o se o bot pro ajuda-los. Não pule essa parte ;(
 - Como o Threads acabou de ser lançado, existem poucos bots de automação compatíveis com ele. Então, pensando nisso, eu decidi criar um bot de automação de postagem com o intuito de permitir que criadores de conteúdo agendem suas postagens e automatizem suas vidas!
 - Como dito a cima, a ideia é automatizar postagem no treads. O sistema pode ser usado para empresas que querem automatizar postagem relacionadas a promocões, e pacotes lançamento sem precisar que tenha uma pessoa cuidando disso. Pois o bot vai fazer sozinho.
 - a ideia é que no futuro o bot tenha sistema de contagem de seguidores, automoderacão como responder postagems e tirar duvidas. o sistema de tirar duvidas deria mais utlizado por empresas que tem uma rede de atendimento no Threads. 




## Setup

### Requirements:
  - Typescript e Nodejs instalados<br>
 O ideal é ter o nodeJs18 instalado (https://nodejs.org/en), e o TypeScript na versão 5.1.6. Usar versões mais antigas podem causar em bugs na compilacão do codigo e execução do bot.
  - Conexão a uma rede de internet<br>
Como o bot usa a API do Threads para se comunicar com o sistema, é necessario ter uma conexão a internet para executar o bot e instalar os pacotes.
  - <strong>conta no Threads</strong><br>
 como é obvio, você também tem que ter uma conta no Threads para realizar as postagens e configurar no bot.
 
  - ### Instalando Pacotes<br>

  -NPM
~~~
  npm install
~~~
-yarn
~~~
yarn
~~~


### Startando o bot
  - antes de ligar o bot abra o arquivo (start.ts) e coloque o usuario do Treads e senha de login nos campos. )<br>

  --- Para pegar o usuario, vc apenas precisa colocar o usuario do seu Treads e a senha que usa para acessar a conta. Para que o bot consiga acessar o sistema de postagem do Treads <br>
 
## Codigo
 - start.ts
~~~typescrit 
 export const threadsAPI = new ThreadsAPI({
  username: 'user do Threads',
    password: 'senha da conta',
  });
  // aqui vc coloca o ser usuario do Treads

~~~
 - PostData.ts
~~~typescrit
const cron = require('node-cron');


export const PostWithData = (dayOfWeeek:string, hour: string):string => {

    const deyWeek: { [key: string]: string } = {
        'domingo': '0',
        'segunda': '1',
        'terça': '2',
        'quarta': '3',
        'quinta': '4',
        'sexta': '5',
        'sábado': '6'
    }

    const [hora, minuto] = hour.split(':')

    return `${minuto} ${hora} * * ${deyWeek[dayOfWeeek.toLowerCase()] || '*'} `
}

// aqui é a funcão que o bot usa para pegar o dia da semana e horario e converter para um valor que o framwork de agendamento usa.
~~~typescript

let messageData = { text: '', img: '' }

const CLI = async () => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('O que deseja postar?', (text: string) => {
        rl.question('Deseja postar junto com uma imagem? (insira o link da img)', (img: string) => {
            messageData.text = text;
            messageData.img = img;

            rl.question('Qual dia da semana você deseja postar? (domingo, segunda, etc.) ', (dayOfWeek: string) => {
                rl.question('Qual vai ser o horario da postagem?  em  formato de 24 horas tipo 14:00', (hour: string) => {
                    const cronTime = PostWithData(dayOfWeek, hour);
                    cron.schedule(cronTime, () => {
                        if (img.trim() !== '') {
                            Message(messageData.text, messageData.img)
                            console.log('Postado com sucesso!')
                        } else {
                            Message(messageData.text)
                            console.log('Postado com sucesso!')
                        }
                    });
                    rl.close();
                })
            });
        });
    });
}
nessa função é a que usamos para criar um nenua de selecão no terminal usando o redline, e node-cron para agendar a publicação
~~~

## Packages used
 - Node-cron
~~~npm
npm install node-cron
~~~
 - redline
~~~npm
npm install redline
~~~
 - ThreadsAPI
~~~npm
npm install threads-api

~~~
 - Typescript (ts)
 - javaScript (js)
 - node-cron(cron)
 - redline (rl)
 - ThreadsAPI
 

# Contributing
Bem, como é um bot simples. Toda a contribuição é bem vinda, Mas segue um exemplo do foi subir um pull request seguir o exemplo:


## PR Template
 O Quê: <br>
Uma descrissão das melhorias que acha necessario
 PORQUE: <br>
Uma explicação de pq acha necessario, ou alguma melhoria

CHANGES: <br>
Lista de mudanças feitas, pode ser a lista dos commits feitos, ou uma simples lista de mudanças


## Commits
Idealmente, os commits devem fazer uso da convenção de [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) <br>
Algo que eu recomendo é o uso da extensão de terminal [Commitizen](https://github.com/commitizen/cz-cli) ou a extensão do VSCode [Commit Message Editor](https://marketplace.visualstudio.com/items?itemName=adam-bender.commit-message-editor)