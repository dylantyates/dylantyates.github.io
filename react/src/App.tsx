import { useContext, ReactNode } from 'react';
import Button from './components/Button.tsx'
import './App.css'
import GLOBAL from './global.tsx'
import { ThemeContext } from './context/Theme.tsx';

interface Props {
  children: ReactNode
}

function ThemeDrawer({children}: Props) {
  
  const {updateTheme} = useContext(ThemeContext);

  return (
  <div className="drawer lg:drawer-open">
    <button id="my-drawer-2" className="drawer-toggle btn btn-primary"></button>
    <div className="drawer-content flex flex-col items-center justify-center">
      {/* Page content here */}
      {children}
    </div>
    <div className="drawer-side">
      <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
      <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
        {/* Sidebar content here */}
        <li data-theme="light">
          <span
            onClick={() => updateTheme(`${GLOBAL.THEMES.LIGHT}`)}
            >
            {GLOBAL.THEMES.LIGHT}
          </span>
          <Colors />
        </li>
        <li data-theme="dark">
          <span
            onClick={() => updateTheme(`${GLOBAL.THEMES.DARK}`)}
            >
            {GLOBAL.THEMES.DARK}
          </span>
          <Colors />
        </li>
        <li data-theme="forest">
          <span
            onClick={() => updateTheme(`${GLOBAL.THEMES.FOREST}`)}
            >
            {GLOBAL.THEMES.FOREST}
          </span>
          <Colors />
        </li>
      </ul>
    </div>
  </div>
  )
}

function Colors() {
  return (
    <> 
      <span className="w-1 h-1 border-2"></span>
      <span className="w-1 bg-neutral border-2"></span>
      <span className="w-1 bg-primary border-2"></span>
      <span className="w-1 bg-secondary border-2"></span>
      <span className="w-1 bg-accent border-2"></span>
      <span className="w-1 bg-ghost border-2"></span>
    </>
  )
}

function App() {

  const {theme} = useContext(ThemeContext);

  return (
    <div data-theme={theme} className="h-screen w-screen">
      <ThemeDrawer>
        <main className="flex flex-col justify-center p-8">
          <h2 className="text-6xl text">The Poops</h2>
          <div className="h-full">
            <Button />
          </div>
        </main>
      </ThemeDrawer>
    </div>
  )
}

export default App
