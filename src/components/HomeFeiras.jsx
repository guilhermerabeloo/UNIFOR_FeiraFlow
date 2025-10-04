import './css/HomeFeiras.css'
import './css/Home.css'
import FeiraMadrugada from '../assets/FeiraMadrugada.jpg'
import FeiraParangaba from '../assets/FeiraParangaba.jpg'
import FeirinhaBeiraMar from '../assets/FeirinhaBeiraMar.jpeg'

import InfiniteCarousel from './CarrosselInfinito.jsx'

export default function HomeFeiras() {
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
                        </div>
                        <div className="destaque-home">
                            <div className="img-destaque-home">
                                <img src={FeiraParangaba} alt="Parangaba"/>
                            </div>
                            <h4>Feira da Parangaba</h4>
                        </div>
                        <div className="destaque-home">
                            <div className="img-destaque-home">
                                <img src={FeiraMadrugada} alt="Madrugada"/>
                            </div>
                            <h4>Feira da Madrugada</h4>
                        </div>
                    </InfiniteCarousel>
                </div>
            </div>
        </>
    )
}