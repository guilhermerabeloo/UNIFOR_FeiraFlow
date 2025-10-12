import './css/HomeFeirantes.css'
import './css/Home.css'
import { api } from '../lib/api.js'

import InfiniteCarousel from './CarrosselInfinito.jsx'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function HomeFeirantes() {
    const navigate = useNavigate();
    const [feirantesEmDestaque, setFeirantesEmDestaque] = useState([]);

    useEffect(() => {
        async function fetchFeirantes() {
            const response = await api.get('/buscar_feirantes')
            setFeirantesEmDestaque(response.data)
        }

        fetchFeirantes()
    }, [])

    const handleClickDetalhamento = (idfeirante) => {
        navigate(`/landingpagefeirante/${idfeirante}`)
    };

    return (
        <>
            <div id="container-homefeirantes">
                <h2 className="titulo-sessao-home">Feirantes em destaque</h2>
                <div className="conteudo-sessao-home">
                    <InfiniteCarousel>
                        {
                            feirantesEmDestaque.map((feirante, index) => (
                                <div className="destaque-home" key={index} onClick={() => handleClickDetalhamento(feirante._id)}>
                                    <div className="img-destaque-home">
                                        <img src={feirante.imagem}/>
                                    </div>
                                    <h4>{feirante.descricao}</h4>
                                </div>
                            ))
                        }
                    </InfiniteCarousel>
                </div>
            </div>
        </>
    )
}