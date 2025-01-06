export const CompletePersonalPronauns = [
  {
    id: 1,
    phase: "___ am going to the market.",
    response: [
      { id: 1, alternative: "I", status: true,explanation:'' },
      { id: 2, alternative: "He", status: false, explanation: "'He' refere-se a outra pessoa do gênero masculino." },
      { id: 3, alternative: "They", status: false, explanation: "'They' refere-se a um grupo ou pessoa não especificada." }
    ]
  },
  {
    id: 2,
    phase: "This is my brother. ___ loves playing soccer.",
    response: [
      { id: 1, alternative: "He", status: true,explanation:'' },
      { id: 2, alternative: "She", status: false, explanation: "'She' refere-se a uma pessoa do gênero feminino." },
      { id: 3, alternative: "It", status: false, explanation: "'It' refere-se a objetos ou animais, não pessoas." }
    ]
  },
  {
    id: 3,
    phase: "Sara and I are friends. ___ always have fun together.",
    response: [
      { id: 1, alternative: "We", status: true,explanation:'' },
      { id: 2, alternative: "They", status: false, explanation: "'They' refere-se a um grupo do qual você não faz parte." },
      { id: 3, alternative: "She", status: false, explanation: "'She' refere-se apenas a uma mulher, não a um grupo." }
    ]
  },
  {
    id: 4,
    phase: "John is my friend. I will call ___ tomorrow.",
    response: [
      { id: 1, alternative: "him", status: true,explanation:'' },
      { id: 2, alternative: "her", status: false, explanation: "'Her' refere-se a uma pessoa do gênero feminino." },
      { id: 3, alternative: "us", status: false, explanation: "'Us' refere-se a você e mais pessoas, não a uma pessoa." }
    ]
  },
  {
    id: 5,
    phase: "This is my dog. ___ is very friendly.",
    response: [
      { id: 1, alternative: "It", status: true,explanation:'' },
      { id: 2, alternative: "He", status: false, explanation: "'He' é usado para homens, não para animais." },
      { id: 3, alternative: "They", status: false, explanation: "'They' é usado para grupos ou pessoas não especificadas." }
    ]
  },
  {
    id: 6,
    phase: "The kids are outside. Can you see ___?",
    response: [
      { id: 1, alternative: "them", status: true,explanation:'' },
      { id: 2, alternative: "her", status: false, explanation: "'Her' refere-se a uma mulher, não a um grupo." },
      { id: 3, alternative: "us", status: false, explanation: "'Us' refere-se a você e mais pessoas, não a eles." }
    ]
  },
  {
    id: 7,
    phase: "My mother is at home. ___ is cooking dinner.",
    response: [
      { id: 1, alternative: "She", status: true,explanation:'' },
      { id: 2, alternative: "He", status: false, explanation: "'He' refere-se a uma pessoa do gênero masculino." },
      { id: 3, alternative: "It", status: false, explanation: "'It' refere-se a objetos ou animais, não pessoas." }
    ]
  },
  {
    id: 8,
    phase: "I saw Anna and Peter. I told ___ about the meeting.",
    response: [
      { id: 1, alternative: "them", status: true,explanation:'' },
      { id: 2, alternative: "him", status: false, explanation: "'Him' refere-se apenas a um homem, não a um grupo." },
      { id: 3, alternative: "her", status: false, explanation: "'Her' refere-se apenas a uma mulher, não a um grupo." }
    ]
  },
  {
    id: 9,
    phase: "Mark is very tall. ___ plays basketball.",
    response: [
      { id: 1, alternative: "He", status: true,explanation:'' },
      { id: 2, alternative: "She", status: false, explanation: "'She' refere-se a uma pessoa do gênero feminino." },
      { id: 3, alternative: "It", status: false, explanation: "'It' refere-se a objetos ou animais, não pessoas." }
    ]
  },
  {
    id: 10,
    phase: "Where is Susan? Have you seen ___?",
    response: [
      { id: 1, alternative: "her", status: true,explanation:'' },
      { id: 2, alternative: "him", status: false, explanation: "'Him' refere-se a uma pessoa do gênero masculino." },
      { id: 3, alternative: "it", status: false, explanation: "'It' refere-se a objetos ou animais, não pessoas." }
    ]
  },
  {
    id: 11,
    phase: "This is my pen. Can you give ___ back to me?",
    response: [
      {
        id: 1,
        alternative: "it",
        status: true,explanation:''
      },
      {
        id: 2,
        alternative: "her",
        status: false,
        explanation: "'Her' é usado para se referir a uma pessoa do gênero feminino, o que não se aplica aqui."
      },
      {
        id: 3,
        alternative: "him",
        status: false,
        explanation: "'Him' é usado para se referir a uma pessoa do gênero masculino, o que não se aplica aqui."
      }
    ]
  },
  {
    id: 12,
    phase: "My friends and I are studying. ___ have an exam tomorrow.",
    response: [
      {
        id: 1,
        alternative: "We",
        status: true,explanation:''
      },
      {
        id: 2,
        alternative: "They",
        status: false,
        explanation: "'They' é usado para se referir a um grupo de pessoas diferentes do falante e do ouvinte."
      },
      {
        id: 3,
        alternative: "Us",
        status: false,
        explanation: "'Us' é o pronome objeto, enquanto aqui é necessário um pronome sujeito."
      }
    ]
  },
  {
    id: 13,
    phase: "Is this your car? Yes, it's ___.",
    response: [
      {
        id: 1,
        alternative: "mine",
        status: true,explanation:''
      },
      {
        id: 2,
        alternative: "ours",
        status: false,
        explanation: "'Ours' é usado para se referir a algo que pertence a 'nós', o que não é o caso aqui."
      },
      {
        id: 3,
        alternative: "theirs",
        status: false,
        explanation: "'Theirs' é usado para se referir a algo que pertence a outras pessoas, o que não é o caso aqui."
      }
    ]
  },
  {
    id: 14,
    phase: "The teacher is talking to the students. ___ are listening carefully.",
    response: [
      {
        id: 1,
        alternative: "They",
        status: true,explanation:''
      },
      {
        id: 2,
        alternative: "We",
        status: false,
        explanation: "'We' se refere ao falante e outras pessoas, mas o professor e os alunos não incluem o falante."
      },
      {
        id: 3,
        alternative: "It",
        status: false,
        explanation: "'It' é usado para coisas ou animais, não para um grupo de pessoas."
      }
    ]
  },
  {
    id: 15,
    phase: "I found this book. Is it ___?",
    response: [
      {
        id: 1,
        alternative: "yours",
        status: true,explanation:''
      },
      {
        id: 2,
        alternative: "hers",
        status: false,
        explanation: "'Hers' é usado para se referir a algo que pertence a uma mulher específica, não ao ouvinte."
      },
      {
        id: 3,
        alternative: "mine",
        status: false,
        explanation: "'Mine' é usado para indicar posse própria, o que não faz sentido na pergunta."
      }
    ]
  },
  {
    id: 16,
    phase: "This is my laptop. ___ is very old.",
    response: [
      {
        id: 1,
        alternative: "It",
        status: true,explanation:''
      },
      {
        id: 2,
        alternative: "They",
        status: false,
        explanation: "'They' é usado para se referir a mais de um objeto ou pessoas, mas aqui é singular."
      },
      {
        id: 3,
        alternative: "She",
        status: false,
        explanation: "'She' é usado para pessoas do gênero feminino, não para objetos."
      }
    ]
  },
  {
    id: 17,
    phase: "Tom and Jerry are fighting again. ___ never stop arguing.",
    response: [
      {
        id: 1,
        alternative: "They",
        status: true,explanation:''
      },
      {
        id: 2,
        alternative: "It",
        status: false,
        explanation: "'It' é singular, mas aqui estamos falando de duas pessoas."
      },
      {
        id: 3,
        alternative: "We",
        status: false,
        explanation: "'We' inclui o falante, mas o falante não está envolvido na situação descrita."
      }
    ]
  },
  {
    id: 18,
    phase: "Lucy and I are in the same class. ___ always sit together.",
    response: [
      {
        id: 1,
        alternative: "We",
        status: true,explanation:''
      },
      {
        id: 2,
        alternative: "They",
        status: false,
        explanation: "'They' exclui o falante, mas aqui o falante está incluído."
      },
      {
        id: 3,
        alternative: "She",
        status: false,
        explanation: "'She' é singular e se refere a Lucy apenas, mas o falante está incluído."
      }
    ]
  },
  {
    id: 19,
    phase: "Who is that girl? Do you know ___?",
    response: [
      {
        id: 1,
        alternative: "her",
        status: true,explanation:''
      },
      {
        id: 2,
        alternative: "him",
        status: false,
        explanation: "'Him' se refere a um homem, mas aqui estamos falando de uma garota."
      },
      {
        id: 3,
        alternative: "it",
        status: false,
        explanation: "'It' é usado para coisas ou animais, não para pessoas."
      }
    ]
  },
  {
    id: 20,
    phase: "I have a new cat. ___ is very playful.",
    response: [
      {
        id: 1,
        alternative: "It",
        status: true,explanation:''
      },
      {
        id: 2,
        alternative: "She",
        status: false,
        explanation: "'She' seria usado se estivéssemos especificando que o gato é fêmea."
      },
      {
        id: 3,
        alternative: "They",
        status: false,
        explanation: "'They' é plural, mas aqui estamos falando de um único gato."
      }
    ]
  },
  {
    id: 21,
    phase: "Paul is very kind. ___ always helps his friends.",
    response: [
      { id: 1, alternative: "He", status: true,explanation:'' },
      { 
        id: 2, 
        alternative: "They", 
        status: false, 
        explanation: "'They' é plural, mas 'Paul' é singular." 
      },
      { 
        id: 3, 
        alternative: "It", 
        status: false, 
        explanation: "'It' é usado para objetos ou animais, não para pessoas." 
      }
    ]
  },
  {
    id: 22,
    phase: "This is Anna's bag. Have you seen ___?",
    response: [
      { id: 1, alternative: "it", status: true,explanation:'' },
      { 
        id: 2, 
        alternative: "her", 
        status: false, 
        explanation: "'Her' é usado para se referir à pessoa, não ao objeto (a bolsa)." 
      },
      { 
        id: 3, 
        alternative: "him", 
        status: false, 
        explanation: "'Him' é usado para se referir a um homem, mas aqui estamos falando de um objeto." 
      }
    ]
  },
  {
    id: 23,
    phase: "Michael and I are working on a project. ___ want to finish it today.",
    response: [
      { id: 1, alternative: "We", status: true,explanation:'' },
      { 
        id: 2, 
        alternative: "They", 
        status: false, 
        explanation: "'They' exclui o falante, mas aqui o falante está incluído." 
      },
      { 
        id: 3, 
        alternative: "He", 
        status: false, 
        explanation: "'He' é singular, mas estamos falando de 'Michael and I'." 
      }
    ]
  },
  {
    id: 24,
    phase: "The children are in the park. Can you call ___ back inside?",
    response: [
      { id: 1, alternative: "them", status: true,explanation:'' },
      { 
        id: 2, 
        alternative: "it", 
        status: false, 
        explanation: "'It' é singular, mas 'children' é plural." 
      },
      { 
        id: 3, 
        alternative: "us", 
        status: false, 
        explanation: "'Us' se refere ao falante e ouvintes, não às crianças." 
      }
    ]
  },
  {
    id: 25,
    phase: "I met Lisa yesterday. I invited ___ to the party.",
    response: [
      { id: 1, alternative: "her", status: true,explanation:'' },
      { 
        id: 2, 
        alternative: "him", 
        status: false, 
        explanation: "'Him' é usado para homens, mas Lisa é uma mulher." 
      },
      { 
        id: 3, 
        alternative: "it", 
        status: false, 
        explanation: "'It' é usado para objetos ou animais, não para pessoas." 
      }
    ]
  },
  {
    id: 26,
    phase: "Where is the dog? Have you fed ___?",
    response: [
      { id: 1, alternative: "it", status: true,explanation:'' },
      { 
        id: 2, 
        alternative: "him", 
        status: false, 
        explanation: "'Him' é usado quando se conhece o gênero masculino do animal, mas 'it' é mais neutro." 
      },
      { 
        id: 3, 
        alternative: "her", 
        status: false, 
        explanation: "'Her' é usado quando se conhece o gênero feminino do animal, mas 'it' é mais neutro." 
      }
    ]
  },
  {
    id: 27,
    phase: "This is your book. Can you take ___?",
    response: [
      { id: 1, alternative: "it", status: true,explanation:'' },
      { 
        id: 2, 
        alternative: "them", 
        status: false, 
        explanation: "'Them' é plural, mas 'book' é singular." 
      },
      { 
        id: 3, 
        alternative: "her", 
        status: false, 
        explanation: "'Her' é usado para pessoas, não para objetos." 
      }
    ]
  },
  {
    id: 28,
    phase: "John and Peter are brothers. ___ always play together.",
    response: [
      { id: 1, alternative: "They", status: true,explanation:'' },
      { 
        id: 2, 
        alternative: "He", 
        status: false, 
        explanation: "'He' é singular, mas estamos falando de duas pessoas." 
      },
      { 
        id: 3, 
        alternative: "We", 
        status: false, 
        explanation: "'We' inclui o falante, mas aqui o falante não está envolvido." 
      }
    ]
  },
  {
    id: 29,
    phase: "Sophie is in the kitchen. Can you ask ___ to come here?",
    response: [
      { id: 1, alternative: "her", status: true,explanation:'' },
      { 
        id: 2, 
        alternative: "him", 
        status: false, 
        explanation: "'Him' é usado para homens, mas Sophie é uma mulher." 
      },
      { 
        id: 3, 
        alternative: "it", 
        status: false, 
        explanation: "'It' é usado para objetos ou animais, não para pessoas." 
      }
    ]
  },
  {
    id: 30,
    phase: "I love my grandparents. I visit ___ every weekend.",
    response: [
      { id: 1, alternative: "them", status: true,explanation:'' },
      { 
        id: 2, 
        alternative: "us", 
        status: false, 
        explanation: "'Us' inclui o falante, mas aqui estamos falando dos avós." 
      },
      { 
        id: 3, 
        alternative: "it", 
        status: false, 
        explanation: "'It' é singular, mas 'grandparents' é plural." 
      }
    ]
  },
  {
    id: 31,
    phase: "I have a friend named Robert. ___ is a great musician.",
    response: [
      { id: 1, alternative: "He", status: true,explanation:'' },
      { id: 2, alternative: "She", status: false, explanation: "O pronome 'She' refere-se a uma mulher, mas Robert é um nome masculino." },
      { id: 3, alternative: "It", status: false, explanation: "O pronome 'It' é usado para objetos ou animais, mas Robert é uma pessoa." }
    ]
  },
  {
    id: 32,
    phase: "This is my sister. ___ is a teacher.",
    response: [
      { id: 1, alternative: "She", status: true,explanation:'' },
      { id: 2, alternative: "He", status: false, explanation: "O pronome 'He' refere-se a um homem, mas a frase é sobre uma irmã, que é uma mulher." },
      { id: 3, alternative: "They", status: false, explanation: "O pronome 'They' geralmente é usado para mais de uma pessoa ou como pronome neutro de gênero, mas esta frase é sobre uma pessoa específica." }
    ]
  },
  {
    id: 33,
    phase: "I have a parrot. ___ can talk!",
    response: [
      { id: 1, alternative: "It", status: true,explanation:'' },
      { id: 2, alternative: "She", status: false, explanation: "O pronome 'She' refere-se a uma mulher, mas o gênero do papagaio não está especificado." },
      { id: 3, alternative: "They", status: false, explanation: "O pronome 'They' geralmente é usado para mais de uma pessoa ou animal, mas esta frase se refere a um único papagaio." }
    ]
  },
  {
    id: 34,
    phase: "Look at this beautiful house. ___ is for sale.",
    response: [
      { id: 1, alternative: "It", status: true,explanation:'' },
      { id: 2, alternative: "They", status: false, explanation: "O pronome 'They' é usado para sujeitos no plural, mas a casa é singular." },
      { id: 3, alternative: "She", status: false, explanation: "O pronome 'She' é usado para pessoas ou animais femininos, não para objetos como uma casa." }
    ]
  },
  {
    id: 35,
    phase: "Where is Peter? Have you called ___?",
    response: [
      { id: 1, alternative: "him", status: true,explanation:'' },
      { id: 2, alternative: "her", status: false, explanation: "O pronome 'her' refere-se a uma mulher, mas Peter é um nome masculino." },
      { id: 3, alternative: "it", status: false, explanation: "O pronome 'it' é usado para objetos ou animais, mas Peter é uma pessoa." }
    ]
  },
  {
    id: 36,
    phase: "These books belong to Mary. Have you given ___ back to her?",
    response: [
      { id: 1, alternative: "them", status: true,explanation:'' },
      { id: 2, alternative: "it", status: false, explanation: "O pronome 'it' é singular, mas 'books' é plural." },
      { id: 3, alternative: "him", status: false, explanation: "O pronome 'him' refere-se a um homem, mas Mary é uma mulher." }
    ]
  },
  {
    id: 37,
    phase: "Tom and I are going to the cinema. Would you like to join ___?",
    response: [
      { id: 1, alternative: "us", status: true,explanation:'' },
      { id: 2, alternative: "them", status: false, explanation: "O pronome 'them' é usado para um grupo excluindo o falante, mas 'Tom e eu' incluem o falante." },
      { id: 3, alternative: "it", status: false, explanation: "O pronome 'it' é usado para objetos ou animais, não para pessoas." }
    ]
  },
  {
    id: 38,
    phase: "This is my phone. I bought ___ yesterday.",
    response: [
      { id: 1, alternative: "it", status: true,explanation:'' },
      { id: 2, alternative: "him", status: false, explanation: "O pronome 'him' refere-se a um homem, mas a frase é sobre um telefone, que é um objeto." },
      { id: 3, alternative: "her", status: false, explanation: "O pronome 'her' refere-se a uma mulher, mas a frase é sobre um telefone, que é um objeto." }
    ]
  },
  {
    id: 39,
    phase: "Alice and Sarah are my best friends. I love ___ so much.",
    response: [
      { id: 1, alternative: "them", status: true,explanation:'' },
      { id: 2, alternative: "her", status: false, explanation: "O pronome 'her' refere-se a uma única mulher, mas a frase é sobre Alice e Sarah, que são duas pessoas." },
      { id: 3, alternative: "it", status: false, explanation: "O pronome 'it' é usado para objetos ou animais, mas a frase se refere a pessoas." }
    ]
  },
  {
    id: 40,
    phase: "The cat is on the roof. Can you help ___ get down?",
    response: [
      { id: 1, alternative: "it", status: true,explanation:'' },
      { id: 2, alternative: "him", status: false, explanation: "O pronome 'him' refere-se a um homem, mas o gênero do gato não está especificado." },
      { id: 3, alternative: "them", status: false, explanation: "O pronome 'them' é usado para sujeitos no plural, mas esta frase se refere a um único gato." }
    ]
  },
  {
    id: 41,
    phase: "Sarah is very good at drawing. Have you seen ___ artwork?",
    response: [
      { id: 1, alternative: "her", status: true,explanation:'' },
      { id: 2, alternative: "him", status: false, explanation: "O pronome 'him' refere-se a um homem, mas Sarah é uma mulher." },
      { id: 3, alternative: "them", status: false, explanation: "O pronome 'them' é usado para sujeitos no plural, mas a frase é sobre a obra de arte de Sarah, que é singular." }
    ]
  },
  {
    id: 42,
    phase: "James and I are classmates. ___ always help each other with homework.",
    response: [
      { id: 1, alternative: "We", status: true,explanation:'' },
      { id: 2, alternative: "They", status: false, explanation: "O pronome 'They' refere-se a outras pessoas, mas 'James and I' inclui o falante." },
      { id: 3, alternative: "He", status: false, explanation: "O pronome 'He' refere-se a um homem, mas a frase é sobre James e o falante, que são mais de uma pessoa." }
    ]
  },
  {
    id: 43,
    phase: "This is Tom's car. I think ___ needs a wash.",
    response: [
      { id: 1, alternative: "it", status: true,explanation:'' },
      { id: 2, alternative: "him", status: false, explanation: "O pronome 'him' refere-se a um homem, mas a frase é sobre o carro de Tom, que é um objeto." },
      { id: 3, alternative: "her", status: false, explanation: "O pronome 'her' refere-se a uma mulher, mas a frase é sobre o carro de Tom, que é um objeto." }
    ]
  },
  {
    id: 44,
    phase: "Where is Linda? I haven't seen ___ all day.",
    response: [
      { id: 1, alternative: "her", status: true,explanation:'' },
      { id: 2, alternative: "him", status: false, explanation: "O pronome 'him' refere-se a um homem, mas a frase é sobre Linda, que é uma mulher." },
      { id: 3, alternative: "it", status: false, explanation: "O pronome 'it' é usado para objetos ou animais, mas Linda é uma pessoa." }
    ]
  },
  {
    id: 45,
    phase: "The students are preparing for the exam. ___ are very nervous.",
    response: [
      { id: 1, alternative: "They", status: true,explanation:'' },
      { id: 2, alternative: "We", status: false, explanation: "O pronome 'We' inclui o falante, mas a frase é sobre os estudantes, não o falante." },
      { id: 3, alternative: "It", status: false, explanation: "O pronome 'It' refere-se a sujeitos singulares, mas a frase é sobre múltiplos estudantes." }
    ]
  },
  {
    id: 46,
    phase: "My dog loves playing outside. I always take ___ to the park.",
    response: [
      { id: 1, alternative: "it", status: true,explanation:'' },
      { id: 2, alternative: "him", status: false, explanation: "O pronome 'him' refere-se a um homem, mas a frase não especifica o gênero do cachorro." },
      { id: 3, alternative: "her", status: false, explanation: "O pronome 'her' refere-se a uma mulher, mas a frase não especifica o gênero do cachorro." }
    ]
  },
  {
    id: 47,
    phase: "This cake is delicious. Who made ___?",
    response: [
      { id: 1, alternative: "it", status: true,explanation:'' },
      { id: 2, alternative: "them", status: false, explanation: "O pronome 'them' é usado para sujeitos no plural, mas a frase é sobre um único bolo." },
      { id: 3, alternative: "her", status: false, explanation: "O pronome 'her' refere-se a uma mulher, mas a frase é sobre o bolo, não uma pessoa." }
    ]
  },
  {
    id: 48,
    phase: "That's my sister over there. Can you see ___?",
    response: [
      { id: 1, alternative: "her", status: true,explanation:'' },
      { id: 2, alternative: "him", status: false, explanation: "O pronome 'him' refere-se a um homem, mas a frase é sobre a irmã do falante, que é uma mulher." },
      { id: 3, alternative: "it", status: false, explanation: "O pronome 'it' é usado para objetos ou animais, mas a frase é sobre uma pessoa." }
    ]
  },
  {
    id: 49,
    phase: "My friends and I went to the concert. ___ had so much fun!",
    response: [
      { id: 1, alternative: "We", status: true,explanation:'' },
      { id: 2, alternative: "They", status: false, explanation: "O pronome 'They' refere-se a pessoas que não incluem o falante, mas a frase inclui o falante e seus amigos." },
      { id: 3, alternative: "It", status: false, explanation: "O pronome 'It' é usado para sujeitos singulares, mas a frase se refere a um grupo de pessoas." }
    ]
  },
  {
    id: 50,
    phase: "The boys are playing soccer. Let's go watch ___.",
    response: [
      { id: 1, alternative: "them", status: true,explanation:'' },
      { id: 2, alternative: "him", status: false, explanation: "O pronome 'him' refere-se a um único homem, mas a frase é sobre um grupo de meninos." },
      { id: 3, alternative: "her", status: false, explanation: "O pronome 'her' refere-se a uma mulher, mas a frase é sobre meninos, que são homens." }
    ]
  }
]