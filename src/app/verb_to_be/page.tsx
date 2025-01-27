'use client'
import { useState } from "react";
import Header from "../../../components/header/header.component";
import ChoiseQuestionMainSection from "../../../components/question/choiseQuestionMainSection";
import InfoVerbToBeComponent from "../../../components/theory/infoVerbToBe.component";
import TypeQuestion from "../../../components/question/typeQuestion";

export default function PageVerbToBe(){

  return (
    <>
      <Header/>
      <main className="p-6">

        <section>
          <h1 className="text-xl font-bold mb-4">Verb to be (Verbo ser/estar)</h1>

          <section>
            <InfoVerbToBeComponent/>
          </section>

          <section className="shadow-md rounded-md border px-8 py-2 border-gray-300 mb-4 bg-stone-100">
            <TypeQuestion handleChangeTypeQuestion={function (type: string): void {
              throw new Error("Function not implemented.");
            } }/>


            <ChoiseQuestionMainSection
              theme="to_be"
            />
          </section>


        </section>

      </main>
    </>
  )
}