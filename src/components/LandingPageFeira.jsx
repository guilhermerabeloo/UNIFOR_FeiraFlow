import { useState } from 'react';
import './css/LandingPageFeira.css'

import Feirante1 from '../assets/Feirante1.png'
import Feirante2 from '../assets/Feirante2.png'
import Feirante3 from '../assets/Feirante3.jpg'
import FeirinhaBeiraMar from '../assets/FeirinhaBeiraMar.jpeg'

export default function LandingPageFeira() {
    const [feiraFuncionando, setFeiraFuncionando] = useState(true);
    const [latitude, setLatitude] = useState(-3.7262528);
    const [longitude, setLongitude] = useState(-38.4955099);

    return (
        <>
            <div className="container-landingpagefeira">
                <div className="resumo-feira">
                    <div id="titulo-resumo-feira">
                        <h2>Feirinha da beira mar</h2>
                        <div className="feira-funcionandoagora">
                            {feiraFuncionando ? <p id="feira-aberta">● Aberto agora</p> : <p id="feira-fechada">● Fechada</p>}
                        </div>
                    </div>
                    <div id="tagsprodutos-feira">
                        <ul>
                            <li>Comidas</li>
                            <li>Artesanatos</li>
                            <li>Roupas</li>
                            <li>Decoração</li>
                        </ul>
                    </div>
                    <div id="detalhamento-funcionamento-feira">
                        <h4>Funcionamento</h4>
                        <p><span>Seg: </span>08:00 a 18:00</p>
                        <p><span>Ter: </span>08:00 a 18:00</p>
                        <p><span>Qua: </span>08:00 a 18:00</p>
                        <p><span>Qui: </span>08:00 a 18:00</p>
                        <p><span>Sex: </span>08:00 a 18:00</p>
                        <p><span>Sáb: </span>08:00 a 15:00</p>
                        <p><span>Dom: </span>Fechado</p>
                    </div>
                    <div id="resumo-feirantes-feira">
                        <h4>Feirantes</h4>
                        <div className="feirante-feira">
                            <img src={Feirante1}/>
                            <img src={Feirante2}/>
                            <img src={Feirante3}/>
                        </div>
                    </div>
                </div>
                <div className="midia-feira">
                    <div className="imagens-feira">
                        <h4>Destaques</h4>
                        <img src={FeirinhaBeiraMar} alt="Beira Mar"/>
                    </div>
                    <div className="localizacao-feira">
                        <h4>Localização</h4>
                        <div className="map-wrapper">
                            <iframe
                                title="Mapa da localização"
                                src={`https://www.google.com/maps?q=-3.7262528,-38.4955099&z=15&output=embed`}
                                // src={`https://www.google.com/maps?q=${latitude},${latitude}&z=15&output=embed`}
                                allowFullScreen
                                loading="lazy"
                            />
                        </div>
                        <div className="localizacao-como-chegar">
                            <button id="como-chegar"
                              onClick={() => {
                                window.open(`https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`, "_blank");
                            }}
                            >
                            Como chegar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}