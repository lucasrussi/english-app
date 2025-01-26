'use client'
import { useEffect, useState } from "react"
import ChoiseQuestionCard from "./choiseQuestionCard"
import ChoiseQuestionInterface from "../../interface/choiseQuestionInterface"
import { CompletePersonalPronauns } from "../../database/basic/complete-personal-pronouns.const"
import { CompletePhaseToBe } from "../../database/basic/complete-phase-to-be.const"
import { CompleteSimplePresent } from "../../database/basic/complete-simple-present.const"
import { CompleteWithAOrAn } from "../../database/basic/complete-with-a-or-an.const"
import { OrderWordPersonalPronouns } from "../../database/basic/order-word-personal-pronouns.const"
import { TransformToNegative } from "../../database/basic/transform-to-negative.const"
import { TransformToQuestionFormation } from "../../database/basic/transform-to-question-formation.const"
import Storage from "../../classe/storage.class"
import PaginationQuestion from "./paginationQuestion"

type Props = {
  theme:'simple_present' |
    'question_sentence' |
    'personal_pronouns' |
    'negative_sentence' |
    'a_and_an' |
    'to_be' |
    'complete_if_clause' |
    'complete_passive_voice' |
    'complete_prepo_field_time' |
    'complete_relative_pronouns' |
    'complete_superlative_comparative' |
    'complete_verbal_time' |
    'complete_with_modal' |
    'order_word_personal'
}

interface storagedInterface {
  questionId:number,
  responseId:number,
  status:boolean
}

export default function QuestionMainSection(props:Props){

  const [dataQuestion,setDataQuestion] = useState<ChoiseQuestionInterface[]>([])
  const [currentIdQuestion, setCurrentIdQuestion] = useState<number>(0)
  const [currentQuestion,setCurrentQuestion] = useState<ChoiseQuestionInterface>()
  const [questionAnswered,setQuestionAnswered] = useState<storagedInterface[]>([])
  const [answeredQuestion,setAnsweredQuestion] = useState<storagedInterface|null>(null)
  const [allQuestionId, setAllQuestionId] = useState<number[]>([])
  const storage = new Storage()
  storage.setKeyResponseStorage(props.theme)

  useEffect(()=>{
    const dataByTheme = [
      {theme:'personal_pronouns',data:CompletePersonalPronauns},
      {theme:'to_be',data:CompletePhaseToBe},
      {theme:'simple_present',data:CompleteSimplePresent},
      {theme:'a_and_an',data:CompleteWithAOrAn},
      {theme:'order_word_personal',data:OrderWordPersonalPronouns},
      {theme:'negative_sentence',data:TransformToNegative},
      {theme:'question_sentence',data:TransformToQuestionFormation}
    ];

    setDataQuestion(dataByTheme.find((item)=> item.theme === props.theme)!.data);
    
    
    setQuestionAnswered(storage.getResponseStorage())

    
   
  },[props.theme])

  useEffect(()=>{
    setAllQuestionId(dataQuestion.map((item) => item.id))
  },[dataQuestion])

  useEffect(()=>{
    setCurrentIdQuestion(questionAnswered.reduce((max,current)=>{
      return current.questionId > max ? current.questionId : max
    },1)
  )
  },[questionAnswered])

  useEffect(()=>{
    setCurrentQuestion(dataQuestion.find((item)=>item.id === currentIdQuestion))
  },[currentIdQuestion])

  const handleResponseAnswer = (status:boolean,responseId:number,questionId:number) => {
    setAnsweredQuestion({status,responseId,questionId})
    storage.setReponseStorage({status,responseId,questionId})
    setQuestionAnswered(storage.getResponseStorage())

    if(status){


      if(currentIdQuestion < dataQuestion.length){ 
        setTimeout(()=>{
          setCurrentIdQuestion(currentIdQuestion+1);
        },1000)
      }
    }
  }

  const handleChangeQuestion = (index:number) =>{
    storage.setKeyResponseStorage(props.theme)
    const storageAnswered = storage.getQuestionRespondedById(index)

    if(storageAnswered){
      setAnsweredQuestion(storageAnswered)
    }



    setCurrentIdQuestion(index)
  }




  return (
    <section className="w-full flex flex-col items-center">
      { currentQuestion != undefined ?
        
        <ChoiseQuestionCard
          question={currentQuestion}
          questionKey={`${props.theme}_${currentIdQuestion}`}
          handleResponseAnswer={handleResponseAnswer} 
          answeredQuestion={answeredQuestion}      
        />
          
        
        : <p>Loading Question...</p>
      }
      
      {
        allQuestionId.length > 0 ?
          <PaginationQuestion 
            questionId={allQuestionId} 
            actualQuestion={currentIdQuestion} 
            questionDone={questionAnswered} 
            handleChangeQuestion={handleChangeQuestion}
          />
          : <p>Loading Question...</p>

      }
      
    </section>
  )
}