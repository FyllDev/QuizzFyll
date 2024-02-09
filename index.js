const perguntas = [
  {
    pergunta: "Quem é o autor de O Senhor dos Anéis?",
    respostas: [
      "J.K. Rowling",
      "George R. R. Martin",
      "J.R.R. Tolkien",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o nome da terra onde a maior parte da história de O Senhor dos Anéis ocorre?",
    respostas: [
      "Terra Média",
      "Nárnia",
      "Westeros",
    ],
    correta: 0
  },
  {
    pergunta: "Quem é o personagem principal de O Senhor dos Anéis?",
    respostas: [
      "Frodo Bolseiro",
      "Gandalf",
      "Aragorn",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o nome do anel mágico que é o foco central da trama de O Senhor dos Anéis?",
    respostas: [
      "Anel do Poder",
      "Anel de Fogo",
      "Um Anel",
    ],
    correta: 2
  },
  {
    pergunta: "Quem é o governante do país de Gondor em O Senhor dos Anéis?",
    respostas: [
      "Saruman",
      "Denethor",
      "Théoden",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o nome do cavalo de Gandalf em O Senhor dos Anéis?",
    respostas: [
      "Arwen",
      "Sombrafax",
      "Faramir",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o título do segundo livro da trilogia O Senhor dos Anéis?",
    respostas: [
      "A Sociedade do Anel",
      "As Duas Torres",
      "O Retorno do Rei",
    ],
    correta: 1
  },
  {
    pergunta: "Quem é o governante de Valfenda em O Senhor dos Anéis?",
    respostas: [
      "Legolas",
      "Galadriel",
      "Elrond",
    ],
    correta: 2
  },
  {
    pergunta: "O que é Mordor em O Senhor dos Anéis?",
    respostas: [
      "O lar dos Elfos",
      "A terra dos Hobbits",
      "A terra de Sauron",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o nome do vulcão em Mordor onde o Anel deve ser destruído?",
    respostas: [
      "Montanha da Perdição",
      "Montanha da Desolação",
      "Montanha Solitária",
    ],
    correta: 0
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
   
   