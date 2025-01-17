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
    object: string;
    possessiveAdjective: string;
    possessivePronoun: string;
    reflexive: string;
  }[];
};

// Combinando os tipos
type Section = TextSection | TableSection;

export default function InfoPersonalPronounsComponent() {
  const dataInfo: TextSection[] = [
    {
      title: "O que são pronomes pessoais?",
      description:
        "Pronomes pessoais são palavras usadas para substituir nomes de pessoas, animais ou coisas. Eles ajudam a evitar repetições e tornam as frases mais simples e fáceis de entender.",
      exemples: [
        {
          title: "Repetitivo:",
          text: '"Maria gosta da Maria porque Maria é legal"',
        },
        {
          title: "Usando Pronomes:",
          text: '"Maria gosta dela porque ela é legal."',
        },
      ],
    },
    {
      title: "Por que usar pronomes pessoais?",
      description:
        "Imagine se, toda vez que você fosse falar de alguém ou de algo, tivesse que repetir o nome dessa pessoa ou coisa. Isso deixaria as frases cansativas e repetitivas. Os pronomes nos ajudam a falar de forma mais natural.",
      exemples: [
        {
          title: "Repetitivo:",
          text: '"Pedro tem um cachorro chamado Rex. Pedro gosta de Rex porque Rex é divertido."',
        },
        {
          title: "Usando Pronomes:",
          text: '"Ele tem um cachorro chamado Rex. Ele gosta dele porque ele é divertido."',
        },
      ],
    },
  ];

  const personalPronouns: TableSection = {
    title: "Tabela de Pronomes Pessoais",
    table: [
      { subject: "I", object: "me", possessiveAdjective: "my", possessivePronoun: "mine", reflexive: "myself" },
      { subject: "You", object: "you", possessiveAdjective: "your", possessivePronoun: "yours", reflexive: "yourself" },
      { subject: "He", object: "him", possessiveAdjective: "his", possessivePronoun: "his", reflexive: "himself" },
      { subject: "She", object: "her", possessiveAdjective: "her", possessivePronoun: "hers", reflexive: "herself" },
      { subject: "It", object: "it", possessiveAdjective: "its", possessivePronoun: "-", reflexive: "itself" },
      { subject: "We", object: "us", possessiveAdjective: "our", possessivePronoun: "ours", reflexive: "ourselves" },
      { subject: "You (plural)", object: "you", possessiveAdjective: "your", possessivePronoun: "yours", reflexive: "yourselves" },
      { subject: "They", object: "them", possessiveAdjective: "their", possessivePronoun: "theirs", reflexive: "themselves" },
    ],
  };

  // Combinando todas as seções
  const sections: Section[] = [...dataInfo, personalPronouns];

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
                <th className="border border-gray-300 px-4 py-2 text-left">Subject Pronoun</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Object Pronoun</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Possessive Adjective</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Possessive Pronoun</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Reflexive Pronoun</th>
              </tr>
            </thead>
            <tbody>
              {sections[currentIndex].table.map((pronoun, index) => (
                <tr key={index} className="even:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">{pronoun.subject}</td>
                  <td className="border border-gray-300 px-4 py-2">{pronoun.object}</td>
                  <td className="border border-gray-300 px-4 py-2">{pronoun.possessiveAdjective}</td>
                  <td className="border border-gray-300 px-4 py-2">{pronoun.possessivePronoun}</td>
                  <td className="border border-gray-300 px-4 py-2">{pronoun.reflexive}</td>
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
