export const TransformToQuestionFormation = [
  {
    id: 1,
    phase: 'She is interested in joining the team.',
    response: [
      { id: 1, alternative: 'Is she interested in joining the team?', status: true,explanation:'' },
      { 
        id: 2, 
        alternative: 'She is interested in joining the team?', 
        status: false, 
        explanation: 'A frase está em uma ordem afirmativa, mas deveria estar na forma interrogativa, com o verbo "is" antes do sujeito.' 
      },
      { 
        id: 3, 
        alternative: 'Is interested she in joining the team?', 
        status: false, 
        explanation: 'A ordem das palavras está incorreta. O verbo "is" deve estar antes do sujeito "she" na frase interrogativa.' 
      }
    ]
  },
  {
    id: 2,
    phase: 'They are already familiar with the topic.',
    response: [
      { id: 1, alternative: 'Are they already familiar with the topic?', status: true,explanation:'' },
      { 
        id: 2, 
        alternative: 'They are already familiar with the topic?', 
        status: false, 
        explanation: 'A frase está na forma afirmativa. A forma interrogativa requer a troca da posição do verbo "are" com o sujeito "they".' 
      },
      { 
        id: 3, 
        alternative: 'Are already they familiar with the topic?', 
        status: false, 
        explanation: 'A ordem das palavras está incorreta. O verbo "are" deve estar no início da frase, seguido do sujeito "they".' 
      }
    ]
  },
  {
    id: 3,
    phase: 'He is the main speaker at the event.',
    response: [
      { id: 1, alternative: 'Is he the main speaker at the event?', status: true,explanation:'' },
      { 
        id: 2, 
        alternative: 'He is the main speaker at the event?', 
        status: false, 
        explanation: 'A frase está na forma afirmativa. A forma interrogativa exige a troca da posição do verbo "is" com o sujeito "he".' 
      },
      { 
        id: 3, 
        alternative: 'Is the main speaker he at the event?', 
        status: false, 
        explanation: 'A ordem das palavras está incorreta. O sujeito "he" deve vir após o verbo "is".' 
      }
    ]
  },
  {
    id: 4,
    phase: 'The package is not here yet.',
    response: [
      { id: 1, alternative: 'Is the package not here yet?', status: true,explanation:'' },
      { 
        id: 2, 
        alternative: 'The package is not here yet?', 
        status: false, 
        explanation: 'A frase está na forma afirmativa. A forma interrogativa exige a troca do verbo "is" com o sujeito "the package".' 
      },
      { 
        id: 3, 
        alternative: 'Is not the package here yet?', 
        status: false, 
        explanation: 'Embora a forma interrogativa seja possível com "Is not", a posição do sujeito "the package" deve vir após o verbo "is".' 
      }
    ]
  },
  {
    id: 5,
    phase: 'It is getting colder every day.',
    response: [
      { id: 1, alternative: 'Is it getting colder every day?', status: true,explanation:'' },
      { 
        id: 2, 
        alternative: 'It is getting colder every day?', 
        status: false, 
        explanation: 'A frase está na forma afirmativa. A forma interrogativa exige a troca do verbo "is" com o sujeito "it".' 
      },
      { 
        id: 3, 
        alternative: 'Is getting it colder every day?', 
        status: false, 
        explanation: 'A ordem das palavras está incorreta. O verbo "is" deve vir no início da frase, seguido pelo sujeito "it".' 
      }
    ]
  },
  {
    id: 6,
    phase: 'I am learning how to play the guitar.',
    response: [
      { id: 1, alternative: 'Am I learning how to play the guitar?', status: true,explanation:'' },
      { 
        id: 2, 
        alternative: 'I am learning how to play the guitar?', 
        status: false, 
        explanation: 'A frase está na forma afirmativa. Para transformá-la em uma interrogativa, o verbo "am" deve vir antes do sujeito "I".' 
      },
      { 
        id: 3, 
        alternative: 'Am learning I how to play the guitar?', 
        status: false, 
        explanation: 'A ordem das palavras está incorreta. O sujeito "I" deve vir após o verbo "am" na forma interrogativa.' 
      }
    ]
  },
  {
    id: 7,
    phase: 'The books are organized by topic.',
    response: [
      { id: 1, alternative: 'Are the books organized by topic?', status: true,explanation:'' },
      { 
        id: 2, 
        alternative: 'The books are organized by topic?', 
        status: false, 
        explanation: 'A frase está na forma afirmativa. Para a forma interrogativa, o verbo "are" deve vir antes do sujeito "the books".' 
      },
      { 
        id: 3, 
        alternative: 'Are organized the books by topic?', 
        status: false, 
        explanation: 'A ordem das palavras está incorreta. O sujeito "the books" deve vir após o verbo "are" na frase interrogativa.' 
      }
    ]
  },
  {
    id: 8,
    phase: 'She is not afraid to take risks.',
    response: [
      { id: 1, alternative: 'Is she not afraid to take risks?', status: true,explanation:'' },
      { 
        id: 2, 
        alternative: 'She is not afraid to take risks?', 
        status: false, 
        explanation: 'A frase está na forma afirmativa. Para a forma interrogativa, o verbo "is" deve vir antes do sujeito "she".' 
      },
      { 
        id: 3, 
        alternative: 'Is not she afraid to take risks?', 
        status: false, 
        explanation: 'Embora a forma interrogativa "Is not" seja possível, a posição do sujeito "she" deve vir após o verbo "is".' 
      }
    ]
  },
  {
    id: 9,
    phase: 'They are planning a surprise for her birthday.',
    response: [
      { id: 1, alternative: 'Are they planning a surprise for her birthday?', status: true,explanation:'' },
      { 
        id: 2, 
        alternative: 'They are planning a surprise for her birthday?', 
        status: false, 
        explanation: 'A frase está na forma afirmativa. A forma interrogativa exige a troca do verbo "are" com o sujeito "they".' 
      },
      { 
        id: 3, 
        alternative: 'Are planning they a surprise for her birthday?', 
        status: false, 
        explanation: 'A ordem das palavras está incorreta. O verbo "are" deve vir antes do sujeito "they" na frase interrogativa.' 
      }
    ]
  },
  {
    id: 10,
    phase: 'He is very skilled at fixing things.',
    response: [
      { id: 1, alternative: 'Is he very skilled at fixing things?', status: true,explanation:'' },
      { 
        id: 2, 
        alternative: 'He is very skilled at fixing things?', 
        status: false,
        explanation: 'A ordem da frase está incorreta para a forma interrogativa. A forma correta seria inverter o sujeito e o verbo auxiliar: "Is he..."'
      },
      { 
        id: 3, 
        alternative: 'Is very skilled he at fixing things?', 
        status: false,
        explanation: 'A inversão do sujeito e do verbo está errada. A forma correta seria "Is he very skilled..."'
      }
    ]
  },
  {
    id: 11,
    phase: 'The weather is colder than usual today.',
    response: [
      { id: 1, alternative: 'Is the weather colder than usual today?', status: true,explanation:'' },
      { 
        id: 2, 
        alternative: 'The weather is colder than usual today?', 
        status: false,
        explanation: 'Para a forma interrogativa, é necessário inverter o sujeito e o verbo, resultando em "Is the weather...".'
      },
      { 
        id: 3, 
        alternative: 'Is colder the weather than usual today?', 
        status: false,
        explanation: 'A posição do verbo "colder" está incorreta. A forma correta seria "Is the weather colder...".'
      }
    ]
  },
  {
    id: 12,
    phase: 'We are hopeful for a positive outcome.',
    response: [
      { id: 1, alternative: 'Are we hopeful for a positive outcome?', status: true,explanation:'' },
      { 
        id: 2, 
        alternative: 'We are hopeful for a positive outcome?', 
        status: false,
        explanation: 'A forma interrogativa requer a inversão do sujeito e do verbo: "Are we..."'
      },
      { 
        id: 3, 
        alternative: 'Are hopeful we for a positive outcome?', 
        status: false,
        explanation: 'A ordem dos elementos da frase está errada. A forma correta seria "Are we hopeful...".'
      }
    ]
  },
  {
    id: 13,
    phase: 'The kids are playing in the garden.',
    response: [
      { id: 1, alternative: 'Are the kids playing in the garden?', status: true,explanation:'' },
      { 
        id: 2, 
        alternative: 'The kids are playing in the garden?', 
        status: false,
        explanation: 'Para a forma interrogativa, é necessário inverter o sujeito e o verbo auxiliar, resultando em "Are the kids...".'
      },
      { 
        id: 3, 
        alternative: 'Are playing the kids in the garden?', 
        status: false,
        explanation: 'A inversão do sujeito e do verbo está incorreta. A forma correta seria "Are the kids playing...".'
      }
    ]
  },
  {
    id: 14,
    phase: 'This is the solution we were looking for.',
    response: [
      { id: 1, alternative: 'Is this the solution we were looking for?', status: true,explanation:'' },
      { 
        id: 2, 
        alternative: 'This is the solution we were looking for?', 
        status: false,
        explanation: 'A frase não está na forma interrogativa. Deveria começar com "Is this...".'
      },
      { 
        id: 3, 
        alternative: 'Is the solution this we were looking for?', 
        status: false,
        explanation: 'A ordem das palavras está incorreta. A forma correta seria "Is this the solution...".'
      }
    ]
  },
  {
    id: 15,
    phase: 'She is always kind to others.',
    response: [
      { id: 1, alternative: 'Is she always kind to others?', status: true,explanation:'' },
      { 
        id: 2, 
        alternative: 'She is always kind to others?', 
        status: false,
        explanation: 'A frase não está na forma interrogativa. Deveria começar com "Is she...".'
      },
      { 
        id: 3, 
        alternative: 'Is always she kind to others?', 
        status: false,
        explanation: 'A inversão do sujeito e do verbo está errada. A forma correta seria "Is she always...".'
      }
    ]
  },
  {
    id: 16,
    phase: 'It is important to arrive early.',
    response: [
      { id: 1, alternative: 'Is it important to arrive early?', status: true,explanation:'' },
      { 
        id: 2, 
        alternative: 'It is important to arrive early?', 
        status: false,
        explanation: 'A frase não está na forma interrogativa. Deveria começar com "Is it...".'
      },
      { 
        id: 3, 
        alternative: 'Is important it to arrive early?', 
        status: false,
        explanation: 'A ordem das palavras está incorreta. A forma correta seria "Is it important...".'
      }
    ]
  },
  {
    id: 17,
    phase: 'The food is not ready yet.',
    response: [
      { id: 1, alternative: 'Is the food not ready yet?', status: true,explanation:'' },
      { 
        id: 2, 
        alternative: 'The food is not ready yet?', 
        status: false,
        explanation: 'Para a forma interrogativa, é necessário inverter o sujeito e o verbo, resultando em "Is the food...".'
      },
      { 
        id: 3, 
        alternative: 'Is not the food ready yet?', 
        status: false,
        explanation: 'A inversão do sujeito e do verbo está incorreta. A forma correta seria "Is the food not...".'
      }
    ]
  },
  {
    id: 18,
    phase: 'The train is on time today.',
    response: [
      { id: 1, alternative: 'Is the train on time today?', status: true,explanation:'' },
      { 
        id: 2, 
        alternative: 'The train is on time today?', 
        status: false,
        explanation: 'A frase não está na forma interrogativa. Deveria começar com "Is the train...".'
      },
      { 
        id: 3, 
        alternative: 'Is on time the train today?', 
        status: false,
        explanation: 'A posição do verbo "on time" está incorreta. A forma correta seria "Is the train on time...".'
      }
    ]
  },
  {
    id: 19,
    phase: 'We are not responsible for the delay.',
    response: [
      { id: 1, alternative: 'Are we not responsible for the delay?', status: true,explanation:'' },
      { 
        id: 2, 
        alternative: 'We are not responsible for the delay?', 
        status: false,
        explanation: 'Para a forma interrogativa, é necessário inverter o sujeito e o verbo auxiliar, resultando em "Are we...".'
      },
      { 
        id: 3, 
        alternative: 'Are not we responsible for the delay?', 
        status: false,
        explanation: 'A inversão do sujeito e do verbo está errada. A forma correta seria "Are we not responsible...".'
      }
    ]
  },
  {
    id: 20,
    phase: 'He is very proud of his achievements.',
    response: [
      { id: 1, alternative: 'Is he very proud of his achievements?', status: true,explanation:'' },
      { id: 2, alternative: 'He is very proud of his achievements?', status: false, explanation: 'A sentença não está em forma interrogativa. Para ser uma pergunta, o verbo "is" precisa vir antes do sujeito "he".' },
      { id: 3, alternative: 'Is very proud he of his achievements?', status: false, explanation: 'A palavra "very" está no lugar errado. O correto seria "Is he very proud of his achievements?"' }
    ]
  },
  {
    id: 21,
    phase: 'They are waiting for the results to be announced.',
    response: [
      { id: 1, alternative: 'Are they waiting for the results to be announced?', status: true,explanation:'' },
      { id: 2, alternative: 'They are waiting for the results to be announced?', status: false, explanation: 'A sentença não está na forma interrogativa correta. O verbo "are" precisa vir antes do sujeito "they".' },
      { id: 3, alternative: 'Are waiting they for the results to be announced?', status: false, explanation: 'A posição do sujeito está incorreta. O correto seria "Are they waiting for the results to be announced?"' }
    ]
  },
  {
    id: 22,
    phase: 'The lights are very dim.',
    response: [
      { id: 1, alternative: 'Are the lights very dim?', status: true,explanation:'' },
      { id: 2, alternative: 'The lights are very dim?', status: false, explanation: 'A sentença não está em forma interrogativa. O verbo "are" precisa vir antes do sujeito "the lights".' },
      { id: 3, alternative: 'Are very dim the lights?', status: false, explanation: 'A posição das palavras está incorreta. O correto seria "Are the lights very dim?"' }
    ]
  },
  {
    id: 23,
    phase: 'The room is not big enough for all of us.',
    response: [
      { id: 1, alternative: 'Is the room not big enough for all of us?', status: true,explanation:'' },
      { id: 2, alternative: 'The room is not big enough for all of us?', status: false, explanation: 'A sentença não está em forma interrogativa. O verbo "is" precisa vir antes do sujeito "the room".' },
      { id: 3, alternative: 'Is not the room big enough for all of us?', status: false, explanation: 'A posição da palavra "not" está incorreta. O correto seria "Is the room not big enough for all of us?"' }
    ]
  },
  {
    id: 24,
    phase: 'She is not available at the moment.',
    response: [
      { id: 1, alternative: 'Is she not available at the moment?', status: true,explanation:'' },
      { id: 2, alternative: 'She is not available at the moment?', status: false, explanation: 'A sentença não está em forma interrogativa. O verbo "is" precisa vir antes do sujeito "she".' },
      { id: 3, alternative: 'Is not she available at the moment?', status: false, explanation: 'A posição da palavra "not" está incorreta. O correto seria "Is she not available at the moment?"' }
    ]
  },
  {
    id: 25,
    phase: 'They are very impressed with your work.',
    response: [
      { id: 1, alternative: 'Are they very impressed with your work?', status: true,explanation:'' },
      { id: 2, alternative: 'They are very impressed with your work?', status: false, explanation: 'A sentença não está em forma interrogativa. O verbo "are" precisa vir antes do sujeito "they".' },
      { id: 3, alternative: 'Are very impressed they with your work?', status: false, explanation: 'A posição do sujeito está incorreta. O correto seria "Are they very impressed with your work?"' }
    ]
  },
  {
    id: 26,
    phase: 'I am thrilled about the opportunity.',
    response: [
      { id: 1, alternative: 'Am I thrilled about the opportunity?', status: true,explanation:'' },
      { id: 2, alternative: 'I am thrilled about the opportunity?', status: false, explanation: 'A sentença está na forma afirmativa. Para ser uma pergunta, o verbo "am" precisa vir antes do sujeito "I".' },
      { id: 3, alternative: 'Am thrilled I about the opportunity?', status: false, explanation: 'A posição do sujeito está incorreta. O correto seria "Am I thrilled about the opportunity?"' }
    ]
  },
  {
    id: 27,
    phase: 'The project is progressing well.',
    response: [
      { id: 1, alternative: 'Is the project progressing well?', status: true,explanation:'' },
      { id: 2, alternative: 'The project is progressing well?', status: false, explanation: 'A sentença não está em forma interrogativa. O verbo "is" precisa vir antes do sujeito "the project".' },
      { id: 3, alternative: 'Is progressing the project well?', status: false, explanation: 'A posição do sujeito está incorreta. O correto seria "Is the project progressing well?"' }
    ]
  },
  {
    id: 28,
    phase: 'They are planning a vacation to the beach.',
    response: [
      { id: 1, alternative: 'Are they planning a vacation to the beach?', status: true,explanation:'' },
      { id: 2, alternative: 'They are planning a vacation to the beach?', status: false, explanation: 'A sentença não está em forma interrogativa. O verbo "are" precisa vir antes do sujeito "they".' },
      { id: 3, alternative: 'Are planning they a vacation to the beach?', status: false, explanation: 'A posição do sujeito está incorreta. O correto seria "Are they planning a vacation to the beach?"' }
    ]
  },
  {
    id: 29,
    phase: 'She is working on a new project.',
    response: [
      { id: 1, alternative: 'Is she working on a new project?', status: true,explanation:'' },
      { id: 2, alternative: 'She is working on a new project?', status: false, explanation: 'A sentença não está em forma interrogativa. O verbo "is" precisa vir antes do sujeito "she".' },
      { id: 3, alternative: 'Is working she on a new project?', status: false, explanation: 'A posição do sujeito está incorreta. O correto seria "Is she working on a new project?"' }
    ]
  },
  {
    id: 30,
    phase: 'I am feeling tired today.',
    response: [
      { id: 1, alternative: 'Am I feeling tired today?', status: true,explanation:'' },
      { id: 2, alternative: 'I am feeling tired today?', status: false, explanation: 'A estrutura da frase está correta, mas não está em formato interrogativo. A inversão do sujeito "I" e o verbo "am" é necessária para formar a pergunta.' },
      { id: 3, alternative: 'Am feeling I tired today?', status: false, explanation: 'A ordem dos componentes da frase está errada. O verbo "am" deve vir antes do sujeito "I" para formar a pergunta corretamente.' }
    ]
  },
  {
    id: 31,
    phase: 'The book is on the table.',
    response: [
      { id: 1, alternative: 'Is the book on the table?', status: true,explanation:'' },
      { id: 2, alternative: 'The book is on the table?', status: false, explanation: 'Esta frase é uma afirmação, não uma pergunta. Para torná-la uma pergunta, é necessário inverter o sujeito "the book" e o verbo "is".' },
      { id: 3, alternative: 'Is on the table the book?', status: false, explanation: 'A ordem das palavras está incorreta. O verbo "is" deve vir logo após o sujeito "the book" para formar a pergunta.' }
    ]
  },
  {
    id: 32,
    phase: 'He is not interested in the offer.',
    response: [
      { id: 1, alternative: 'Is he not interested in the offer?', status: true,explanation:'' },
      { id: 2, alternative: 'He is not interested in the offer?', status: false, explanation: 'A frase é afirmativa. Para fazer uma pergunta, é necessário inverter "He" e "Is".' },
      { id: 3, alternative: 'Is not he interested in the offer?', status: false, explanation: 'A inversão do sujeito "he" e do verbo "is" não está correta. O sujeito deve vir imediatamente após o verbo "is".' }
    ]
  },
  {
    id: 33,
    phase: 'We are not going to the concert tonight.',
    response: [
      { id: 1, alternative: 'Are we not going to the concert tonight?', status: true,explanation:'' },
      { id: 2, alternative: 'We are not going to the concert tonight?', status: false, explanation: 'A frase é afirmativa. A inversão do sujeito "we" e o verbo "are" é necessária para formar a pergunta.' },
      { id: 3, alternative: 'Are not we going to the concert tonight?', status: false, explanation: 'A ordem das palavras não está correta. O verbo "are" deve vir imediatamente antes do sujeito "we".' }
    ]
  },
  {
    id: 34,
    phase: 'It is important to follow the instructions.',
    response: [
      { id: 1, alternative: 'Is it important to follow the instructions?', status: true,explanation:'' },
      { id: 2, alternative: 'It is important to follow the instructions?', status: false, explanation: 'A frase é afirmativa. Para transformá-la em uma pergunta, é necessário inverter "it" e "is".' },
      { id: 3, alternative: 'Is important it to follow the instructions?', status: false, explanation: 'A ordem das palavras está incorreta. O verbo "is" deve vir antes do sujeito "it" para formar a pergunta.' }
    ]
  },
  {
    id: 35,
    phase: 'The cake is delicious.',
    response: [
      { id: 1, alternative: 'Is the cake delicious?', status: true,explanation:'' },
      { id: 2, alternative: 'The cake is delicious?', status: false, explanation: 'Esta frase é uma afirmação, não uma pergunta. Para fazer uma pergunta, devemos inverter o sujeito "the cake" e o verbo "is".' },
      { id: 3, alternative: 'Is delicious the cake?', status: false, explanation: 'A ordem das palavras está incorreta. O verbo "is" deve vir imediatamente antes do sujeito "the cake".' }
    ]
  },
  {
    id: 36,
    phase: 'They are going to the movies tomorrow.',
    response: [
      { id: 1, alternative: 'Are they going to the movies tomorrow?', status: true,explanation:'' },
      { id: 2, alternative: 'They are going to the movies tomorrow?', status: false, explanation: 'A frase é afirmativa. Para formá-la como uma pergunta, a ordem do sujeito e do verbo deve ser invertida.' },
      { id: 3, alternative: 'Are going they to the movies tomorrow?', status: false, explanation: 'A ordem das palavras está incorreta. O verbo "are" deve vir antes do sujeito "they" para formar a pergunta.' }
    ]
  },
  {
    id: 37,
    phase: 'She is studying for the exam.',
    response: [
      { id: 1, alternative: 'Is she studying for the exam?', status: true,explanation:'' },
      { id: 2, alternative: 'She is studying for the exam?', status: false, explanation: 'Esta frase é afirmativa. Para transformá-la em uma pergunta, é necessário inverter "she" e "is".' },
      { id: 3, alternative: 'Is studying she for the exam?', status: false, explanation: 'A ordem das palavras não está correta. O verbo "is" deve vir antes do sujeito "she" para fazer uma pergunta.' }
    ]
  },
  {
    id: 38,
    phase: 'We are working on a tight schedule.',
    response: [
      { id: 1, alternative: 'Are we working on a tight schedule?', status: true,explanation:'' },
      { id: 2, alternative: 'We are working on a tight schedule?', status: false, explanation: 'A frase é afirmativa. Para formá-la como uma pergunta, é necessário inverter o sujeito "we" e o verbo "are".' },
      { id: 3, alternative: 'Are working we on a tight schedule?', status: false, explanation: 'A ordem das palavras está incorreta. O verbo "are" deve vir antes do sujeito "we" para formar a pergunta.' }
    ]
  },
  {
    id: 39,
    phase: 'He is speaking at the conference tomorrow.',
    response: [
      { id: 1, alternative: 'Is he speaking at the conference tomorrow?', status: true,explanation:'' },
      { id: 2, alternative: 'He is speaking at the conference tomorrow?', status: false, explanation: 'Esta frase é afirmativa. Para convertê-la em uma pergunta, é necessário inverter o sujeito "he" e o verbo "is".' },
      { id: 3, alternative: 'Is speaking he at the conference tomorrow?', status: false, explanation: 'A ordem das palavras está errada. O verbo "is" deve vir antes do sujeito "he" para fazer uma pergunta corretamente.' }
    ]
  },
  {
    id: 40,
    phase: 'The team is preparing for the big game.',
    response: [
      { id: 1, alternative: 'Is the team preparing for the big game?', status: true,explanation:'' },
      { id: 2, alternative: 'The team is preparing for the big game?', status: false, explanation: 'A forma correta da pergunta é "Is the team preparing for the big game?" porque o verbo "is" deve vir antes do sujeito em perguntas.' },
      { id: 3, alternative: 'Is preparing the team for the big game?', status: false, explanation: 'A estrutura correta é "Is the team preparing for the big game?" com o sujeito antes do verbo.' }
    ]
  },
  {
    id: 41,
    phase: 'It is too late to go out now.',
    response: [
      { id: 1, alternative: 'Is it too late to go out now?', status: true,explanation:'' },
      { id: 2, alternative: 'It is too late to go out now?', status: false, explanation: 'A forma correta da pergunta é "Is it too late to go out now?" porque a estrutura da frase afirmativa não está invertida para a forma interrogativa.' },
      { id: 3, alternative: 'Is too late it to go out now?', status: false, explanation: 'A estrutura correta da pergunta seria "Is it too late to go out now?" com o verbo "is" antes do sujeito "it".' }
    ]
  },
  {
    id: 42,
    phase: 'I am planning a trip to Europe next year.',
    response: [
      { id: 1, alternative: 'Am I planning a trip to Europe next year?', status: true,explanation:'' },
      { id: 2, alternative: 'I am planning a trip to Europe next year?', status: false, explanation: 'Na frase interrogativa, o verbo "am" deve vir antes do sujeito "I".' },
      { id: 3, alternative: 'Am planning I a trip to Europe next year?', status: false, explanation: 'A forma correta seria "Am I planning a trip to Europe next year?" com o verbo "am" antes do sujeito.' }
    ]
  },
  {
    id: 43,
    phase: 'They are always on time for meetings.',
    response: [
      { id: 1, alternative: 'Are they always on time for meetings?', status: true,explanation:'' },
      { id: 2, alternative: 'They are always on time for meetings?', status: false, explanation: 'Na forma interrogativa, o verbo "are" deve vir antes do sujeito "they".' },
      { id: 3, alternative: 'Are always they on time for meetings?', status: false, explanation: 'A estrutura correta é "Are they always on time for meetings?" com o sujeito antes do verbo.' }
    ]
  },
  {
    id: 44,
    phase: 'The answer is not clear.',
    response: [
      { id: 1, alternative: 'Is the answer not clear?', status: true,explanation:'' },
      { id: 2, alternative: 'The answer is not clear?', status: false, explanation: 'Para a frase interrogativa, a ordem correta é "Is the answer not clear?" com o verbo "is" antes do sujeito.' },
      { id: 3, alternative: 'Is not the answer clear?', status: false, explanation: 'Embora essa forma pareça correta, a estrutura mais comum é "Is the answer not clear?" para manter a ordem mais natural em inglês.' }
    ]
  },
  {
    id: 45,
    phase: 'She is very talented at painting.',
    response: [
      { id: 1, alternative: 'Is she very talented at painting?', status: true,explanation:'' },
      { id: 2, alternative: 'She is very talented at painting?', status: false, explanation: 'A forma interrogativa correta é "Is she very talented at painting?", com o verbo "is" antes do sujeito "she".' },
      { id: 3, alternative: 'Is very talented she at painting?', status: false, explanation: 'A estrutura correta seria "Is she very talented at painting?" com o sujeito antes do verbo.' }
    ]
  },
  {
    id: 46,
    phase: 'They are working hard to finish the project.',
    response: [
      { id: 1, alternative: 'Are they working hard to finish the project?', status: true,explanation:'' },
      { id: 2, alternative: 'They are working hard to finish the project?', status: false, explanation: 'A ordem correta é "Are they working hard to finish the project?", com o verbo "are" antes do sujeito "they".' },
      { id: 3, alternative: 'Are working they hard to finish the project?', status: false, explanation: 'A forma correta seria "Are they working hard to finish the project?" com o sujeito antes do verbo.' }
    ]
  },
  {
    id: 47,
    phase: 'The event is scheduled for next month.',
    response: [
      { id: 1, alternative: 'Is the event scheduled for next month?', status: true,explanation:'' },
      { id: 2, alternative: 'The event is scheduled for next month?', status: false, explanation: 'A forma interrogativa correta seria "Is the event scheduled for next month?" com o verbo "is" antes do sujeito.' },
      { id: 3, alternative: 'Is scheduled the event for next month?', status: false, explanation: 'Embora a estrutura seja reconhecível, a forma correta seria "Is the event scheduled for next month?" com o sujeito "the event" antes do verbo.' }
    ]
  },
  {
    id: 48,
    phase: 'He is playing soccer with his friends.',
    response: [
      { id: 1, alternative: 'Is he playing soccer with his friends?', status: true,explanation:'' },
      { id: 2, alternative: 'He is playing soccer with his friends?', status: false, explanation: 'Para a frase interrogativa, a ordem correta é "Is he playing soccer with his friends?" com o verbo "is" antes do sujeito.' },
      { id: 3, alternative: 'Is playing he soccer with his friends?', status: false, explanation: 'A forma correta seria "Is he playing soccer with his friends?" com o sujeito antes do verbo.' }
    ]
  },
  {
    id: 49,
    phase: 'The children are excited for the party.',
    response: [
      { id: 1, alternative: 'Are the children excited for the party?', status: true,explanation:'' },
      { id: 2, alternative: 'The children are excited for the party?', status: false, explanation: 'A forma interrogativa correta é "Are the children excited for the party?" com o verbo "are" antes do sujeito.' },
      { id: 3, alternative: 'Are excited the children for the party?', status: false, explanation: 'A estrutura correta seria "Are the children excited for the party?" com o sujeito antes do verbo.' }
    ]
  },
  {
    id: 50,
    phase: 'It is difficult to make a decision.',
    response: [
      { id: 1, alternative: 'Is it difficult to make a decision?', status: true,explanation:'' },
      { id: 2, alternative: 'It is difficult to make a decision?', status: false, explanation: 'A ordem correta na forma interrogativa é "Is it difficult to make a decision?" com o verbo "is" antes do sujeito.' },
      { id: 3, alternative: 'Is difficult it to make a decision?', status: false, explanation: 'A estrutura correta seria "Is it difficult to make a decision?" com o sujeito antes do verbo.' }
    ]
  }
]