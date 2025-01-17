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
    affirmative: string;
    negative: string;
    question: string;
  }[];
};

// Combinando os tipos
type Section = TextSection | TableSection;

export default function InfoSimplePresentComponent(){

  const dataInfo: TextSection[] = [
    {
      title: "O que é o Simple Present?",
      description:
        "O Simple Present é um tempo verbal usado para expressar ações habituais, fatos gerais, verdades universais e situações que acontecem no presente. Ele é frequentemente utilizado para falar sobre rotinas, preferências e situações permanentes.",
      exemples: [
        {
          title: "Exemplo 1:",
          text: '"I wake up early every day" (Eu acordo cedo todos os dias)',
        },
        {
          title: "Exemplo 2:",
          text: '"She works at a bank" (Ela trabalha em um banco)',
        },
      ],
    },
    {
      title: "Por que usar o Simple Present?",
      description:
        "O Simple Present é fundamental para falar sobre hábitos diários, ações repetidas e verdades gerais. Ele é usado quando queremos expressar algo que acontece regularmente ou que é sempre verdadeiro.",
      exemples: [
        {
          title: "Afirmativa:",
          text: '"He plays football every weekend" (Ele joga futebol todo final de semana)',
        },
        {
          title: "Negativa:",
          text: '"They do not (dont) like coffee" (Eles não gostam de café)',
        },
        {
          title: "Interrogativa:",
          text: '"Do you like pizza?" (Você gosta de pizza?)',
        },
      ],
    },
  ];
  
  const simplePresentTable: TableSection = {
    title: "Tabela do Simple Present",
    table: [
      { subject: "I", affirmative: "I work", negative: "I do not (don’t) work", question: "Do I work?" },
      { subject: "You", affirmative: "You work", negative: "You do not (don’t) work", question: "Do you work?" },
      { subject: "He/She/It", affirmative: "He works", negative: "He does not (doesn't) work", question: "Does he work?" },
      { subject: "We", affirmative: "We work", negative: "We do not (don’t) work", question: "Do we work?" },
      { subject: "You (plural)", affirmative: "You work", negative: "You do not (don’t) work", question: "Do you work?" },
      { subject: "They", affirmative: "They work", negative: "They do not (don’t) work", question: "Do they work?" },
    ],
  };

  // Combinando todas as seções
  const sections: Section[] = [...dataInfo, simplePresentTable];

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
                <th className="border border-gray-300 px-4 py-2 text-left">Affirmative</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Negative</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Question</th>
              </tr>
            </thead>
            <tbody>
              {sections[currentIndex].table.map((pronoun, index) => (
                <tr key={index} className="even:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">{pronoun.subject}</td>
                  <td className="border border-gray-300 px-4 py-2">{pronoun.affirmative}</td>
                  <td className="border border-gray-300 px-4 py-2">{pronoun.negative}</td>
                  <td className="border border-gray-300 px-4 py-2">{pronoun.question}</td>
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