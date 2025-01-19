import './App.css'
import Banner from './componentes/banner'
import Formulario from './componentes/formulario'
import { useState } from 'react'
import Time from './componentes/Time'
import Rodape from './componentes/footer'

function App() {

const times = [
  {
    nome :'Programação',
    corPrimaria :'#E0F7FA',
    corSegundaria :'#00796B'
  },
  {
    nome :'Front-End',
    corPrimaria :'#FFF8E1',
    corSegundaria :'#FF6F00'
  },
  {
    nome :'Data Science',
    corPrimaria :'#EDE7F6',
    corSegundaria :'#673AB7'
  },
  {
    nome :'Devops',
    corPrimaria :'#F1F8E9',
    corSegundaria :'#388E3C'
  },
  {
    nome :'UX e Design',
    corPrimaria :'#E3F2FD',
    corSegundaria :'#1976D2'
  },
  {
    nome :'Mobile',
    corPrimaria :'#FFF3E0',
    corSegundaria :'#F4511E'
  },
  {
    nome :'Inovação e Gestão' ,
    corPrimaria :'#F3E5F5',
    corSegundaria :'#8E24AA'
  },
]

  const[colaboradores, setColaboradores] = useState([])
  const aoNovoColaboradorAdicionado = (colaborador) => {
     console.log(colaborador)   
    setColaboradores([...colaboradores, colaborador])
  }
    
  return (
      <div className='App'>
        <Banner/>
        <Formulario times={times.map(time => time.nome)}  aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>

        {times.map(times => < Time
        key = {times.nome} 
        nome = {times.nome} 
        corPrimaria = {times.corPrimaria} 
        corSegundaria={times.corSegundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === times.nome)}
        /> )}

        <Rodape/>

      </div>
    
  )
}

export default App
