import React, { Component } from 'react'
import Busca from './Busca'
import { createClient } from 'pexels'
import env from 'react-dotenv'
import ListaImagem from './ListaImagem'
import PexelsLogo from './PexelsLogo'
import PexelsClient from '../utils/PexelsClient'

class App extends Component{

    state = {pics: []}

    //pexelsCliente = null

    componentDidMount(){
        this.pexelsCliente = createClient(env.PEXELS_KEY)
    }
    
    // onBuscaRealizada = (termo) => {
    //     this.pexelsCliente.photos.search({
    //         query: termo
    //     })
    //     .then(pics => this.setState({pics: pics.photos}))
    // }


    //https://
    onBuscaRealizada = (termo) => {
        PexelsClient.get('/search', {
            params: { query: termo }
        })
        .then (result => {
            //console.log(result)
            this.setState({pics: result.data.photos})
        })
    }

    render(){
        return (
            <div className="grid justify-content-center m-auto w-9 border-round border-1 border-400">
                <div className='col-12'>
                    <PexelsLogo/>
                </div>
                <div className='col-12'>
                    <h1>Exibir uma lista de...</h1>
                </div>
                <div className="col-12">
                    <Busca onBuscaRealizada={this.onBuscaRealizada}/>
                </div>
                <div className='col-12'>
                    <div className='grid'>
                        <ListaImagem imgStyle={'col-12 md:col-6 lg:col-4 xl:col-3'} pics={this.state.pics}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App