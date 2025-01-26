'use client'

import { useEffect, useState } from "react";
import { faCircleRight, faCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  questionId: number[], // Lista de IDs de perguntas
  actualQuestion: number, // ID da pergunta atual
  questionDone: {
    questionId: number,
    status: boolean
  }[], // Lista de perguntas respondidas com status
  handleChangeQuestion: (index: number) => void // Função para mudar a pergunta
}

export default function PaginationQuestion(props: Props) {
  const quantiteByStage: number = 5; // Número de perguntas por estágio
  const [actualStage, setActualStage] = useState<number>(0); // Estágio atual

  const calculatePaginationRange = () => {
    const start = actualStage * quantiteByStage;
    const end = Math.min(start + quantiteByStage, props.questionId.length);
    return props.questionId.slice(start, end);
  };

  // Define o estágio inicial baseado na pergunta atual
  useEffect(() => {
    if (props.questionId.length > 0) {
      const questionIndex = props.questionId.indexOf(props.actualQuestion); // Índice da pergunta atual
      if (questionIndex !== -1) {
        const initialStage = Math.floor(questionIndex / quantiteByStage); // Calcula o estágio correto
        setActualStage(initialStage); // Define o estágio inicial
      } else {
        setActualStage(0); // Caso a pergunta atual não seja encontrada, define o estágio inicial como 0
      }
    }
  }, [props.actualQuestion, props.questionId, quantiteByStage]);

  // Navega para a próxima página
  const handleNext = () => {
    if ((actualStage + 1) * quantiteByStage < props.questionId.length) {
      setActualStage(actualStage + 1);
    }
  };

  // Navega para a página anterior
  const handlePrev = () => {
    if (actualStage > 0) {
      setActualStage(actualStage - 1);
    }
  };

  const paginationRange = calculatePaginationRange();

  return (
    <div className="flex items-center gap-2 w-1/4 mt-2">
      <button
        className="border py-1 px-2 rounded-full bg-cyan-600 disabled:opacity-50"
        onClick={handlePrev}
        disabled={actualStage === 0}
      >
        <FontAwesomeIcon icon={faCircleLeft} style={{ color: "white" }} />
      </button>

      <div className="grid gap-2 lg:grid-cols-5 w-full justify-items-center">
        {paginationRange.map((id) => {
          const verifyQuestionIsResponded = (questionId: number): boolean | undefined => {
            return props.questionDone.find((item) => item.questionId === questionId)?.status;
          };
          const questionIsResponded: boolean | undefined = verifyQuestionIsResponded(id);
          return (
            <div
              className={`border py-1 px-3 rounded-full text-center cursor-pointer transition-all
                ${
                  props.actualQuestion === id
                    ? 'bg-cyan-400'
                    : questionIsResponded !== undefined
                    ? questionIsResponded === true
                      ? 'bg-green-400'
                      : 'bg-red-400'
                    : 'bg-gray-200'
                }
              `}
              key={`question-index-${id}`}
              onClick={() => props.handleChangeQuestion(id)}
            >
              {id}
            </div>
          );
        })}
      </div>

      <button
        className="border py-1 px-2 rounded-full bg-cyan-600 disabled:opacity-50"
        onClick={handleNext}
        disabled={(actualStage + 1) * quantiteByStage >= props.questionId.length}
      >
        <FontAwesomeIcon icon={faCircleRight} style={{ color: "white" }} />
      </button>
    </div>
  );
}
