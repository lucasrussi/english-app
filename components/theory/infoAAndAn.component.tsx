import { useState } from "react";

// Definindo os tipos para as seções
type TextSection = {
  title: string;
  description: string;
  exemples: { title: string; text: string }[];
};

type TableSection = {
  title: string;
  table: {
    subject: string;
    rule: string;
    example: string;
  }[];
};

// Combinando os tipos
type Section = TextSection | TableSection;

export default function InfoAAndAnComponent(){

  const dataInfo: TextSection[] = [
    {
      title: "O que são os artigos 'a' e 'an'?",
      description:
        "'A' e 'an' são artigos indefinidos usados para indicar um substantivo de forma geral e não específica. Eles são usados no Singular e dependem do som inicial da palavra que segue o artigo.",
      exemples: [
        {
          title: "Exemplo 1 (Usando 'a'):",
          text: '"I saw a cat" (Eu vi um gato)',
        },
        {
          title: "Exemplo 2 (Usando 'an'):",
          text: '"She ate an apple" (Ela comeu uma maçã)',
        },
      ],
    },
    {
      title: "Como usar 'a' e 'an'?",
      description:
        "Os artigos 'a' e 'an' são usados para falar de coisas de maneira geral. A principal diferença entre eles é o som inicial da palavra seguinte. 'A' é usado antes de palavras que começam com som consonantal, e 'an' é usado antes de palavras que começam com som vocálico.",
      exemples: [
        {
          title: "Usando 'a':",
          text: '"He is a teacher" (Ele é um professor)',
        },
        {
          title: "Usando 'an':",
          text: '"It is an orange" (É uma laranja)',
        },
      ],
    },
  ];
  
  const articleTable: TableSection = {
    title: "Tabela de 'a' e 'an'",
    table: [
      { subject: "A", rule: "Usado antes de palavras que começam com som consonantal", example: '"a book"' },
      { subject: "An", rule: "Usado antes de palavras que começam com som vocálico", example: '"an hour"' },
    ],
  };

  // Combinando todas as seções
  const sections: Section[] = [...dataInfo, articleTable];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < sections.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="shadow-md rounded-md border px-8 py-2 border-gray-300 mb-4 bg-stone-100">
      {/* Renderiza a seção atual */}
      {("table" in sections[currentIndex]) ? (
        // Exibe a tabela se a seção atual for a tabela
        <section className="mb-6">
          <h3 className="text-xl font-bold mb-4">{sections[currentIndex].title}</h3>
          <table className="min-w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Subject</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Rule</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Example</th>
              </tr>
            </thead>
            <tbody>
              {sections[currentIndex].table.map((pronoun, index) => (
                <tr key={index} className="even:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">{pronoun.subject}</td>
                  <td className="border border-gray-300 px-4 py-2">{pronoun.rule}</td>
                  <td className="border border-gray-300 px-4 py-2">{pronoun.example}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      ) : (
        // Exibe o conteúdo textual
        <section className="mb-6">
          <h3 className="text-xl font-bold mb-4">{sections[currentIndex].title}</h3>
          <p className="mb-4">{sections[currentIndex].description}</p>

          <div>
            <h5 className="text-lg font-semibold mb-2">Exemplos</h5>
            <ul className="list-disc pl-5 space-y-3">
              {sections[currentIndex].exemples.map((itemExemple, indexExemple) => (
                <li key={`example-${currentIndex}-${indexExemple}`}>
                  <p className="font-medium">{itemExemple.title}</p>
                  <p>{itemExemple.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Botões de navegação */}
      <div className="flex justify-between mt-6">
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Anterior
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex === sections.length - 1}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Próximo
        </button>
      </div>
    </div>
  );
}