'use client'

import { useEffect, useState } from "react"
import { faCircleRight } from "@fortawesome/free-solid-svg-icons";
import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
type Props = {
  questionId:number[],
  actualQuestion:number,
  questionDone:{
    questionId:number,
    status:boolean
  }[],
  handleChangeQuestion:(index:number)=>void
}


export default function PaginationQuestion(props: Props){
  const quantiteByStage: number = 5;
  const [actualStage, setActualStage] = useState<number>(0);

  const calculatePaginationRange = () => {
    const start = actualStage * quantiteByStage;
    const end = Math.min(start + quantiteByStage, props.questionId.length);
    console.log('props.questionId',props.questionId);
    return props.questionId.slice(start, end); // Retorna os IDs da página atual
  };

  // Navega para a próxima página
  const handleNext = () => {
    if ((actualStage + 1) * quantiteByStage < props.questionId.length) {
      setActualStage(actualStage + 1);
    }
  };

  const handlePrev = () => {
    if (actualStage > 0) {
      setActualStage(actualStage - 1);
    }
  };

  const paginationRange = calculatePaginationRange();

  

  return (
    <div className={`flex items-center gap-2 w-1/4 mt-2`}>

      <button 
        className={`border py-1 px-2 rounded-full bg-cyan-600 disabled:opacity-50`}
        onClick={handlePrev}
        disabled={actualStage === 0}
      >
        <FontAwesomeIcon icon={faCircleLeft} style={{color:"white"}}/>
      </button>

      <div className={`grid gap-2 lg:grid-cols-5 w-full justify-items-center`}>
       {
        paginationRange.map((id) => {
          const verifyQuestionIsResponded = (questionId: number): boolean | undefined => {
            return props.questionDone.find((item) => item.questionId === questionId)?.status;
          };
          const questionIsResponded: boolean | undefined = verifyQuestionIsResponded(id);
          return (
            <div
              className={`border py-1 px-3 rounded-full text-center cursor-pointer transition-all
                ${
                  props.actualQuestion === id ?
                    'bg-cyan-400'
                  : questionIsResponded !== undefined ?
                      questionIsResponded === true ?
                      'bg-green-400'
                      : 'bg-red-400'
                    : 'bg-gray-200'
                }
              `}
              key={`question-index-${id}`}
              onClick={() => props.handleChangeQuestion(id)}
            >
            {id}
            </div>
          )
       })}
      </div>
      <button
        className={`border py-1 px-2 rounded-full bg-cyan-600 disabled:opacity-50`}
        onClick={handleNext}
        disabled={(actualStage + 1) * quantiteByStage >= props.questionId.length!}
      >
        <FontAwesomeIcon icon={faCircleRight} style={{color:"white"}}/>
      </button>
    </div>
  )
}