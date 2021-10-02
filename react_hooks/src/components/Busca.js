import React, {useEffect, useState} from 'react'
import {InputText} from 'primereact/inputtext'

const Busca = () => {

    const [termoDeBusca, setTermoDeBusca] = useState('')





    return (
        <div>
            <span className='p-input-left'>
                <i className='pi pi-search'></i>
                <InputText
                    onChange={(e)=> setTermoDeBusca(e.target.value)}
                />

            </span>
        </div>
    )
}

export default Busca
