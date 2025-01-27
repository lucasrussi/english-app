'use client'
import { useState } from "react";
import Header from "../../../components/header/header.component";
import ChoiseQuestionMainSection from "../../../components/question/choiseQuestionMainSection";
import TypeQuestion from "../../../components/question/typeQuestion";
import InfoNegativeSentenceComponent from "../../../components/theory/infoNegativeSentence.component";

export default function PageNegativeSentence(){

  return (
    <>
      <Header/>
      <main className="p-6">

        <section>
          <h1 className="text-xl font-bold mb-4">Negative Sentence (Sentença Negativa)</h1>

          <section>
            <InfoNegativeSentenceComponent/>
          </section>

          <section className="shadow-md rounded-md border px-8 py-2 border-gray-300 mb-4 bg-stone-100">
            <TypeQuestion handleChangeTypeQuestion={function (type: string): void {
              throw new Error("Function not implemented.");
            } }/>


            <ChoiseQuestionMainSection
              theme="negative_sentence"
            />
          </section>


        </section>

      </main>
    </>
  )
}