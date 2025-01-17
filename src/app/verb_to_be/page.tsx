'use client'
import Header from "../../../components/header/header.component";
import QuestionMainSection from "../../../components/question/questionMainSection";
import InfoVerbToBeComponent from "../../../components/theory/infoVerbToBe.component";

export default function PageVertToBe(){
  return (
    <>
      <Header/>
      <main className="p-6">

        <section>
          <h1 className="text-xl font-bold mb-4">Verb to be (Verbo ser/estar)</h1>

          <section>
            <InfoVerbToBeComponent/>
          </section>

          <section>
            <QuestionMainSection
              theme="to_be"
            />
          </section>


        </section>

      </main>
    </>
  )
}