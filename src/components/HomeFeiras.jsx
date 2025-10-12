import './css/HomeFeiras.css'
import './css/Home.css'
import { api } from '../lib/api.js'

import InfiniteCarousel from './CarrosselInfinito.jsx'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function HomeFeiras() {
    const navigate = useNavigate();
    const [feirasEmDestaque, setFeirasEmDestaque] = useState([]);

    useEffect(() => {
        async function fetchFeiras() {
            const response = await api.get('/buscar_feiras')
            setFeirasEmDestaque(response.data)
        }

        fetchFeiras()
    }, [])

    const handleClickDetalhamento = (idfeirante) => {
        navigate(`/landingpagefeira/${idfeirante}`)
    };

    return (
        <>
            <div id="container-homefeiras">
                <h2 className="titulo-sessao-home">Feiras em destaque</h2>
                <div className="conteudo-sessao-home">
                    <InfiniteCarousel>
                        {
                            feirasEmDestaque.map((feira, index) => (
                                <div className="destaque-home" key={index} onClick={() => handleClickDetalhamento(feira._id)}>
                                    <div className="img-destaque-home">
                                        <img src={feira.imagem} alt="Beira Mar"/>
                                    </div>
                                    <h4>{feira.descricao}</h4>
                                    <div className="destaque-informacoes-feira">
                                        <div className="informacoes-feira">
                                            <p>{feira.endereco}</p>
                                        </div>
                                        <div className="funcionamento-feira">
                                            {feira.funcionando ? <p id="feira-aberta">● Funcionando</p> : <p id="feira-fechada">● Fechada</p>}
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </InfiniteCarousel>
                </div>
            </div>
        </>
    )
}