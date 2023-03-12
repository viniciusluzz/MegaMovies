import { PlayerPage } from "../../../Player";

import Actor1 from '../../../../vetores/Atores/Robert_Pattinson.jpg'
import Actor2 from '../../../../vetores/Atores/Zoe_Kravitz.jpg'
import Actor3 from '../../../../vetores/Atores/Paul_Dano.jpg'
import Capa1 from '../../../../vetores/Capa/Aquaman.jpg'
import Capa2 from '../../../../vetores/Capa/iron_man.jpg'
import Capa3 from '../../../../vetores/Capa/black_adan.jpg'
import Capa4 from '../../../../vetores/Capa/Joker.jpg'

export function PlayerTheBatman() {
    return (
        <PlayerPage
            titleVideo='The Batman'
            sinopse="Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas mais sombrias de Gotham City. Com poucos aliados confiáveis, o vigilante solitário se estabelece como a personificação da vingança para a população."
            videoId="rsQEor4y2hg"
            temporadas=""
            slugPlayerFolder="movies"
            slugPlayerOne="aquaman"
            slugPlayerTwo="iron-man"
            slugPlayerThree="black-adan"
            slugPlayerFour="joker"
            featuresTimer="2h 56m"
            featuresYear="2022"
            featuresCountry="United States"
            featuresAge="+14"
            featuresCategory="Ação/Aventura"
            srcActorOne={Actor1}
            srcActorTwo={Actor2}
            srcActorThree={Actor3}
            nameActorOne="Robert Pattinson"
            nameActorTwo="Zoë Kravitz"
            nameActorThree="Paul Dano"
            subnameActorOne="é Batman"
            subnameActorTwo="é Selina Kyle"
            subnameActorThree="é Riddler"
            srcWatchTooOne={Capa1}
            srcWatchTooTwo={Capa2}
            srcWatchTooThree={Capa3}
            srcWatchTooFour={Capa4}
            titleWatchTooOne="Aquaman"
            titleWatchTooTwo="Homem de Ferro"
            titleWatchTooThree="Adão Negro"
            titleWatchTooFour="Coringa"
            subtitleWatchTooOne="2018 | 2h 24m"
            subtitleWatchTooTwo="2008 | 2h 6m"
            subtitleWatchTooThree="2022 | 2h 5m"
            subtitleWatchTooFour="2019 | 2h 2m"
        />
    )
}