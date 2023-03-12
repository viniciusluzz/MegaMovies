import { PlayerPage } from "../../../Player";

import Actor1 from '../../../../vetores/Atores/Robert_Downey,_Jr..jpg'
import Actor2 from '../../../../vetores/Atores/atorferro2.jpg'
import Actor3 from '../../../../vetores/Atores/GwynethPaltrow.jpg'
import Capa1 from '../../../../vetores/Capa/The_Batman.jpg'
import Capa2 from '../../../../vetores/Capa/Aquaman.jpg'
import Capa3 from '../../../../vetores/Capa/black_adan.jpg'
import Capa4 from '../../../../vetores/Capa/Joker.jpg'

export function PlayerIronMan() {
    return (
        <PlayerPage
            titleVideo='Homem de Ferro'
            sinopse="Tony Stark é um industrial bilionário e inventor brilhante que realiza testes bélicos no exterior, mas é sequestrado por terroristas que o forçam a construir uma arma devastadora. Em vez disso, ele constrói uma armadura blindada e enfrenta seus sequestradores. Ao voltar para os EUA, Stark aprimora a armadura e a utiliza para combater o crime."
            videoId="8ugaeA-nMTc"
            temporadas=""
            slugPlayerFolder="movies"
            slugPlayerOne="the-batman"
            slugPlayerTwo="aquaman"
            slugPlayerThree="black-adan"
            slugPlayerFour="joker"
            featuresTimer="2h 6m"
            featuresYear="2008"
            featuresCountry="United States"
            featuresAge="+12"
            featuresCategory="Ação/Aventura"
            srcActorOne={Actor1}
            srcActorTwo={Actor2}
            srcActorThree={Actor3}
            nameActorOne="Robert Downey Jr."
            nameActorTwo="Jon Favreau"
            nameActorThree="Gwyneth Paltrow"
            subnameActorOne="é Tony Stark"
            subnameActorTwo="é Happy Hogan"
            subnameActorThree="é Pepper Potts"
            srcWatchTooOne={Capa1}
            srcWatchTooTwo={Capa2}
            srcWatchTooThree={Capa3}
            srcWatchTooFour={Capa4}
            titleWatchTooOne="The Batman"
            titleWatchTooTwo="Aquaman"
            titleWatchTooThree="Adão Negro"
            titleWatchTooFour="Coringa"
            subtitleWatchTooOne="2022 | 2h 56m"
            subtitleWatchTooTwo="2018 | 2h 24m"
            subtitleWatchTooThree="2022 | 2h 5m"
            subtitleWatchTooFour="2019 | 2h 2m"
        />
    )
}