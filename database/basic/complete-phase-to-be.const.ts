export const CompletePhaseToBe = [
  { 
    id: 1,
    phase: 'I ___ happy.',
    response: [
      { id: 1, alternative: 'am', status: true,explanation:'' },
      { id: 2, alternative: 'is', status: false, explanation: "O verbo 'is' é usado com a terceira pessoa do singular (he, she, it), não com a primeira pessoa (I)." },
      { id: 3, alternative: 'are', status: false, explanation: "O verbo 'are' é usado com 'you', 'we', 'they', e não com 'I'." }
    ]
  },
  { 
    id: 2,
    phase: 'She ___ my teacher.',
    response: [
      { id: 1, alternative: 'am', status: false, explanation: "O verbo 'am' é usado apenas com a primeira pessoa do singular (I), não com 'she'." },
      { id: 2, alternative: 'is', status: true,explanation:'' },
      { id: 3, alternative: 'are', status: false, explanation: "O verbo 'are' é usado com 'you', 'we', 'they', e não com 'she'." }
    ]
  },
  { 
    id: 3,
    phase: 'They ___ at the park.',
    response: [
      { id: 1, alternative: 'am', status: false, explanation: "O verbo 'am' é usado apenas com a primeira pessoa do singular (I), não com 'they'." },
      { id: 2, alternative: 'is', status: false, explanation: "O verbo 'is' é usado com a terceira pessoa do singular (he, she, it), mas 'they' é plural." },
      { id: 3, alternative: 'are', status: true,explanation:'' }
    ]
  },
  { 
    id: 4,
    phase: 'We ___ friends.',
    response: [
      { id: 1, alternative: 'am', status: false, explanation: "O verbo 'am' é usado apenas com a primeira pessoa do singular (I), não com 'we'." },
      { id: 2, alternative: 'is', status: false, explanation: "O verbo 'is' é usado com a terceira pessoa do singular (he, she, it), não com 'we'." },
      { id: 3, alternative: 'are', status: true,explanation:'' }
    ]
  },
  { 
    id: 5,
    phase: 'It ___ a sunny day.',
    response: [
      { id: 1, alternative: 'am', status: false, explanation: "O verbo 'am' é usado apenas com 'I', mas 'it' exige o verbo 'is'." },
      { id: 2, alternative: 'is', status: true,explanation:'' },
      { id: 3, alternative: 'are', status: false, explanation: "O verbo 'are' é usado com 'you', 'we', 'they', e não com 'it'." }
    ]
  },
  { 
    id: 6,
    phase: 'You ___ very kind.',
    response: [
      { id: 1, alternative: 'am', status: false, explanation: "O verbo 'am' é usado apenas com 'I', não com 'you'." },
      { id: 2, alternative: 'is', status: false, explanation: "O verbo 'is' é usado com a terceira pessoa do singular, não com 'you'." },
      { id: 3, alternative: 'are', status: true,explanation:'' }
    ]
  },
  { 
    id: 7,
    phase: 'He ___ a doctor.',
    response: [
      { id: 1, alternative: 'am', status: false, explanation: "O verbo 'am' é usado apenas com 'I', não com 'he'." },
      { id: 2, alternative: 'is', status: true,explanation:'' },
      { id: 3, alternative: 'are', status: false, explanation: "O verbo 'are' é usado com 'you', 'we', 'they', e não com 'he'." }
    ]
  },
  { 
    id: 8,
    phase: 'The book ___ on the table.',
    response: [
      { id: 1, alternative: 'am', status: false, explanation: "O verbo 'am' é usado apenas com 'I', não com 'the book'." },
      { id: 2, alternative: 'is', status: true,explanation:'' },
      { id: 3, alternative: 'are', status: false, explanation: "O verbo 'are' é usado com plural, mas 'the book' é singular." }
    ]
  },
  { 
    id: 9,
    phase: 'We ___ ready for the test.',
    response: [
      { id: 1, alternative: 'am', status: false, explanation: "O verbo 'am' é usado apenas com 'I', não com 'we'." },
      { id: 2, alternative: 'is', status: false, explanation: "O verbo 'is' é usado com a terceira pessoa do singular (he, she, it), não com 'we'." },
      { id: 3, alternative: 'are', status: true,explanation:'' }
    ]
  },
  { 
    id: 10,
    phase: 'She ___ not at home.',
    response: [
      { id: 1, alternative: 'am', status: false, explanation: "O verbo 'am' é usado apenas com 'I', não com 'she'." },
      { id: 2, alternative: 'is', status: true,explanation:'' },
      { id: 3, alternative: 'are', status: false, explanation: "O verbo 'are' é usado com 'you', 'we', 'they', e não com 'she'." }
    ]
  },
  { 
    id:11,
    phase: 'I ___ from Brazil.', 
    response: [
      { id:1,alternative: 'am', status: true,explanation:'' },
      { id:2,alternative: 'is', status: false, explanation: "O sujeito 'I' requer o verbo 'am' no presente do indicativo, não 'is'." },
      { id:3,alternative: 'are', status: false, explanation: "O sujeito 'I' usa 'am', não 'are'." }
    ]
  },
  { 
    id:12,
    phase: 'You ___ not late.', 
    response: [
      { id:1,alternative: 'am', status: false, explanation: "O sujeito 'You' não usa 'am'. It usa 'are'." },
      { id:2,alternative: 'is', status: false, explanation: "O sujeito 'You' não usa 'is'. It usa 'are'." },
      { id:3,alternative: 'are', status: true,explanation:'' }
    ]
  },
  { 
    id:13,
    phase: 'This ___ a beautiful painting.', 
    response: [
      { id:1,alternative: 'am', status: false, explanation: "O sujeito 'This' requer o verbo 'is', não 'am'." },
      { id:2,alternative: 'is', status: true,explanation:'' },
      { id:3,alternative: 'are', status: false, explanation: "O sujeito 'This' requer o verbo 'is', não 'are'." }
    ]
  },
  { 
    id:14,
    phase: 'They ___ very tired.', 
    response: [
      { id:1,alternative: 'am', status: false, explanation: "O sujeito 'They' não usa 'am'. It usa 'are'." },
      { id:2,alternative: 'is', status: false, explanation: "O sujeito 'They' não usa 'is'. It usa 'are'." },
      { id:3,alternative: 'are', status: true,explanation:'' }
    ]
  },
  { 
    id:15,
    phase: 'My car ___ blue.', 
    response: [
      { id:1,alternative: 'am', status: false, explanation: "O sujeito 'My car' é singular e querer 'is', não 'am'." },
      { id:2,alternative: 'is', status: true,explanation:'' },
      { id:3,alternative: 'are', status: false, explanation: "O sujeito 'My car' é singular, então 'are' é incorreto." }
    ]
  },
  { 
    id:16,
    phase: 'The flowers ___ beautiful.', 
    response: [
      { id:1,alternative: 'am', status: false, explanation: "O sujeito 'The flowers' não usa 'am'. Ele usa 'are'." },
      { id:2,alternative: 'is', status: false, explanation: "O sujeito 'The flowers' não usa 'is'. Ele usa 'are'." },
      { id:3,alternative: 'are', status: true,explanation:'' }
    ]
  },
  { 
    id:17,
    phase: 'We ___ in the same class.', 
    response: [
      { id:1,alternative: 'am', status: false, explanation: "O sujeito 'We' não usa 'am'. Ele usa 'are'." },
      { id:2,alternative: 'is', status: false, explanation: "O sujeito 'We' não usa 'is'. Ele usa 'are'." },
      { id:3,alternative: 'are', status: true,explanation:'' }
    ]
  },
  { 
    id:18,
    phase: 'I ___ not hungry.', 
    response: [
      { id:1,alternative: 'am', status: true,explanation:'' },
      { id:2,alternative: 'is', status: false, explanation: "O sujeito 'I' requer 'am', não 'is'." },
      { id:3,alternative: 'are', status: false, explanation: "O sujeito 'I' requer 'am', não 'are'." }
    ]
  },
  { 
    id:19,
    phase: 'The weather ___ cold today.', 
    response: [
      { id:1,alternative: 'am', status: false, explanation: "O sujeito 'The weather' requer 'is', não 'am'." },
      { id:2,alternative: 'is', status: true,explanation:'' },
      { id:3,alternative: 'are', status: false, explanation: "O sujeito 'The weather' é singular, então 'are' é incorreto." }
    ]
  },
  { 
    id:20,
    phase: 'He ___ my best friend.', 
    response: [
      { id:1,alternative: 'am', status: false, explanation: "O sujeito 'He' não usa 'am'. Ele usa 'is'." },
      { id:2,alternative: 'is', status: true,explanation:'' },
      { id:3,alternative: 'are', status: false, explanation: "O sujeito 'He' is singular, então 'are' é incorreto." }
    ]
  },
  { 
    id: 21,
    phase: 'You ___ very funny.', 
    response: [
      { id: 1, alternative: 'am', status: false, explanation: 'Utilizamos "are" com o pronome "you".' },
      { id: 2, alternative: 'is', status: false, explanation: 'Utilizamos "are" com o pronome "you".' },
      { id: 3, alternative: 'are', status: true,explanation:'' }
    ]
  },
  { 
    id: 22,
    phase: 'This ___ my favorite song.', 
    response: [
      { id: 1, alternative: 'am', status: false, explanation: 'Utilizamos "is" com o sujeito "this".' },
      { id: 2, alternative: 'is', status: true,explanation:'' },
      { id: 3, alternative: 'are', status: false, explanation: 'Utilizamos "is" com o sujeito "this".' }
    ]
  },
  { 
    id: 23,
    phase: 'She ___ not feeling well.', 
    response: [
      { id: 1, alternative: 'am', status: false, explanation: 'Utilizamos "is" com o pronome "she".' },
      { id: 2, alternative: 'is', status: true,explanation:'' },
      { id: 3, alternative: 'are', status: false, explanation: 'Utilizamos "is" com o pronome "she".' }
    ]
  },
  { 
    id: 24,
    phase: 'The children ___ in the garden.', 
    response: [
      { id: 1, alternative: 'am', status: false, explanation: 'Utilizamos "are" com "children", que é plural.' },
      { id: 2, alternative: 'is', status: false, explanation: 'Utilizamos "are" com "children", que é plural.' },
      { id: 3, alternative: 'are', status: true,explanation:'' }
    ]
  },
  { 
    id: 25,
    phase: 'My parents ___ very nice.', 
    response: [
      { id: 1, alternative: 'am', status: false, explanation: 'Utilizamos "are" com "parents", que é plural.' },
      { id: 2, alternative: 'is', status: false, explanation: 'Utilizamos "are" com "parents", que é plural.' },
      { id: 3, alternative: 'are', status: true,explanation:'' }
    ]
  },
  { 
    id: 26,
    phase: 'I ___ excited about the trip.', 
    response: [
      { id: 1, alternative: 'am', status: true,explanation:'' },
      { id: 2, alternative: 'is', status: false, explanation: 'Utilizamos "am" com o pronome "I".' },
      { id: 3, alternative: 'are', status: false, explanation: 'Utilizamos "am" com o pronome "I".' }
    ]
  },
  { 
    id: 27,
    phase: 'The dog ___ very friendly.', 
    response: [
      { id: 1, alternative: 'am', status: false, explanation: 'Utilizamos "is" com "dog", que é singular.' },
      { id: 2, alternative: 'is', status: true,explanation:'' },
      { id: 3, alternative: 'are', status: false, explanation: 'Utilizamos "is" com "dog", que é singular.' }
    ]
  },
  { 
    id: 28,
    phase: 'We ___ not late for the meeting.', 
    response: [
      { id: 1, alternative: 'am', status: false, explanation: 'Utilizamos "are" com o pronome "we".' },
      { id: 2, alternative: 'is', status: false, explanation: 'Utilizamos "are" com o pronome "we".' },
      { id: 3, alternative: 'are', status: true,explanation:'' }
    ]
  },
  { 
    id: 29,
    phase: 'It ___ not raining.', 
    response: [
      { id: 1, alternative: 'am', status: false, explanation: 'Utilizamos "is" com o sujeito "it".' },
      { id: 2, alternative: 'is', status: true,explanation:'' },
      { id: 3, alternative: 'are', status: false, explanation: 'Utilizamos "is" com o sujeito "it".' }
    ]
  },
  { 
    id: 30,
    phase: 'He ___ a great musician.', 
    response: [
      { id: 1, alternative: 'am', status: false, explanation: 'Utilizamos "is" com o sujeito "he".' },
      { id: 2, alternative: 'is', status: true,explanation:'' },
      { id: 3, alternative: 'are', status: false, explanation: 'Utilizamos "is" com o sujeito "he".' }
    ]
  },
  { 
    id: 31,
    phase: 'You ___ always on time.', 
    response: [
      { id: 1, alternative: 'am', status: false, explanation: 'Utilizamos "are" com o pronome "you".' },
      { id: 2, alternative: 'is', status: false, explanation: 'Utilizamos "are" com o pronome "you".' },
      { id: 3, alternative: 'are', status: true,explanation:'' }
    ]
  },
  { 
    id: 32,
    phase: 'This ___ the best day ever!', 
    response: [
      { id: 1, alternative: 'am', status: false, explanation: 'Utilizamos "is" com o sujeito "this".' },
      { id: 2, alternative: 'is', status: true,explanation:'' },
      { id: 3, alternative: 'are', status: false, explanation: 'Utilizamos "is" com o sujeito "this".' }
    ]
  },
  { 
    id: 33,
    phase: 'They ___ very interested in the project.', 
    response: [
      { id: 1, alternative: 'am', status: false, explanation: 'Utilizamos "are" com o sujeito plural "they".' },
      { id: 2, alternative: 'is', status: false, explanation: 'Utilizamos "are" com o sujeito plural "they".' },
      { id: 3, alternative: 'are', status: true,explanation:'' }
    ]
  },
  { 
    id: 34,
    phase: 'The house ___ very big.', 
    response: [
      { id: 1, alternative: 'am', status: false, explanation: 'Utilizamos "is" com o sujeito singular "house".' },
      { id: 2, alternative: 'is', status: true,explanation:'' },
      { id: 3, alternative: 'are', status: false, explanation: 'Utilizamos "is" com o sujeito singular "house".' }
    ]
  },
  { 
    id: 35,
    phase: 'We ___ on vacation.', 
    response: [
      { id: 1, alternative: 'am', status: false, explanation: 'Utilizamos "are" com o pronome "we".' },
      { id: 2, alternative: 'is', status: false, explanation: 'Utilizamos "are" com o pronome "we".' },
      { id: 3, alternative: 'are', status: true,explanation:'' }
    ]
  },
  { 
    id: 36,
    phase: 'She ___ not very tall.', 
    response: [
      { id: 1, alternative: 'am', status: false, explanation: 'Utilizamos "is" com o pronome "she".' },
      { id: 2, alternative: 'is', status: true,explanation:'' },
      { id: 3, alternative: 'are', status: false, explanation: 'Utilizamos "is" com o pronome "she".' }
    ]
  },
  { 
    id: 37,
    phase: 'The car ___ parked outside.', 
    response: [
      { id: 1, alternative: 'am', status: false, explanation: 'Utilizamos "is" com o sujeito singular "car".' },
      { id: 2, alternative: 'is', status: true,explanation:'' },
      { id: 3, alternative: 'are', status: false, explanation: 'Utilizamos "is" com o sujeito singular "car".' }
    ]
  },
  { 
    id: 38,
    phase: 'I ___ happy to see you.', 
    response: [
      { id: 1, alternative: 'am', status: true,explanation:'' },
      { id: 2, alternative: 'is', status: false, explanation: 'Utilizamos "am" com o pronome "I".' },
      { id: 3, alternative: 'are', status: false, explanation: 'Utilizamos "am" com o pronome "I".' }
    ]
  },
  { 
    id: 39,
    phase: 'The kids ___ playing in the yard.', 
    response: [
      { id: 1, alternative: 'am', status: false, explanation: 'Utilizamos "are" com o sujeito plural "kids".' },
      { id: 2, alternative: 'is', status: false, explanation: 'Utilizamos "are" com o sujeito plural "kids".' },
      { id: 3, alternative: 'are', status: true,explanation:'' }
    ]
  },
  { 
    id: 40,
    phase: 'He ___ not at work today.', 
    response: [
      { id: 1, alternative: 'am', status: false, explanation: 'Utilizamos "is" com o pronome "he".' },
      { id: 2, alternative: 'is', status: true,explanation:'' },
      { id: 3, alternative: 'are', status: false, explanation: 'Utilizamos "is" com o pronome "he".' }
    ]
  },
  { 
    id: 41,
    phase: 'This ___ not my bag.',
    response: [
      { 
        id: 1, 
        alternative: 'am', 
        status: false,
        explanation: "Usamos 'am' quanto o sujeito é 'I'. Aqui, o sujeito é 'This',o qual é singular, então 'am' é incorreto."
      },
      { id: 2, alternative: 'is', status: true,explanation:'' },
      { 
        id: 3, 
        alternative: 'are', 
        status: false,
        explanation: "Usamos 'are' para sujeitos no plural. 'This' é singular, então 'are' é incorreto."
      }
    ]
  },
  { 
    id: 42,
    phase: 'The stars ___ very bright tonight.',
    response: [
      { 
        id: 1, 
        alternative: 'am', 
        status: false,
        explanation: "Usamos 'am' com 'I'. 'The stars' é plural, então 'am' é incorreto."
      },
      { id: 2, alternative: 'is', status: false, explanation: "Usamos 'is' para sujeitos singulares. 'The stars' é plural, então 'is' é incorreto." },
      { id: 3, alternative: 'are', status: true,explanation:'' }
    ]
  },
  { 
    id: 43,
    phase: 'We ___ not finished yet.',
    response: [
      { 
        id: 1, 
        alternative: 'am', 
        status: false,
        explanation: "Usamos 'am' com 'I'. O sujeito aqui é 'We', o qual requer 'are'."
      },
      { id: 2, alternative: 'is', status: false, explanation: "Usamos 'is' para sujeitos singulares. 'We' é plural, então 'is' é incorreto." },
      { id: 3, alternative: 'are', status: true,explanation:'' }
    ]
  },
  { 
    id: 44,
    phase: 'I ___ very proud of you.',
    response: [
      { id: 1, alternative: 'am', status: true,explanation:'' },
      { 
        id: 2, 
        alternative: 'is', 
        status: false, 
        explanation: "Usamos 'is' para sujeitos singulares, como 'He' ou 'She'. 'I' requer 'am', então 'is' é incorreto."
      },
      { 
        id: 3, 
        alternative: 'are', 
        status: false, 
        explanation: "Usamos 'are' para sujeitos plurais. 'I' requer 'am', então 'are' é incorreto."
      }
    ]
  },
  { 
    id: 45,
    phase: 'She ___ a wonderful cook.',
    response: [
      { 
        id: 1, 
        alternative: 'am', 
        status: false, 
        explanation: "Usamos 'am' com 'I'. 'She' requer 'is', então 'am' é incorreto."
      },
      { id: 2, alternative: 'is', status: true,explanation:'' },
      { 
        id: 3, 
        alternative: 'are', 
        status: false, 
        explanation: "Usamos 'are' para sujeitos plurais. 'She' requer 'is', então 'are' é incorreto."
      }
    ]
  },
  { 
    id: 46,
    phase: 'The phone ___ on the table.',
    response: [
      { 
        id: 1, 
        alternative: 'am', 
        status: false, 
        explanation: "Usamos 'am' with 'I'. 'The phone' é singular, então 'am' é incorreto."
      },
      { id: 2, alternative: 'is', status: true,explanation:'' },
      { 
        id: 3, 
        alternative: 'are', 
        status: false, 
        explanation: "Usamos 'are' for sujeitos plurais. 'The phone' é singular, então 'are' é incorreto."
      }
    ]
  },
  { 
    id: 47,
    phase: 'You ___ very good at sports.',
    response: [
      { 
        id: 1, 
        alternative: 'am', 
        status: false, 
        explanation: "Usamos 'am' with 'I'. 'You' requer 'are', então 'am' é incorreto."
      },
      { id: 2, alternative: 'is', status: false, explanation: "Usamos 'is' para sujeitos singulares. 'You' requer 'are', então 'is' é incorreto." },
      { id: 3, alternative: 'are', status: true,explanation:'' }
    ]
  },
  { 
    id: 48,
    phase: 'They ___ not interested in the movie.',
    response: [
      { 
        id: 1, 
        alternative: 'am', 
        status: false, 
        explanation: "Usamos 'am' com 'I'. 'They' requer 'are', então 'am' é incorreto."
      },
      { id: 2, alternative: 'is', status: false, explanation: "Usamos 'is' para sujeitos singulares. 'They' is plural, então 'is' é incorreto." },
      { id: 3, alternative: 'are', status: true,explanation:'' }
    ]
  },
  { 
    id: 49,
    phase: 'It ___ time to go.',
    response: [
      { 
        id: 1, 
        alternative: 'am', 
        status: false, 
        explanation: "Usamos 'am' com 'I'. 'It' requer 'is', então 'am' é incorreto."
      },
      { id: 2, alternative: 'is', status: true,explanation:'' },
      { 
        id: 3, 
        alternative: 'are', 
        status: false, 
        explanation: "Usamos 'are' para sujeitos plurais. 'It' é singular, então 'are' é incorreto."
      }
    ]
  },
  { 
    id: 50,
    phase: 'I ___ very tired after the trip.',
    response: [
      { id: 1, alternative: 'am', status: true,explanation:'' },
      { 
        id: 2, 
        alternative: 'is', 
        status: false, 
        explanation: "Usamos 'is' para sujeitos singulares como 'He' ou 'She'. 'I' requer 'am', então 'is' é incorreto."
      },
      { 
        id: 3, 
        alternative: 'are', 
        status: false, 
        explanation: "Usamos 'are' para sujeitos plurais. 'I' requer 'am', então 'are' é incorreto."
      }
    ]
  }
]