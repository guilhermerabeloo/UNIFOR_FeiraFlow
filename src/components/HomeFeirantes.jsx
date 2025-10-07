import './css/HomeFeirantes.css'
import './css/Home.css'
import Feirante1 from '../assets/Feirante1.png'
import Feirante2 from '../assets/Feirante2.png'
import Feirante3 from '../assets/Feirante3.jpg'

import InfiniteCarousel from './CarrosselInfinito.jsx'

export default function HomeFeirantes() {
    return (
        <>
            <div id="container-homefeirantes">
                <h2 className="titulo-sessao-home">Top feirantes</h2>
                <div className="conteudo-sessao-home">
                    <InfiniteCarousel>
                        <div className="destaque-home">
                            <div className="img-destaque-home">
                                <img src={Feirante1}/>
                            </div>
                            <h4>Pastel do tonho</h4>
                        </div>
                        <div className="destaque-home">
                            <div className="img-destaque-home">
                                <img src={Feirante2}/>
                            </div>
                            <h4>Bugigangas do josé</h4>
                        </div>
                        <div className="destaque-home">
                            <div className="img-destaque-home">
                                <img src={Feirante3}/>
                            </div>
                            <h4>RR Moda Masculina</h4>
                        </div>
                    </InfiniteCarousel>
                </div>
            </div>
        </>
    )
}