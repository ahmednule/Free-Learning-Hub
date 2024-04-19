import React from 'react'
import { LANGUAGE_VERSIONS } from '../assets/objects/constants'
import { useState } from 'react';


const CodeEditorLang = ({language, onSelectLanguage}) => {
  const languages = Object.entries(LANGUAGE_VERSIONS);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };



  return (
    <div>
      <p className='mb-2 text-xl'>Language:</p>
      <div class="relative inline-block text-left">
        <div>
          <button type="button" onClick={toggleDropdown} className="inline-flex w-full mb-4 justify-center uppercase gap-x-1.5 rounded-md bg-gray-100 dark:bg-gray-900 px-3 py-2 text-sm font-semibold text-gray-950 dark:text-gray-50 shadow-sm ring-1 ring-inset ring-yellow-200 dark:ring-blue-200 dark:hover:bg-blue-600 hover:bg-yellow-500">
            {language}
            <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
        {dropdownOpen && (
          <div className="absolute -right-[230px] z-[5] mt-2 w-56 -top-[6px] origin-top-right rounded-md bg-gray-100 dark:bg-gray-900 shadow-lg ring-1 ring-gray-950 dark:ring-gray-50 ring-opacity-5 focus:outline-none">
            <div className="py-1" role="none">
              {languages.map(([language, version], index) => (
                <button key={index} onClick={() => {onSelectLanguage(language); toggleDropdown()}} className="text-gray-950 dark:text-gray-50 uppercase block px-4 py-2 hover:border border-yellow-200 dark:hover:border-blue-200 w-full rounded-xl text-left text-sm">{language}<span className='text-yellow-500 dark:text-blue-600 ml-4'>&nbsp;&nbsp;&nbsp;{version}</span></button>
              ))}
            </div>
          </div>
        )}
      </div>

    </div>
  )
}

export default CodeEditorLang