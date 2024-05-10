import { useState, createContext } from 'react'
import DashBoard from './component/DashBoard'

export const logInContext = createContext();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  }

  const handleLogOut = () => {
    setIsLoggedIn(false);
  }

  return (
    <logInContext.Provider value={{isLoggedIn, onLogin: handleLogin, onLogout:handleLogOut}}>
      
      <div>
         <h1>User Authetications</h1>
         <DashBoard/>
      </div>
      
    </logInContext.Provider>
  )
}

export default App
