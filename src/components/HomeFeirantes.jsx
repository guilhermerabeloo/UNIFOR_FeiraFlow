import './css/HomeFeirantes.css'
import './css/Home.css'
import Feirante1 from '../assets/Feirante1.png'
import Feirante2 from '../assets/Feirante2.png'
import Feirante3 from '../assets/Feirante3.jpg'

import InfiniteCarousel from './CarrosselInfinito.jsx'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function HomeFeirantes() {
    const navigate = useNavigate();
    const [feirantesEmDestaque, setFeirantesEmDestaque] = useState([
        {
            id_feirante: 1,
            nome: "Pastel do tonho",
            imagem: Feirante1,
        },
        {
            id_feirante: 2,
            nome: "Bugigangas do josé",
            imagem: Feirante2,
        },
        {
            id_feirante: 3,
            nome: "RR Moda Masculina",
            imagem: Feirante3,
        }
    ]);

    const handleClickDetalhamento = (idfeirante) => {
        navigate(`/landingpagefeirante/${idfeirante}`)
    };

    return (
        <>
            <div id="container-homefeirantes">
                <h2 className="titulo-sessao-home">Top feirantes</h2>
                <div className="conteudo-sessao-home">
                    <InfiniteCarousel>
                        {
                            feirantesEmDestaque.map((feirante, index) => (
                                <div className="destaque-home" key={index} onClick={() => handleClickDetalhamento(feirante.id_feirante)}>
                                    <div className="img-destaque-home">
                                        <img src={feirante.imagem}/>
                                    </div>
                                    <h4>{feirante.nome}</h4>
                                </div>
                            ))
                        }
                    </InfiniteCarousel>
                </div>
            </div>
        </>
    )
}