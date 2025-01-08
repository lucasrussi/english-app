'use client'

import { useEffect } from "react"

type Props = {
  length:number,
  actualQuestion:number,
  questionDone:{
    questionId:number,
    status:boolean
  }[],
  handleChangeQuestion:(item:number)=>{item:number}
}


export default function PaginationQuestion(props: Props){



  useEffect(()=>{


  },[props.actualQuestion])

  

  return (
    <div className={`flex`}>

      <div className={`border py-1 px-3 rounded-full bg-cyan-600`}>Prev</div>

      <div className={`grid gap-5 lg:grid-cols-5 w-full justify-items-center`}>
        {
          Array.from({length:props.length},(item:number,index:number)=>{

            const verifyQuestionIsResponded = (questionId:number):boolean|undefined => {
              return props.questionDone.find((item)=>item.questionId === questionId)?.status
            }

            const questionIsResponded:boolean|undefined = verifyQuestionIsResponded(item)

            return (
              <div
                className={`border py-1 px-3 rounded-full ${
                  questionIsResponded !== undefined 
                  ? props.actualQuestion !== item 
                    ? questionIsResponded === true
                      ? 'bg-green-400'
                      : 'bg-red-400'
                    : 'bg-cyan-400'
                  : ''
                } hover:cursor-pointer`}
                key={`question-index-${index}`}
                onClick={()=>props.handleChangeQuestion(item)}
              >
                {item}
              </div>
            )
          })
        }
      </div>
      <div className={`border py-1 px-3 rounded-full bg-cyan-600`}>Next</div>
    </div>
  )
}