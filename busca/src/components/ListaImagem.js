import React from 'react'
import Imagem from './Imagem'

const ListaImagem = ({ pics, imgStyle }) => {
    return (
        pics.map((pic, ind) => (
            <Imagem 
                imgStyle={imgStyle}
                pic={pic.src.small}
                key={ind}
            />
        ))
    )
}

export default ListaImagem
