import { useState } from 'react'
import './App.css'
import { Button } from './botao'
import { Mensagem } from './mensagem'

const mensagensBrutas = [
  {
    enviada: false,
    recebida: true,
    visualizada: true,
    mensagem: 'oi...',
  },
  {
    enviada: false,
    recebida: true,
    visualizada: true,
    mensagem: 'Tu não me ama mais?',
  },
  {
    enviada: true,
    recebida: false,
    visualizada: false,
    mensagem: 'Oi, boa tarde.',
  },
  {
    enviada: true,
    recebida: false,
    visualizada: false,
    mensagem: 'Quem é você mesmo?',
  },


]



function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
     <body>
  <div class="chat">
    <div class="header">
      <Button></Button>

      <h3>Meu Chat</h3>
    </div>
    <div class="content">
      <ul>
      {mensagensBrutas.map(mensagem => (<Mensagem {...mensagem}/>))}
      

      </ul>
    </div>
  </div>
</body>
    </>
  )
}

export default App
