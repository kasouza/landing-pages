import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro'

import { useState } from "react"
import { Outlet } from 'react-router-dom'

export default function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen text-very-dark-blue-light-mode-text dark:text-white-dark-mode-text-and-light-mode-elements bg-very-light-gray-light-mode-background dark:bg-very-dark-blue-dark-mode-background">
        <header className="flex justify-center dark:bg-dark-blue-dark-mode-elements shadow-md" >
          <div className="flex justify-between py-4 w-11/12">
            <h1 className="font-extrabold">Where in the world?</h1>
            <button
              className="flex gap-0.5 items-center font-semibold text-xs"
              onClick={() => setDarkMode(!darkMode)}>
                <FontAwesomeIcon icon={darkMode ? solid('moon') : regular('moon')} />
                <span>Dark Mode</span>
            </button>
          </div>
        </header>

        <Outlet />
      </div>
    </div>
  )
}