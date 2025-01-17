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
    present: string;
    past: string;
    future: string;
  }[];
};

// Combinando os tipos
type Section = TextSection | TableSection;

export default function InfoVerbToBeComponent(){

  const dataInfo: TextSection[] = [
    {
      title: "O que é o verbo to be?",
      description:
        "O verbo 'to be' é um dos verbos mais importantes na língua inglesa. Ele é usado para indicar estados, condições, identidades e características. Pode ser traduzido como 'ser' ou 'estar' em português, dependendo do contexto.",
      exemples: [
        {
          title: "Exemplo 1:",
          text: '"I am happy" (Eu estou feliz)',
        },
        {
          title: "Exemplo 2:",
          text: '"She is a teacher" (Ela é professora)',
        },
      ],
    },
    {
      title: "Por que usar o verbo to be?",
      description:
        "O verbo 'to be' é fundamental para formar frases afirmativas, negativas e interrogações em inglês. Sem ele, seria difícil expressar estados, ações contínuas ou identidades.",
      exemples: [
        {
          title: "Afirmativa:",
          text: '"They are students" (Eles são estudantes)',
        },
        {
          title: "Negativa:",
          text: '"He is not tired" (Ele não está cansado)',
        },
        {
          title: "Interrogativa:",
          text: '"Are you ready?" (Você está pronto?)',
        },
      ],
    },
  ];
  
  const verbToBeTable: TableSection = {
    title: "Tabela do Verbo to be",
    table: [
      { subject: "I", present: "am", past: "was", future: "will be" },
      { subject: "You", present: "are", past: "were", future: "will be" },
      { subject: "He/She/It", present: "is", past: "was", future: "will be" },
      { subject: "We", present: "are", past: "were", future: "will be" },
      { subject: "You (plural)", present: "are", past: "were", future: "will be" },
      { subject: "They", present: "are", past: "were", future: "will be" },
    ],
  };

  // Combinando todas as seções
  const sections: Section[] = [...dataInfo, verbToBeTable];

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
                <th className="border border-gray-300 px-4 py-2 text-left">Present</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Past</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Future</th>
              </tr>
            </thead>
            <tbody>
              {sections[currentIndex].table.map((pronoun, index) => (
                <tr key={index} className="even:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">{pronoun.subject}</td>
                  <td className="border border-gray-300 px-4 py-2">{pronoun.present}</td>
                  <td className="border border-gray-300 px-4 py-2">{pronoun.past}</td>
                  <td className="border border-gray-300 px-4 py-2">{pronoun.future}</td>
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