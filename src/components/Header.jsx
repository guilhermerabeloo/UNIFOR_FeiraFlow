import './css/Header.css'
import logo from '../assets/logo.png'
import { BsList, BsSearch  } from "react-icons/bs";

export default function Header() {
    return (
        <>
            <div id="header">
                <div id="area-utilizavel">
                    <div id="area-logo">
                        <img src={logo} alt="logo" id="img-logo"/>
                        <h1 id="titulo-logo">Feira Flow</h1>
                    </div>
                    <div id="area-busca">
                        <input type="text" placeholder="O que você está buscando?" id="input-busca"/>
                        <button id="btn-busca"><BsSearch /></button>
                    </div>
                    <div id="area-menu">
                        <BsList className="menu-list"/>
                    </div>
                </div>
            </div>
        </>
    )
}