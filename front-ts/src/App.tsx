import { useState } from 'react'
import { loginApi } from './service/api'
import './App.css'

function App() {

  const [client, setClient] = useState('')
  const [password, setPassword] = useState('')

  const handleSignIn = (client: string, password: string) => {

    return loginApi(client, password);
  }
  return (
    <>

      <h1>ET</h1>

      <div>
        <input type="text" placeholder='Cliente' value={client} onChange={(e) => setClient(e.target.value)} /> <br /> <br />
        <input type="password" placeholder='Contraseña' value={password} onChange={(e) => setPassword(e.target.value)} /> <br /> <br />
        <button onClick={() => handleSignIn(client, password)}>Iniciar Sesión</button>
      </div>

    </>
  )
}

export default App
