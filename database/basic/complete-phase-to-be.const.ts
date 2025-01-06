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
      { id:2,alternative: 'is', status: false, explanation: "The subject 'I' requires the verb 'am' in the present tense, not 'is'." },
      { id:3,alternative: 'are', status: false, explanation: "The subject 'I' takes 'am', not 'are'." }
    ]
  },
  { 
    id:12,
    phase: 'You ___ not late.', 
    response: [
      { id:1,alternative: 'am', status: false, explanation: "The subject 'You' does not use 'am'. It uses 'are'." },
      { id:2,alternative: 'is', status: false, explanation: "The subject 'You' does not use 'is'. It uses 'are'." },
      { id:3,alternative: 'are', status: true,explanation:'' }
    ]
  },
  { 
    id:13,
    phase: 'This ___ a beautiful painting.', 
    response: [
      { id:1,alternative: 'am', status: false, explanation: "The subject 'This' requires the verb 'is', not 'am'." },
      { id:2,alternative: 'is', status: true,explanation:'' },
      { id:3,alternative: 'are', status: false, explanation: "The subject 'This' is singular and requires 'is', not 'are'." }
    ]
  },
  { 
    id:14,
    phase: 'They ___ very tired.', 
    response: [
      { id:1,alternative: 'am', status: false, explanation: "The subject 'They' does not use 'am'. It uses 'are'." },
      { id:2,alternative: 'is', status: false, explanation: "The subject 'They' does not use 'is'. It uses 'are'." },
      { id:3,alternative: 'are', status: true,explanation:'' }
    ]
  },
  { 
    id:15,
    phase: 'My car ___ blue.', 
    response: [
      { id:1,alternative: 'am', status: false, explanation: "The subject 'My car' is singular and requires 'is', not 'am'." },
      { id:2,alternative: 'is', status: true,explanation:'' },
      { id:3,alternative: 'are', status: false, explanation: "The subject 'My car' is singular, so 'are' is incorrect." }
    ]
  },
  { 
    id:16,
    phase: 'The flowers ___ beautiful.', 
    response: [
      { id:1,alternative: 'am', status: false, explanation: "The subject 'The flowers' does not use 'am'. It uses 'are'." },
      { id:2,alternative: 'is', status: false, explanation: "The subject 'The flowers' does not use 'is'. It uses 'are'." },
      { id:3,alternative: 'are', status: true,explanation:'' }
    ]
  },
  { 
    id:17,
    phase: 'We ___ in the same class.', 
    response: [
      { id:1,alternative: 'am', status: false, explanation: "The subject 'We' does not use 'am'. It uses 'are'." },
      { id:2,alternative: 'is', status: false, explanation: "The subject 'We' does not use 'is'. It uses 'are'." },
      { id:3,alternative: 'are', status: true,explanation:'' }
    ]
  },
  { 
    id:18,
    phase: 'I ___ not hungry.', 
    response: [
      { id:1,alternative: 'am', status: true,explanation:'' },
      { id:2,alternative: 'is', status: false, explanation: "The subject 'I' requires 'am', not 'is'." },
      { id:3,alternative: 'are', status: false, explanation: "The subject 'I' requires 'am', not 'are'." }
    ]
  },
  { 
    id:19,
    phase: 'The weather ___ cold today.', 
    response: [
      { id:1,alternative: 'am', status: false, explanation: "The subject 'The weather' requires 'is', not 'am'." },
      { id:2,alternative: 'is', status: true,explanation:'' },
      { id:3,alternative: 'are', status: false, explanation: "The subject 'The weather' is singular, so 'are' is incorrect." }
    ]
  },
  { 
    id:20,
    phase: 'He ___ my best friend.', 
    response: [
      { id:1,alternative: 'am', status: false, explanation: "The subject 'He' does not use 'am'. It uses 'is'." },
      { id:2,alternative: 'is', status: true,explanation:'' },
      { id:3,alternative: 'are', status: false, explanation: "The subject 'He' is singular, so 'are' is incorrect." }
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
        explanation: "Use 'am' when the subject is 'I'. Here, the subject is 'This', which is singular, so 'am' is incorrect."
      },
      { id: 2, alternative: 'is', status: true,explanation:'' },
      { 
        id: 3, 
        alternative: 'are', 
        status: false,
        explanation: "Use 'are' for plural subjects. 'This' is singular, so 'are' is incorrect."
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
        explanation: "Use 'am' with 'I'. 'The stars' is plural, so 'am' is incorrect."
      },
      { id: 2, alternative: 'is', status: false, explanation: "Use 'is' for singular subjects. 'The stars' is plural, so 'is' is incorrect." },
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
        explanation: "Use 'am' with 'I'. The subject here is 'We', which requires 'are'."
      },
      { id: 2, alternative: 'is', status: false, explanation: "Use 'is' for singular subjects. 'We' is plural, so 'is' is incorrect." },
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
        explanation: "Use 'is' for singular subjects, like 'He' or 'She'. 'I' requires 'am', so 'is' is incorrect."
      },
      { 
        id: 3, 
        alternative: 'are', 
        status: false, 
        explanation: "Use 'are' for plural subjects. 'I' requires 'am', so 'are' is incorrect."
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
        explanation: "Use 'am' with 'I'. 'She' requires 'is', so 'am' is incorrect."
      },
      { id: 2, alternative: 'is', status: true,explanation:'' },
      { 
        id: 3, 
        alternative: 'are', 
        status: false, 
        explanation: "Use 'are' for plural subjects. 'She' requires 'is', so 'are' is incorrect."
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
        explanation: "Use 'am' with 'I'. 'The phone' is singular, so 'am' is incorrect."
      },
      { id: 2, alternative: 'is', status: true,explanation:'' },
      { 
        id: 3, 
        alternative: 'are', 
        status: false, 
        explanation: "Use 'are' for plural subjects. 'The phone' is singular, so 'are' is incorrect."
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
        explanation: "Use 'am' with 'I'. 'You' requires 'are', so 'am' is incorrect."
      },
      { id: 2, alternative: 'is', status: false, explanation: "Use 'is' for singular subjects. 'You' requires 'are', so 'is' is incorrect." },
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
        explanation: "Use 'am' with 'I'. 'They' requires 'are', so 'am' is incorrect."
      },
      { id: 2, alternative: 'is', status: false, explanation: "Use 'is' for singular subjects. 'They' is plural, so 'is' is incorrect." },
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
        explanation: "Use 'am' with 'I'. 'It' requires 'is', so 'am' is incorrect."
      },
      { id: 2, alternative: 'is', status: true,explanation:'' },
      { 
        id: 3, 
        alternative: 'are', 
        status: false, 
        explanation: "Use 'are' for plural subjects. 'It' is singular, so 'are' is incorrect."
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
        explanation: "Use 'is' for singular subjects like 'He' or 'She'. 'I' requires 'am', so 'is' is incorrect."
      },
      { 
        id: 3, 
        alternative: 'are', 
        status: false, 
        explanation: "Use 'are' for plural subjects. 'I' requires 'am', so 'are' is incorrect."
      }
    ]
  }
]