import { PlayerPage } from "../../../Player";

import Actor1 from '../../../../vetores/Atores/Jason_Momoa.jpg'
import Actor2 from '../../../../vetores/Atores/Amber_Heard.jpg'
import Actor3 from '../../../../vetores/Atores/Patrick_Wilson.jpg'
import Capa1 from '../../../../vetores/Capa/The_Batman.jpg'
import Capa2 from '../../../../vetores/Capa/iron_man.jpg'
import Capa3 from '../../../../vetores/Capa/black_adan.jpg'
import Capa4 from '../../../../vetores/Capa/Joker.jpg'

export function PlayerAquaman() {
    return (
        <PlayerPage
            titleVideo='Aquaman'
            sinopse="A cidade de Atlantis, que já foi lar de uma das mais avançadas civilizações do mundo, agora é um reino submerso dominado pelo ganancioso Rei Orm. Com um vasto exército a seu dispor, Orm planeja conquistar tanto os demais reinos do oceano, quanto o mundo da superfície. Em seu caminho está Aquaman, meio-humano e meio-atlante, e verdadeiro herdeiro do trono. Com a ajuda da princesa Mera, Aquaman precisa recuperar o lendário Tridente de Atlan e aceitar seu destino como protetor das profundezas."
            videoId="WDkg3h8PCVU"
            temporadas=""
            slugPlayerFolder="movies"
            slugPlayerOne="the-batman"
            slugPlayerTwo="iron-man"
            slugPlayerThree="black-adan"
            slugPlayerFour="joker"
            featuresTimer="2h 24m"
            featuresYear="2018"
            featuresCountry="United States"
            featuresAge="+12"
            featuresCategory="Ação/Aventura"
            srcActorOne={Actor1}
            srcActorTwo={Actor2}
            srcActorThree={Actor3}
            nameActorOne="Jason Momoa"
            nameActorTwo="Amber Heard"
            nameActorThree="Patrick Wilson"
            subnameActorOne="é Aquaman"
            subnameActorTwo="é Mera"
            subnameActorThree="é Mestre do Oceano"
            srcWatchTooOne={Capa1}
            srcWatchTooTwo={Capa2}
            srcWatchTooThree={Capa3}
            srcWatchTooFour={Capa4}
            titleWatchTooOne="The Batman"
            titleWatchTooTwo="Homem de Ferro"
            titleWatchTooThree="Adão Negro"
            titleWatchTooFour="Coringa"
            subtitleWatchTooOne="2022 | 2h 56m"
            subtitleWatchTooTwo="2008 | 2h 6m"
            subtitleWatchTooThree="2022 | 2h 5m"
            subtitleWatchTooFour="2019 | 2h 2m"
        />
    )
}