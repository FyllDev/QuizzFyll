const perguntas = [
    {
      pergunta: "Qual a cor favorita do Fyll",
      respostas: [
        "Verde;",
        "Vermelho;",
        "Azul;",
      ],
      correta: 0
    },
    {
      pergunta: "Qual a data de aniversário do Fyll?",
      respostas: [
        "17/03",
        "27/01",
        "19/02",
      ],
      correta: 2
    },
    {
      pergunta: "Qual a bebida favorita do Fyll?",
      respostas: [
        "Cerveja.",
        "Wiskhy.",
        "Vinho.",
      ],
      correta: 0
    },
    {
      pergunta: "Qual o Hobby favorito do Fyll?",
      respostas: [
        "Jogar Videogame.",
        "Ver séries.",
        "Ver Filmes.",
      ],
      correta: 0
    },
    {
      pergunta: "Qual o Filme favorito do Fyll?",
      respostas: [
        "O Poderoso Chefão",
        "O Senhor dos Anéis",
        "Harry Potter",
      ],
      correta: 1
    },
    {
      pergunta: "Qual o estilo musical favorito do Fyll",
      respostas: [
        "Rap",
        "Heavy Metal",
        "Punk Rock",
      ],
      correta: 2
    },
    {
      pergunta: "Quem o maior inimigo do Fyll?",
      respostas: [
        "Ninguém o Fyll é um fofo",
        "Tati",
        "Betânia",
      ],
      correta: 0
    },
    {
      pergunta: "Quantos gatos o Fyll tem?",
      respostas: [
        "3",
        "5",
        "4",
      ],
      correta: 2
    },
    {
      pergunta: "Qual a comida favorita do Fyll?",
      respostas: [
        "Sushi",
        "Pizza",
        "Churrasco",
      ],
      correta: 2
    },
    {
      pergunta: "Qual a altura do Fyll?",
      respostas: [
        "1,58",
        "1,68",
        "1,73",
      ],
      correta: 1
    },
   ];
   // Selecionando os nós Quiz e Template feitos no HTML
   const quiz = document.querySelector('#quiz')
   const template = document.querySelector('template')
   
   const corretas = new Set()
   const totalDePerguntas = perguntas.length
   const mostrarTotal = document.querySelector('#acertos span')
   mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas 
   
   
   // loop ou laço de repetição
   for(const item of perguntas) {
     const quizItem = template.content.cloneNode(true)
   quizItem.querySelector('h3').textContent = item.pergunta
   
   for(let resposta of item.respostas){
     const dt = quizItem.querySelector('dl dt').cloneNode(true)
   dt.querySelector('span').textContent = resposta
   dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
   dt.querySelector('input').value = item.respostas.indexOf(resposta)
   
   dt.querySelector('input').onchange = (event) => {
     const estaCorreta = event.target.value == item.correta 
     
     corretas.delete(item)
     if(estaCorreta){
   corretas.add(item)
     }
     mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas 
   
   }
   
   
   
   
   quizItem.querySelector('dl').appendChild(dt)
   }
   quizItem.querySelector('dl dt').remove()
   
   
   // coloca a pergunta na tela
   quiz.appendChild(quizItem)
   
   }
   
   