export default interface ChoiseQuestionInterface {
  id:number,
  phase:string,
  response:{
    id:number,
    alternative:string,
    status:boolean,
    explanation:string
  }[]
}