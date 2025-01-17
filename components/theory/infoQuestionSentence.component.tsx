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

export default function InfoQuestionSentenceComponent(){

  const dataInfo: TextSection[] = [
    {
      title: "O que é uma frase interrogativa?",
      description:
        "Uma frase interrogativa é aquela em que fazemos uma pergunta. Em inglês, as frases interrogativas geralmente começam com um verbo auxiliar (como 'do', 'does', ou 'did') ou com uma palavra interrogativa (como 'what', 'where', 'how', etc.).",
      exemples: [
        {
          title: "Exemplo 1 (Usando 'do'):",
          text: '"Do you like pizza?" (Você gosta de pizza?)',
        },
        {
          title: "Exemplo 2 (Usando 'does'):",
          text: '"Does she play soccer?" (Ela joga futebol?)',
        },
      ],
    },
    {
      title: "Como usar frases interrogativas?",
      description:
        "As frases interrogativas em inglês são formadas com o verbo auxiliar 'do' (no presente), 'does' (para he/she/it), ou 'did' (para o passado) seguido do sujeito e do verbo principal. Em perguntas com palavras interrogativas, a estrutura é: palavra interrogativa + verbo auxiliar + sujeito + verbo principal.",
      exemples: [
        {
          title: "Usando 'do':",
          text: '"Do they study?" (Eles estudam?)',
        },
        {
          title: "Usando 'does':",
          text: '"Does he speak French?" (Ele fala francês?)',
        },
      ],
    },
  ];
  
  const articleTable: TableSection = {
    title: "Tabela de Frases Interrogativas",
    table: [
      { subject: "Do", rule: "Usado para formar perguntas no presente", example: '"Do you know?"' },
      { subject: "Does", rule: "Usado para formar perguntas no presente para he/she/it", example: '"Does she understand?"' },
      { subject: "Did", rule: "Usado para formar perguntas no passado", example: '"Did they arrive?"' },
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