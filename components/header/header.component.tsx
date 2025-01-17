'use client'

import DropDownHeader from "./dropDownHeader";
import { useRouter } from 'next/navigation';


export default function Header(){
  const router = useRouter();

  const handleNavigate = (path: string) => {
    router.push(path);
  };

 
  const menu1 = {
    menuTitle: 'Basic',
    elements: [
      { name: 'Personal Pronouns', action: () => handleNavigate('/personal_pronouns') },
      { name: 'Verb To Be', action: () => handleNavigate('/verb_to_be') },
      { name: 'Simple Present', action: () => handleNavigate('/simple_present') },
      { name: 'A And An', action: () => handleNavigate('/a_and_an') },
      // { name: 'Word Order', action: () => handleNavigate('/word_order') },
      { name: 'Negative Sentence', action: () => handleNavigate('/negative_sentence') },
      { name: 'Question Sentence', action: () => handleNavigate('/question_sentence') },
    ],
  };

  const menu2 = {
    menuTitle: 'Intermediate',
    elements: [
      { name: 'If Clause', action: () => handleNavigate('/intermediate/if_clause') },
      { name: 'Passive Voice', action: () => handleNavigate('/intermediate/passive_voice') },
      { name: 'Field And Time', action: () => handleNavigate('/intermediate/field_and_time') },
      { name: 'Relative Pronouns', action: () => handleNavigate('/intermediate/relative_pronouns') },
      { name: 'Superlative & Comparative', action: () => handleNavigate('/intermediate/superlative_comparative') },
      { name: 'Verbal Time', action: () => handleNavigate('/intermediate/verbal_time') },
      { name: 'Modals', action: () => handleNavigate('/intermediate/modals') },
    ],
  };





  return (
    <header className="bg-gray-100 border-b border-gray-300 shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-2 px-6">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">Learning English Club</div>

        {/* Navigation with Dropdowns */}
        <nav className="flex space-x-4">
          <DropDownHeader menuTitle={menu1.menuTitle} elements={menu1.elements} />
          <DropDownHeader menuTitle={menu2.menuTitle} elements={menu2.elements} />
        </nav>

        {/* User Actions */}
        <div className="flex items-center space-x-4">
         
        </div>
      </div>
    </header>
  )

}