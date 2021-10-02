import React, {useState} from 'react'
import {Card} from 'primereact/card'

import './Accordion.css'
const Accordion = (props) => {

    
    const [indiceAtivo, setIndiceAtivo] = useState(null)

    const itemClicado = (indice) => (
        setIndiceAtivo(indice)
    )

    const expressaoJSX = props.itens.map((item, ind) => {
        const classeExibirConteudo = ind === indiceAtivo? '' : 'hidden'
        const classeExibirIcone = ind === indiceAtivo? 'pi-angle-down' : 'pi-angle-right'
        return (
            <Card id='accordion' key={ind} className='border-1 border-400'>
                <div
                    onClick={() => itemClicado(ind)}>
                    <i className={`pi ${classeExibirIcone}`}/>
                    <h5 className='inline'>{item.titulo}</h5>
                    <p className={`${classeExibirConteudo}`}>{item.conteudo}</p>
                </div>
            </Card>
        )
    })

    return (
        <div>
            {/* <p>{indiceAtivo}</p> */}
            {
                expressaoJSX
            }
        </div>
    )
}

export default Accordion
