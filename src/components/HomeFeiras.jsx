import './css/HomeFeiras.css'
import './css/Home.css'
import FeiraMadrugada from '../assets/FeiraMadrugada.jpg'
import FeiraParangaba from '../assets/FeiraParangaba.jpg'
import FeirinhaBeiraMar from '../assets/FeirinhaBeiraMar.jpeg'

import InfiniteCarousel from './CarrosselInfinito.jsx'
import { useState } from 'react'

export default function HomeFeiras() {
    const [feiraFuncionando, setFeiraFuncionando] = useState(false);

    return (
        <>
            <div id="container-homefeiras">
                <h2 className="titulo-sessao-home">Top feiras</h2>
                <div className="conteudo-sessao-home">
                    <InfiniteCarousel>
                        <div className="destaque-home">
                            <div className="img-destaque-home">
                                <img src={FeirinhaBeiraMar} alt="Beira Mar"/>
                            </div>
                            <h4>Feirinha da beira mar</h4>
                            <div className="destaque-informacoes-feira">
                                <div className="informacoes-feira">
                                    <p>AV. bçla aldjaldkasj</p>
                                </div>
                                <div className="funcionamento-feira">
                                    {feiraFuncionando ? <p id="feira-aberta">● Funcionando</p> : <p id="feira-fechada">● Fechada</p>}
                                </div>
                            </div>
                        </div>
                        <div className="destaque-home">
                            <div className="img-destaque-home">
                                <img src={FeiraParangaba} alt="Parangaba"/>
                            </div>
                            <h4>Feira da Parangaba</h4>
                            <div className="destaque-informacoes-feira">
                                <div className="informacoes-feira">
                                    <p>AV. bçla aldjaldkasj</p>
                                </div>
                                <div className="funcionamento-feira">
                                    {feiraFuncionando ? <p id="feira-aberta">● Funcionando</p> : <p id="feira-fechada">● Fechada</p>}
                                </div>
                            </div>
                        </div>
                        <div className="destaque-home">
                            <div className="img-destaque-home">
                                <img src={FeiraMadrugada} alt="Madrugada"/>
                            </div>
                            <h4>Feira da Madrugada</h4>
                            <div className="destaque-informacoes-feira">
                                <div className="informacoes-feira">
                                    <p>AV. bçla aldjaldkasj</p>
                                </div>
                                <div className="funcionamento-feira">
                                    {feiraFuncionando ? <p id="feira-aberta">● Funcionando</p> : <p id="feira-fechada">● Fechada</p>}
                                </div>
                            </div>
                        </div>
                    </InfiniteCarousel>
                </div>
            </div>
        </>
    )
}