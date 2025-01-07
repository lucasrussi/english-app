import { useEffect, useState } from "react";
import ChoiseQuestionInterface from "../../interface/choiseQuestionInterface";


type Props = {
  question:ChoiseQuestionInterface,
  key:string,
  answeredQuestion:{
    questionId:number,
    status:boolean
  } | null,
  handleResponseAnswer:(status:boolean,questionId:number) => {status:boolean,questionId:number}
}


export default function ChoiseQuestionCard(props:Props){

  const [questionAnswered,setQuestionAnswered] = useState<number|null>(null)
  const [statusQuestionAnswered, setStatusQuestionAnswered] = useState<boolean|null>(null)
  const [explanation, setExplanation] = useState<string>('')

  const handleResponse = (status:boolean,questionId:number) =>{
   props.handleResponseAnswer(status,questionId);
  }

  const getButtonStatus = (questionId:number):string =>{
    if(questionAnswered != null){
      if(questionAnswered === questionId){
        return statusQuestionAnswered ? 'answered-correct' : 'answered-incorrect'
      }else{
        return ''
      }
    }else{
      return ''
    }
  }



  useEffect(()=>{
    if(props.answeredQuestion != null){
      setQuestionAnswered(props.answeredQuestion.questionId)
      setStatusQuestionAnswered(props.answeredQuestion.status)
      props.answeredQuestion.status ? setExplanation(props.question.response[props.answeredQuestion.questionId].explanation) : setExplanation('')
    }
  },[props.answeredQuestion])



  return (
    <div 
      className="p-4 bg-white border rounded-md shadow-md  min-w-full"
      key={props.key}
    >
      <p className="text-lg font-semibold text-gray-700 mb-4">{props.question.phase}</p>
      <div className="space-y-3">
        {
          props.question.response.map((item)=>{
           
            return (
              <button
                key={`response-${props.key}-${item.id}`}
                className={`w-full px-4 py-2 text-left text-sm font-medium rounded-md border
                 
                `}
                onClick={()=>handleResponse(item.status,props.question.id)}
              >
                {item.alternative}
              </button>
            )
          })
        }
      </div>
      
    </div>
  )
}