import './css/HomeFeiras.css'
import './css/Home.css'
import FeiraMadrugada from '../assets/FeiraMadrugada.jpg'
import FeiraParangaba from '../assets/FeiraParangaba.jpg'
import FeirinhaBeiraMar from '../assets/FeirinhaBeiraMar.jpeg'

import InfiniteCarousel from './CarrosselInfinito.jsx'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function HomeFeiras() {
    const navigate = useNavigate();
    const [feirasEmDestaque, setFeirasEmDestaque] = useState([
        {
            id_feira: 1,
            nome: "Feirinha da Beira Mar",
            endereco: "Av. Beira Mar, 123",
            imagem: FeirinhaBeiraMar,
            funcionando: true
        },
        {
            id_feira: 2,
            nome: "Feira da Parangaba",
            endereco: "Av. Beira Mar, 123",
            imagem: FeiraParangaba,
            funcionando: true
        },
        {
            id_feira: 3,
            nome: "Feira da Madrugada",
            endereco: "Av. Beira Mar, 123",
            imagem: FeiraMadrugada,
            funcionando: true
        }
    ]);

    const handleClickDetalhamento = (idfeirante) => {
        navigate(`/landingpagefeira/${idfeirante}`)
    };

    return (
        <>
            <div id="container-homefeiras">
                <h2 className="titulo-sessao-home">Top feiras</h2>
                <div className="conteudo-sessao-home">
                    <InfiniteCarousel>
                        {
                            feirasEmDestaque.map((feira, index) => (
                                <div className="destaque-home" key={index} onClick={() => handleClickDetalhamento(feira.id_feira)}>
                                    <div className="img-destaque-home">
                                        <img src={feira.imagem} alt="Beira Mar"/>
                                    </div>
                                    <h4>{feira.nome}</h4>
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