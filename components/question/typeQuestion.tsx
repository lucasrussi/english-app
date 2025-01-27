'use client'

type Props = {
  handleChangeTypeQuestion:(type:string)=>void
}


export default function TypeQuestion(props:Props){

  const typeQuestion = [
    {label:'Multipla Escolha',type:'choise_question',status:true},
    {label:'Complete a Frase',type:'complete_phase',status:false},
    {label:'Escute e Responda',type:'choise_answer',status:false}
  ]





  return (
    <section className="flex flex-col gap-2 mb-2 bg-white p-2 rounded-md border">
      <h4>Escolha o tipo de questão</h4>
      <div className="flex flex-row justify-between">
        {
          typeQuestion.map((item)=>(
            <button className="w-96 border bg-gray-100 border-gray-300 disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-gray-200 rounded-md" disabled={!item.status} key={`typeQuestion-${item.type}`}>
              {item.label}
            </button>
          ))
        }
      </div>



    </section>
  )
}