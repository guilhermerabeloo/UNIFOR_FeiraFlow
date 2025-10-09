import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './css/LandingPageFeirante.css'

import Feirante1 from '../assets/Feirante1.png'

export default function LandingPageFeira() {
    const { id } = useParams();
    const idNumber = Number(id);

    const feirantes = [
        {
            id_feira: 1,
            nome: "Pastel do Seu Zé",
            imagem: Feirante1,
            tags: ["Comidas", "Bebidas"],
            agendaSemanal: {
                seg: { horarioFormatado: "08:00 a 18:00", horaInicio: 8, horaFinal: 18, feira: "Feirinha da Beira Mar" },
                ter: { horarioFormatado: "08:00 a 18:00", horaInicio: 8, horaFinal: 18, feira: "Feirinha da Beira Mar" },
                qua: { horarioFormatado: "08:00 a 18:00", horaInicio: 8, horaFinal: 18, feira: "Feirinha da Beira Mar" },
                qui: { horarioFormatado: "08:00 a 18:00", horaInicio: 8, horaFinal: 18, feira: "Feirinha da Beira Mar" },
                sex: { horarioFormatado: "08:00 a 18:00", horaInicio: 8, horaFinal: 18, feira: "Feirinha da Beira Mar" },
                sab: { horarioFormatado: "08:00 a 15:00", horaInicio: 8, horaFinal: 15, feira: "Feira da Parangaba" },
                dom: { horarioFormatado: "Fechado", horaInicio: null, horaFinal: null, feira: null}
            },
            feiraNoDia: { feira: "Feirinha da Beira Mar", latitude: -3.7262528, longitude: -38.4955099 },
            listaProdutos: ["Comidas", "Bebidas"],
        },
        {
            id_feira: 2,
            nome: "RR Moda Masculina",
            imagem: Feirante1,
            tags: ["Comidas", "Bebidas"],
            agendaSemanal: {
                seg: { horarioFormatado: "08:00 a 18:00", horaInicio: 8, horaFinal: 18, feira: "Feirinha da Beira Mar" },
                ter: { horarioFormatado: "08:00 a 18:00", horaInicio: 8, horaFinal: 18, feira: "Feirinha da Beira Mar" },
                qua: { horarioFormatado: "08:00 a 18:00", horaInicio: 8, horaFinal: 18, feira: "Feirinha da Beira Mar" },
                qui: { horarioFormatado: "08:00 a 18:00", horaInicio: 8, horaFinal: 18, feira: "Feirinha da Beira Mar" },
                sex: { horarioFormatado: "08:00 a 18:00", horaInicio: 8, horaFinal: 18, feira: "Feirinha da Beira Mar" },
                sab: { horarioFormatado: "08:00 a 15:00", horaInicio: 8, horaFinal: 15, feira: "Feira da Parangaba" },
                dom: { horarioFormatado: "Fechado", horaInicio: null, horaFinal: null, feira: null}
            },
            feiraNoDia: { feira: "Feirinha da Beira Mar", latitude: -3.7262528, longitude: -38.4955099 },
            listaProdutos: ["Comidas", "Bebidas"],
        },
    ]

    const [feiranteFuncionando, setFeiranteFuncionando] = useState(true);
    const [detalhamentoFeirante, setDetalhamentoFeirante] = useState({});

    useEffect(() => {
        // definindo feirante selecionado para detalhamento
        const found = feirantes.find(f => f.id_feira === idNumber) ?? null;
        setDetalhamentoFeirante(found);
        

        // verificando se o feirante está funcionando no dia atual
        const diaSemanaMapeado = {
            1: 'seg',
            2: 'ter',
            3: 'qua',
            4: 'qui',
            5: 'sex',
            6: 'sab',
            7: 'dom'
        }

        const dataAtual = new Date();
        const horarioAgora = dataAtual.getHours() + (dataAtual.getMinutes() / 60);
        let diaSemanaAtualInt = dataAtual.getDay();
        diaSemanaAtualInt = diaSemanaAtualInt === 0 ? 7 : diaSemanaAtualInt;

        const diaSemanaAtualStr = diaSemanaMapeado[diaSemanaAtualInt];

        const horaAberturaDiaAtual = found?.agendaSemanal[diaSemanaAtualStr]?.horaInicio ?? null;
        const horaFechamentoDiaAtual = found?.agendaSemanal[diaSemanaAtualStr]?.horaFinal ?? null;
        
        if (horaAberturaDiaAtual === null || horaFechamentoDiaAtual === null) {
            setFeiranteFuncionando(false);
            return;
        } else if (horarioAgora >= horaAberturaDiaAtual && horarioAgora <= horaFechamentoDiaAtual) {
            setFeiranteFuncionando(true);
            return;
        } else {
            setFeiranteFuncionando(false);
            return;
        }
    }, [idNumber]);


    return (
        <>
            <div className="container-landingpagefeirante">
                <div className="resumo-feirante">
                    <div className="perfil-feirante">
                        <img src={detalhamentoFeirante.imagem} alt="Foto de perfil" id="foto-perfil-feirante"/>
                        <div className="dados-feirante">
                            <div id="titulo-resumo-feirante">
                                <h2>{detalhamentoFeirante.nome}</h2>
                            </div>
                            <div id="tagscategoria-feirante">
                                <ul>
                                    {
                                        detalhamentoFeirante.tags?.map((tag, index) => (
                                            <li key={index}>{tag}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className="avaliacoes-feirante">
                                ★★★★☆
                            </div>
                        </div>
                    </div>
                    <div id="detalhamento-funcionamento-feirante">
                        <h4>Agenda semanal</h4>
                        <p><span>Seg: </span>{detalhamentoFeirante?.agendaSemanal?.seg?.horarioFormatado}. <span>{detalhamentoFeirante?.agendaSemanal?.seg?.feira}</span></p>
                        <p><span>Ter: </span>{detalhamentoFeirante?.agendaSemanal?.ter?.horarioFormatado}. <span>{detalhamentoFeirante?.agendaSemanal?.ter?.feira}</span></p>
                        <p><span>Qua: </span>{detalhamentoFeirante?.agendaSemanal?.qua?.horarioFormatado}. <span>{detalhamentoFeirante?.agendaSemanal?.qua?.feira}</span></p>
                        <p><span>Qui: </span>{detalhamentoFeirante?.agendaSemanal?.qui?.horarioFormatado}. <span>{detalhamentoFeirante?.agendaSemanal?.qui?.feira}</span></p>
                        <p><span>Sex: </span>{detalhamentoFeirante?.agendaSemanal?.sex?.horarioFormatado}. <span>{detalhamentoFeirante?.agendaSemanal?.sex?.feira}</span></p>
                        <p><span>Sáb: </span>{detalhamentoFeirante?.agendaSemanal?.sab?.horarioFormatado}. <span>{detalhamentoFeirante?.agendaSemanal?.sab?.feira}</span></p>
                        <p><span>Dom: </span>{detalhamentoFeirante?.agendaSemanal?.dom?.horarioFormatado}. <span>{detalhamentoFeirante?.agendaSemanal?.dom?.feira}</span></p>
                    </div>
                    <div id="funcionamento-dia-atual">
                        <h4>Funcionamento agora</h4>
                        {
                        !feiranteFuncionando
                            ? (
                                <p id="feira-fechada">● Fechada</p>
                            )
                            : (
                                <>
                                    <p id="feira-aberta">● Aberto agora na {detalhamentoFeirante?.feiraNoDia?.feira}</p>
                                    <div className="map-wrapper" style={{ width: "100%", height: 200 }}>
                                    <iframe
                                        title="Mapa da localização"
                                        src={`https://www.google.com/maps?q=${detalhamentoFeirante?.feiraNoDia?.latitude},${detalhamentoFeirante?.feiraNoDia?.longitude}&z=15&output=embed`}
                                        allowFullScreen
                                        loading="lazy"
                                        style={{ width: "100%", height: "100%", border: 0 }}
                                    />
                                    </div>
                                    <div className="localizacao-como-chegar" style={{ marginTop: 8 }}>
                                    <button
                                        id="como-chegar"
                                        type="button"
                                        onClick={() => {
                                        window.open(
                                            `https://www.google.com/maps/dir/?api=1&destination=${detalhamentoFeirante?.feiraNoDia?.latitude},${detalhamentoFeirante?.feiraNoDia?.longitude}`,
                                            "_blank"
                                        );
                                        }}
                                    >
                                        Como chegar
                                    </button>
                                    </div>
                                </>
                            )
                        }
                    </div>
                </div>
                <div className="produtos-feirante">
                    <h4>Produtos</h4>
                    <div id="lista-produtos-feirante">
                        <ul>
                            {
                                detalhamentoFeirante.listaProdutos?.map((produto, index) => (
                                    <li key={index}>{produto}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}