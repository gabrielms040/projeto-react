import "./formulario.css"
import CampoTexto from "../campoTexto"
import ListaSuspensa from "../listaSuspensa"
import Botao from "../botao" 
import { useState } from "react"

const Formulario = (props) => {
    
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    
    const aoSalvar = (event) => {
        event.preventDefault()
        console.log('Formulario recebido : ', nome, cargo, imagem, time)
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setTime('')
}
return (
        <section className="Formulario">
            <form onSubmit={aoSalvar}>

        <h2>Preencha os dados para criar o card </h2>
        <CampoTexto 
        obrigatorio = {true}
        label = "Nome" 
        placeholder = "Digite seu nome"
        valor={nome}
        aoAlterado = {valor => setNome(valor)}
        />

        <CampoTexto 
        obrigatorio = {true} 
        label = "Cargo" 
        placeholder = "Digite seu cargo"
        valor= {cargo}
        aoAlterado = {valor => setCargo(valor)}
        />
        <CampoTexto 
        label = "Imagem" 
        placeholder = "Digite o link do github + .png" 
        valor= {imagem}
        aoAlterado = {valor => setImagem(valor)}
        />

        <ListaSuspensa 
        obrigatorio = {true} 
        label = "Times" 
        itens= {props.times} 
        valor= {time}
        aoAlterado = {valor => setTime(valor)}
        />

        <Botao texto="Criar Card"/>

            </form>
        </section>
    )
}

export default Formulario