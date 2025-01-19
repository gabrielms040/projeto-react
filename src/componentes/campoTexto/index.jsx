import { useState } from "react"
import "./campoTexto.css"
const CampoTexto = (props) => {

const placeholderModificado = `${props.placeholder}...`

const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value)
}

const [valor, setValor] = useState('')

    return (
        <div className="campo-texto">
        <label> {props.label} </label>
        <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder} />
        </div>
    )
}
 
export default CampoTexto
