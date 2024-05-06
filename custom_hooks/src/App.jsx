import './App.css'
import ProductList from './component/ProductList'

import { useLogin } from './hooks/useLogin'

function App() {
  
 const { isLogin, handleLogIn, handleLogOut } = useLogin();

  return (
    <>
      <button className='btn-log' onClick={ isLogin ? handleLogOut : handleLogIn}>{isLogin ? 'Log Out' : 'Log In'}</button>
      <ProductList />
    </>
  )
}

export default App
