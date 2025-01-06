export const TransformToNegative = [
  {
    id:1,
    phase: 'She is a good student.',
    response: [
      { id:1, alternative: 'She are not a good student.', status: false, explanation: "A forma correta é 'She is not'. 'Are' é utilizado com 'you', 'we' e 'they', enquanto 'is' é utilizado com 'he', 'she' e 'it'." },
      { id:2, alternative: 'She is not a good student.', status: true,explanation:'' },
      { id:3, alternative: 'She does not is a good student.', status: false, explanation: "A forma correta é 'She does not'. O verbo 'do' ou 'does' é seguido pela forma base do verbo, sem 'is'." }
    ]
  },
  {
    id:2,
    phase: 'They are at the park.',
    response: [
      { id:1, alternative: 'They are not at the park.', status: true,explanation:'' },
      { id:2, alternative: 'They do not are at the park.', status: false, explanation: "A forma correta é 'They do not'. O verbo 'do' é seguido pela forma base do verbo, então 'are' não deve ser usado após 'do'." },
      { id:3, alternative: 'They is not at the park.', status: false, explanation: "A forma correta é 'They are not'. 'Is' é utilizado com 'he', 'she' e 'it', enquanto 'are' é utilizado com 'they'." }
    ]
  },
  {
    id:3,
    phase: 'I am happy.',
    response: [
      { id:1, alternative: 'I am not happy.', status: true,explanation:'' },
      { id:2, alternative: 'I not am happy.', status: false, explanation: "A forma correta é 'I am not'. O verbo 'am' deve vir antes de 'not' na frase negativa." },
      { id:3, alternative: 'I are not happy.', status: false, explanation: "A forma correta é 'I am not'. 'Are' é utilizado com 'you', 'we' e 'they', enquanto 'am' é utilizado com 'I'." }
    ]
  },
  {
    id:4,
    phase: 'We are best friends.',
    response: [
      { id:1, alternative: 'We not are best friends.', status: false, explanation: "A forma correta é 'We are not'. 'Not' deve vir depois de 'are' para formar a negativa." },
      { id:2, alternative: 'We are not best friends.', status: true,explanation:'' },
      { id:3, alternative: 'We does not are best friends.', status: false, explanation: "A forma correta é 'We do not'. 'Does' é usado apenas com 'he', 'she' e 'it', enquanto 'do' é usado com 'I', 'we', 'you' e 'they'." }
    ]
  },
  {
    id:5,
    phase: 'He is at home.',
    response: [
      { id:1, alternative: 'He is not at home.', status: true,explanation:'' },
      { id:2, alternative: 'He not is at home.', status: false, explanation: "A forma correta é 'He is not'. 'Is' deve vir antes de 'not' para formar a negativa." },
      { id:3, alternative: 'He are not at home.', status: false, explanation: "A forma correta é 'He is not'. 'Are' é utilizado com 'you', 'we' e 'they', enquanto 'is' é utilizado com 'he', 'she' e 'it'." }
    ]
  },
  {
    id:6,
    phase: 'It is a sunny day.',
    response: [
      { id:1, alternative: 'It is not a sunny day.', status: true,explanation:'' },
      { id:2, alternative: 'It does not is a sunny day.', status: false, explanation: "A forma correta é 'It does not'. O verbo 'do' ou 'does' é seguido pela forma base do verbo, sem 'is'." },
      { id:3, alternative: 'It not is a sunny day.', status: false, explanation: "A forma correta é 'It is not'. 'Not' deve vir depois de 'is' para formar a negativa." }
    ]
  },
  {
    id:7,
    phase: 'You are very kind.',
    response: [
      { id:1, alternative: 'You are not very kind.', status: true,explanation:'' },
      { id:2, alternative: 'You do not are very kind.', status: false, explanation: "A forma correta é 'You do not'. O verbo 'do' é seguido pela forma base do verbo, então 'are' não deve ser usado após 'do'." },
      { id:3, alternative: 'You not are very kind.', status: false, explanation: "A forma correta é 'You are not'. 'Not' deve vir depois de 'are' para formar a negativa." }
    ]
  },
  {
    id:8,
    phase: 'The books are on the table.',
    response: [
      { id:1, alternative: 'The books are not on the table.', status: true,explanation:'' },
      { id:2, alternative: 'The books not are on the table.', status: false, explanation: "A forma correta é 'The books are not'. 'Not' deve vir depois de 'are' para formar a negativa." },
      { id:3, alternative: 'The books does not are on the table.', status: false, explanation: "A forma correta é 'The books do not'. 'Does' é usado apenas com 'he', 'she' e 'it', enquanto 'do' é utilizado com 'I', 'you', 'we' e 'they'." }
    ]
  },
  {
    id:9,
    phase: 'She is very tired.',
    response: [
      { id:1, alternative: 'She are not very tired.', status: false, explanation: "A forma correta é 'She is not'. 'Are' é utilizado com 'you', 'we' e 'they', enquanto 'is' é utilizado com 'she', 'he' e 'it'." },
      { id:2, alternative: 'She is not very tired.', status: true,explanation:'' },
      { id:3, alternative: 'She not is very tired.', status: false, explanation: "A forma correta é 'She is not'. 'Not' deve vir depois de 'is' para formar a negativa." }
    ]
  },
  {
    id:10,
    phase: 'We are ready for the trip.',
    response: [
      { id:1, alternative: 'We does not are ready for the trip.', status: false, explanation: "A forma correta é 'We do not'. 'Does' é usado apenas com 'he', 'she' e 'it', enquanto 'do' é utilizado com 'I', 'you', 'we' e 'they'." },
      { id:2, alternative: 'We not are ready for the trip.', status: false, explanation: "A forma correta é 'We are not'. 'Not' deve vir depois de 'are' para formar a negativa." },
      { id:3, alternative: 'We are not ready for the trip.', status: true,explanation:'' }
    ]
  },
  {
    id: 11,
    phase: 'I am a teacher.',
    response: [
      { id: 1, alternative: 'I am not a teacher.', status: true,explanation:'' },
      { id: 2, alternative: 'I not am a teacher.', status: false, explanation: 'A ordem das palavras está errada. O correto é "I am not a teacher".' },
      { id: 3, alternative: 'I does not am a teacher.', status: false, explanation: 'A forma "does" está incorreta para a primeira pessoa do singular ("I"). O correto seria "I do not am".' }
    ]
  },
  {
    id: 12,
    phase: 'She is my sister.',
    response: [
      { id: 1, alternative: 'She is not my sister.', status: true,explanation:'' },
      { id: 2, alternative: 'She not is my sister.', status: false, explanation: 'A ordem das palavras está incorreta. O correto seria "She is not my sister".' },
      { id: 3, alternative: 'She does not is my sister.', status: false, explanation: 'A forma "does" não é adequada para o sujeito "She". O correto é "She is not".' }
    ]
  },
  {
    id: 13,
    phase: 'They are in the room.',
    response: [
      { id: 1, alternative: 'They are not in the room.', status: true,explanation:'' },
      { id: 2, alternative: 'They do not are in the room.', status: false, explanation: 'A estrutura da frase está errada. A palavra "do" não deve ser usada com o verbo "to be".' },
      { id: 3, alternative: 'They not are in the room.', status: false, explanation: 'A ordem das palavras está incorreta. O correto seria "They are not in the room".' }
    ]
  },
  {
    id: 14,
    phase: 'We are students.',
    response: [
      { id: 1, alternative: 'We are not students.', status: true,explanation:'' },
      { id: 2, alternative: 'We does not are students.', status: false, explanation: 'A forma "does" não é adequada para o sujeito "We". O correto é "We are not students".' },
      { id: 3, alternative: 'We not are students.', status: false, explanation: 'A ordem das palavras está errada. O correto seria "We are not students".' }
    ]
  },
  {
    id: 15,
    phase: 'It is very cold today.',
    response: [
      { id: 1, alternative: 'It is not very cold today.', status: true,explanation:'' },
      { id: 2, alternative: 'It not is very cold today.', status: false, explanation: 'A ordem das palavras está incorreta. O correto seria "It is not very cold today".' },
      { id: 3, alternative: 'It does not is very cold today.', status: false, explanation: 'A forma "does" está incorreta para o verbo "to be". O correto seria "It is not".' }
    ]
  },
  {
    id: 16,
    phase: 'You are my best friend.',
    response: [
      { id: 1, alternative: 'You are not my best friend.', status: true,explanation:'' },
      { id: 2, alternative: 'You not are my best friend.', status: false, explanation: 'A ordem das palavras está errada. O correto seria "You are not my best friend".' },
      { id: 3, alternative: 'You does not are my best friend.', status: false, explanation: 'A forma "does" não é adequada para o sujeito "You". O correto seria "You are not my best friend".' }
    ]
  },
  {
    id: 17,
    phase: 'He is an engineer.',
    response: [
      { id: 1, alternative: 'He is not an engineer.', status: true,explanation:'' },
      { id: 2, alternative: 'He not is an engineer.', status: false, explanation: 'A ordem das palavras está errada. O correto seria "He is not an engineer".' },
      { id: 3, alternative: 'He does not is an engineer.', status: false, explanation: 'A forma "does" está incorreta para o sujeito "He". O correto seria "He is not".' }
    ]
  },
  {
    id: 18,
    phase: 'I am very tired.',
    response: [
      { id: 1, alternative: 'I am not very tired.', status: true,explanation:'' },
      { id: 2, alternative: 'I not am very tired.', status: false, explanation: 'A ordem das palavras está errada. O correto seria "I am not very tired".' },
      { id: 3, alternative: 'I does not am very tired.', status: false, explanation: 'A forma "does" está incorreta para o sujeito "I". O correto seria "I am not very tired".' }
    ]
  },
  {
    id: 19,
    phase: 'The cat is on the roof.',
    response: [
      { id: 1, alternative: 'The cat is not on the roof.', status: true,explanation:'' },
      { id: 2, alternative: 'The cat does not is on the roof.', status: false, explanation: 'A forma "does" está incorreta para o verbo "to be". O correto seria "The cat is not on the roof".' },
      { id: 3, alternative: 'The cat not is on the roof.', status: false, explanation: 'A ordem das palavras está errada. O correto seria "The cat is not on the roof".' }
    ]
  },
  {
    id: 20,
    phase: 'The flowers are blooming.',
    response: [
      { id: 1, alternative: 'The flowers are not blooming.', status: true,explanation:'' },
      { id: 2, alternative: 'The flowers not are blooming.', status: false, explanation: 'A ordem das palavras está errada. O correto seria "The flowers are not blooming".' },
      { id: 3, alternative: 'The flowers does not are blooming.', status: false, explanation: 'A forma "does" está incorreta para o sujeito "The flowers". O correto seria "The flowers are not blooming".' }
    ]
  },
  {
    id:21,
    phase: 'She is an amazing singer.',
    response: [
      { id:1, alternative: 'She is not an amazing singer.', status: true,explanation:'' },
      { id:2, alternative: 'She not is an amazing singer.', status: false, explanation: 'A posição do "not" está incorreta, deve vir depois do verbo "is".' },
      { id:3, alternative: 'She does not is an amazing singer.', status: false, explanation: 'A forma correta é "She does not sing" ou "She is not", não "does not is".' }
    ]
  },
  {
    id:22,
    phase: 'They are traveling to Spain.',
    response: [
      { id:1, alternative: 'They are not traveling to Spain.', status: true,explanation:'' },
      { id:2, alternative: 'They does not are traveling to Spain.', status: false, explanation: 'Não se deve usar "does" com "are" no presente contínuo. O correto é "are not".' },
      { id:3, alternative: 'They not are traveling to Spain.', status: false, explanation: 'O "not" deve vir depois de "are", formando "are not".' }
    ]
  },
  {
    id:23,
    phase: 'He is very good at math.',
    response: [
      { id:1, alternative: 'He is not very good at math.', status: true,explanation:'' },
      { id:2, alternative: 'He not is very good at math.', status: false, explanation: 'A posição do "not" está incorreta, deve vir depois do verbo "is".' },
      { id:3, alternative: 'He does not is very good at math.', status: false, explanation: 'A forma correta é "He is not", não "does not is".' }
    ]
  },
  {
    id:24,
    phase: 'We are having lunch now.',
    response: [
      { id:1, alternative: 'We are not having lunch now.', status: true,explanation:'' },
      { id:2, alternative: 'We not are having lunch now.', status: false, explanation: 'O "not" deve vir depois de "are", formando "are not".' },
      { id:3, alternative: 'We does not are having lunch now.', status: false, explanation: 'Não se deve usar "does" com "are" no presente contínuo. O correto é "are not".' }
    ]
  },
  {
    id:25,
    phase: 'It is time for the meeting.',
    response: [
      { id:1, alternative: 'It is not time for the meeting.', status: true,explanation:'' },
      { id:2, alternative: 'It not is time for the meeting.', status: false, explanation: 'A posição do "not" está incorreta, deve vir depois do verbo "is".' },
      { id:3, alternative: 'It does not is time for the meeting.', status: false, explanation: 'A forma correta é "It is not", não "does not is".' }
    ]
  },
  {
    id:26,
    phase: 'The kids are playing outside.',
    response: [
      { id:1, alternative: 'The kids are not playing outside.', status: true,explanation:'' },
      { id:2, alternative: 'The kids does not are playing outside.', status: false, explanation: 'Não se deve usar "does" com "are" no presente contínuo. O correto é "are not".' },
      { id:3, alternative: 'The kids not are playing outside.', status: false, explanation: 'O "not" deve vir depois de "are", formando "are not".' }
    ]
  },
  {
    id:27,
    phase: 'I am at home today.',
    response: [
      { id:1, alternative: 'I am not at home today.', status: true,explanation:'' },
      { id:2, alternative: 'I not am at home today.', status: false, explanation: 'A posição do "not" está incorreta, deve vir depois do verbo "am".' },
      { id:3, alternative: 'I does not am at home today.', status: false, explanation: 'Não se deve usar "does" com "am". O correto é "am not".' }
    ]
  },
  {
    id:28,
    phase: 'You are a fast runner.',
    response: [
      { id:1, alternative: 'You are not a fast runner.', status: true,explanation:'' },
      { id:2, alternative: 'You does not are a fast runner.', status: false, explanation: 'Não se deve usar "does" com "are". O correto é "are not".' },
      { id:3, alternative: 'You not are a fast runner.', status: false, explanation: 'O "not" deve vir depois de "are", formando "are not".' }
    ]
  },
  {
    id:29,
    phase: 'The house is very clean.',
    response: [
      { id:1, alternative: 'The house is not very clean.', status: true,explanation:'' },
      { id:2, alternative: 'The house does not is very clean.', status: false, explanation: 'A forma correta é "The house is not", não "does not is".' },
      { id:3, alternative: 'The house not is very clean.', status: false, explanation: 'A posição do "not" está incorreta, deve vir depois do verbo "is".' }
    ]
  },
  {
    id:30,
    phase: 'She is excited about the trip.',
    response: [
      { id:1, alternative: 'She is not excited about the trip.', status: true,explanation:'' },
      { id:2, alternative: 'She not is excited about the trip.', status: false, explanation: 'A posição do "not" está incorreta, deve vir depois do verbo "is".' },
      { id:3, alternative: 'She does not is excited about the trip.', status: false, explanation: 'A forma correta é "She is not", não "does not is".' }
    ]
  },
  {
    id: 31,
    phase: 'We are ready for the challenge.',
    response: [
      { id: 1, alternative: 'We are not ready for the challenge.', status: true,explanation:'' },
      { 
        id: 2, 
        alternative: 'We does not are ready for the challenge.', 
        status: false,
        explanation: 'A forma correta é "We are not", e o uso de "does not" com "are" está gramaticalmente errado.' 
      },
      { 
        id: 3, 
        alternative: 'We not are ready for the challenge.', 
        status: false,
        explanation: 'A ordem correta da frase é "We are not", não "We not are".' 
      }
    ]
  },
  {
    id: 32,
    phase: 'The movie is interesting.',
    response: [
      { id: 1, alternative: 'The movie is not interesting.', status: true,explanation:'' },
      { 
        id: 2, 
        alternative: 'The movie does not is interesting.', 
        status: false,
        explanation: 'Não se usa "does not" antes de "is". A forma correta é "The movie is not interesting".'
      },
      { 
        id: 3, 
        alternative: 'The movie not is interesting.', 
        status: false,
        explanation: 'A palavra "not" deve vir após o verbo "is", então a forma correta é "The movie is not interesting".'
      }
    ]
  },
  {
    id: 33,
    phase: 'I am listening to music.',
    response: [
      { id: 1, alternative: 'I am not listening to music.', status: true,explanation:'' },
      { 
        id: 2, 
        alternative: 'I not am listening to music.', 
        status: false,
        explanation: 'A posição do "not" está errada. A forma correta é "I am not listening to music".'
      },
      { 
        id: 3, 
        alternative: 'I does not am listening to music.', 
        status: false,
        explanation: 'O uso de "does not" está incorreto aqui, deve ser "I am not".'
      }
    ]
  },
  {
    id: 34,
    phase: 'They are playing soccer.',
    response: [
      { id: 1, alternative: 'They are not playing soccer.', status: true,explanation:'' },
      { 
        id: 2, 
        alternative: 'They does not are playing soccer.', 
        status: false,
        explanation: 'A forma correta é "They are not", e "does not" não pode ser usado com o verbo "are".'
      },
      { 
        id: 3, 
        alternative: 'They not are playing soccer.', 
        status: false,
        explanation: 'A ordem da frase está errada. O "not" deve vir após "are", como em "They are not playing soccer".'
      }
    ]
  },
  {
    id: 35,
    phase: 'It is a beautiful day.',
    response: [
      { id: 1, alternative: 'It is not a beautiful day.', status: true,explanation:'' },
      { 
        id: 2, 
        alternative: 'It not is a beautiful day.', 
        status: false,
        explanation: 'A ordem correta é "It is not", não "It not is".'
      },
      { 
        id: 3, 
        alternative: 'It does not is a beautiful day.', 
        status: false,
        explanation: 'A combinação "does not" com "is" está incorreta. Deve-se usar "It is not".'
      }
    ]
  },
  {
    id: 36,
    phase: 'He is very talented.',
    response: [
      { id: 1, alternative: 'He is not very talented.', status: true,explanation:'' },
      { 
        id: 2, 
        alternative: 'He does not is very talented.', 
        status: false,
        explanation: 'Não se usa "does not" antes de "is". A forma correta é "He is not very talented".'
      },
      { 
        id: 3, 
        alternative: 'He not is very talented.', 
        status: false,
        explanation: 'A ordem correta é "He is not", e não "He not is".'
      }
    ]
  },
  {
    id: 37,
    phase: 'The food is delicious.',
    response: [
      { id: 1, alternative: 'The food is not delicious.', status: true,explanation:'' },
      { 
        id: 2, 
        alternative: 'The food does not is delicious.', 
        status: false,
        explanation: 'A forma correta é "The food is not delicious", sem o uso de "does not" com "is".'
      },
      { 
        id: 3, 
        alternative: 'The food not is delicious.', 
        status: false,
        explanation: 'O "not" deve vir após o verbo "is", como em "The food is not delicious".'
      }
    ]
  },
  {
    id: 38,
    phase: 'We are enjoying the party.',
    response: [
      { id: 1, alternative: 'We are not enjoying the party.', status: true,explanation:'' },
      { 
        id: 2, 
        alternative: 'We not are enjoying the party.', 
        status: false,
        explanation: 'A posição do "not" está errada. A forma correta é "We are not enjoying the party".'
      },
      { 
        id: 3, 
        alternative: 'We does not are enjoying the party.', 
        status: false,
        explanation: 'Não se usa "does not" com "are". A forma correta é "We are not enjoying the party".'
      }
    ]
  },
  {
    id: 39,
    phase: 'I am reading a book.',
    response: [
      { id: 1, alternative: 'I am not reading a book.', status: true,explanation:'' },
      { 
        id: 2, 
        alternative: 'I not am reading a book.', 
        status: false,
        explanation: 'A ordem correta da frase é "I am not", e não "I not am".'
      },
      { 
        id: 3, 
        alternative: 'I does not am reading a book.', 
        status: false,
        explanation: 'A combinação "does not" com "am" está incorreta. A forma correta é "I am not".'
      }
    ]
  },
  {
    id: 40,
    phase: 'She is wearing a red dress.',
    response: [
      { id: 1, alternative: 'She is not wearing a red dress.', status: true,explanation:'' },
      { 
        id: 2, 
        alternative: 'She does not is wearing a red dress.', 
        status: false,
        explanation: 'Não se usa "does not" com "is". A forma correta é "She is not wearing a red dress".'
      },
      { 
        id: 3, 
        alternative: 'She not is wearing a red dress.', 
        status: false,
        explanation: 'A posição do "not" está errada. A forma correta é "She is not wearing a red dress".'
      }
    ]
  },
  {
    id: 41,
    phase: 'He is playing the guitar.',
    response: [
      { id: 1, alternative: 'He is not playing the guitar.', status: true,explanation:'' },
      { id: 2, alternative: 'He not is playing the guitar.', status: false, explanation: 'A ordem correta das palavras é "He is not playing", não "He not is playing".' },
      { id: 3, alternative: 'He does not is playing the guitar.', status: false, explanation: 'A forma correta é "He is not playing", sem o "does" na frase afirmativa.' }
    ]
  },
  {
    id: 42,
    phase: 'I am going to the gym.',
    response: [
      { id: 1, alternative: 'I am not going to the gym.', status: true,explanation:'' },
      { id: 2, alternative: 'I not am going to the gym.', status: false, explanation: 'A ordem correta é "I am not going", não "I not am going".' },
      { id: 3, alternative: 'I does not am going to the gym.', status: false, explanation: 'A forma correta é "I am not going", sem o "does" na frase afirmativa.' }
    ]
  },
  {
    id: 43,
    phase: 'The students are studying for the test.',
    response: [
      { id: 1, alternative: 'The students are not studying for the test.', status: true,explanation:'' },
      { id: 2, alternative: 'The students does not are studying for the test.', status: false, explanation: 'O "does" não é necessário quando o verbo "are" já está na frase.' },
      { id: 3, alternative: 'The students not are studying for the test.', status: false, explanation: 'A forma correta é "The students are not studying", não "The students not are studying".' }
    ]
  },
  {
    id: 44,
    phase: 'She is watching TV.',
    response: [
      { id: 1, alternative: 'She is not watching TV.', status: true,explanation:'' },
      { id: 2, alternative: 'She not is watching TV.', status: false, explanation: 'A ordem correta é "She is not watching", não "She not is watching".' },
      { id: 3, alternative: 'She does not is watching TV.', status: false, explanation: 'A forma correta é "She is not watching", sem o "does" na frase afirmativa.' }
    ]
  },
  {
    id: 45,
    phase: 'They are having breakfast.',
    response: [
      { id: 1, alternative: 'They are not having breakfast.', status: true,explanation:'' },
      { id: 2, alternative: 'They does not are having breakfast.', status: false, explanation: 'O "does" não é necessário quando o verbo "are" já está na frase.' },
      { id: 3, alternative: 'They not are having breakfast.', status: false, explanation: 'A forma correta é "They are not having", não "They not are having".' }
    ]
  },
  {
    id: 46,
    phase: 'I am learning English.',
    response: [
      { id: 1, alternative: 'I am not learning English.', status: true,explanation:'' },
      { id: 2, alternative: 'I does not am learning English.', status: false, explanation: 'A forma correta é "I am not learning", sem o "does" na frase afirmativa.' },
      { id: 3, alternative: 'I not am learning English.', status: false, explanation: 'A ordem correta é "I am not learning", não "I not am learning".' }
    ]
  },
  {
    id: 47,
    phase: 'The dog is sleeping.',
    response: [
      { id: 1, alternative: 'The dog is not sleeping.', status: true,explanation:'' },
      { id: 2, alternative: 'The dog does not is sleeping.', status: false, explanation: 'A forma correta é "The dog is not sleeping", sem o "does" na frase afirmativa.' },
      { id: 3, alternative: 'The dog not is sleeping.', status: false, explanation: 'A ordem correta é "The dog is not sleeping", não "The dog not is sleeping".' }
    ]
  },
  {
    id: 48,
    phase: 'She is cooking dinner.',
    response: [
      { id: 1, alternative: 'She is not cooking dinner.', status: true,explanation:'' },
      { id: 2, alternative: 'She does not is cooking dinner.', status: false, explanation: 'A forma correta é "She is not cooking", sem o "does" na frase afirmativa.' },
      { id: 3, alternative: 'She not is cooking dinner.', status: false, explanation: 'A ordem correta é "She is not cooking", não "She not is cooking".' }
    ]
  },
  {
    id: 49,
    phase: 'The sky is blue.',
    response: [
      { id: 1, alternative: 'The sky is not blue.', status: true,explanation:'' },
      { id: 2, alternative: 'The sky not is blue.', status: false, explanation: 'A ordem correta é "The sky is not blue", não "The sky not is blue".' },
      { id: 3, alternative: 'The sky does not is blue.', status: false, explanation: 'A forma correta é "The sky is not blue", sem o "does" na frase afirmativa.' }
    ]
  },
  {
    id: 50,
    phase: 'He is wearing glasses.',
    response: [
      { id: 1, alternative: 'He is not wearing glasses.', status: true,explanation:'' },
      { id: 2, alternative: 'He does not is wearing glasses.', status: false, explanation: 'A forma correta é "He is not wearing", sem o "does" na frase afirmativa.' },
      { id: 3, alternative: 'He not is wearing glasses.', status: false, explanation: 'A ordem correta é "He is not wearing", não "He not is wearing".' }
    ]
  }
]