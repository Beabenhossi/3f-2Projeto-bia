import { getcss } from "./comum.js";

async function quantidadeDeUsuarios(){
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url);
    const dados = await res.json();
    const nomeDasRedes = Object.keys(dados);
    const quantidadeDeUsuarios = Object.values(dados);

    const infos = [
        {
            x: nomeDasRedes,
            y: quantidadeDeUsuarios,
            type: 'bar',
            maker:{
                color: getcss('--cor-primaria')
            }
            
        }
    ]
    const layout = {
        plot_bgcolor: getcss('--cor-de-fundo'),
        paper_bgcolor: getcss('--cor-de-fundo'),
        title:{
            text: 'Redes socias com mais usuarios no mundo',
            x: 0,
            font:{
                color: getcss('--cor-primaria'),
                family: getcss('--font'),
                size: 30
            }
        }
    }

    const grafico = document.createElement('div');
    grafico.className = 'grafico';
    document.getElementById('graficos-container').appendChild(grafico);
    Plotly.newPlot(grafico,infos);
}

quantidadeDeUsuarios();
