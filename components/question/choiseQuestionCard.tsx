'use client'

import { useEffect, useState } from "react";
import ChoiseQuestionInterface from "../../interface/choiseQuestionInterface";


type Props = {
  question:ChoiseQuestionInterface,
  questionKey:string,
  answeredQuestion:{
    status:boolean,
    responseId:number,
    questionId:number
  } | null,
  handleResponseAnswer:(status:boolean,responseId:number,questionId:number) => void
}


export default function ChoiseQuestionCard(props:Props){

  const [questionAnswered,setQuestionAnswered] = useState<number|null>(null)
  const [statusQuestionAnswered, setStatusQuestionAnswered] = useState<boolean|null>(null)
  const [explanation, setExplanation] = useState<string>('')

  const handleResponse = (status:boolean,responseId:number,questionId:number) =>{
   props.handleResponseAnswer(status,responseId,questionId);
  }

  const getButtonStatus = (questionId:number):string =>{

    console.log('questionAnswered',questionAnswered)
    console.log('questionId',questionId)


    if(questionAnswered != null){
      if(questionAnswered === questionId && props.question.id === props.answeredQuestion?.questionId){
        return statusQuestionAnswered ? 'answered-correct' : 'answered-incorrect'
      }else{
        return ''
      }
    }else{
      return ''
    }
  }



  useEffect(()=>{


    if(props.answeredQuestion != null && props.answeredQuestion.questionId === props.question.id){
      setQuestionAnswered(props.answeredQuestion.responseId)
      setStatusQuestionAnswered(props.answeredQuestion.status)

      if(!props.answeredQuestion.status){
        setExplanation(props.question.response.find((item)=>item.id === props.answeredQuestion!.responseId)!.explanation)
      }
    }
  },[props.answeredQuestion])



  return (
    <div 
      className="p-4 bg-white border rounded-md shadow-md  w-1/3"
      key={props.questionKey}
    >
      <div className="flex justify-end">
        <div className="rounded-full text-gray-700 bg-cyan-400 py-1 px-3"> {props.question.id} </div>
      </div>
      <p className="text-lg font-semibold text-gray-700 mb-4">{props.question.phase}</p>
      <div className="space-y-3">
        {
          props.question.response.map((item)=>{
           
            const buttonStatus = getButtonStatus(item.id);

            return (
              <button
                key={`response-${props.questionKey}-${item.id}`}
                className={`w-full px-4 py-2 text-left text-sm font-medium rounded-md border
                 ${
                    buttonStatus === 'answered-correct' 
                    ? 'bg-green-100 border-green-300 text-green-700'
                    : buttonStatus === 'answered-incorrect' 
                    ? 'bg-red-100 border-red-300 text-red-700'
                    : 'bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200'
                 }
                `}
                onClick={()=>handleResponse(item.status,item.id,props.question.id)}
              >
                {item.alternative}
              </button>
            )
          })
        }
      </div>
      {explanation !== '' ?
        <div className="text-sm font-medium p-1 shadow-md mt-1 rounded-md border-2">{explanation}</div>
        :null
      }
    </div>
  )
}