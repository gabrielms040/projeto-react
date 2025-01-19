import Colaborador from '../Colaborador'
import './Time.css'

const time = (props) => {
    return(
    props.colaboradores.length> 0 && <section className='time' style={{backgroundColor : props.corPrimaria}}>
        <h3 style={{borderColor : props.corSegundaria}}> {props.nome} </h3>
        <div className='colaboradores'>
        {props.colaboradores.map (colaborador => <Colaborador key={colaborador.nome} corDeFundo={props.corSegundaria} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem } />)}
        </div>

    </section>
    )
}

export default time