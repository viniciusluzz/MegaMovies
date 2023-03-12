import { PlayerPage } from "../../../Player";

import Actor1 from '../../../../vetores/Atores/dwayne_johnson.jpg'
import Actor2 from '../../../../vetores/Atores/henry_cavill.jpg'
import Actor3 from '../../../../vetores/Atores/sarah_shahi.jpg'
import Capa1 from '../../../../vetores/Capa/Aquaman.jpg'
import Capa2 from '../../../../vetores/Capa/iron_man.jpg'
import Capa3 from '../../../../vetores/Capa/The_Batman.jpg'
import Capa4 from '../../../../vetores/Capa/Joker.jpg'

export function PlayerBlackAdan() {
    return (
        <PlayerPage
            titleVideo='Adão Negro'
            sinopse="O poderoso Adão Negro é libertado de sua tumba para lançar sua justiça cruel sobre a Terra."
            videoId="HluMG9tJXHM"
            temporadas=""
            slugPlayerFolder="movies"
            slugPlayerOne="aquaman"
            slugPlayerTwo="iron-man"
            slugPlayerThree="the-batman"
            slugPlayerFour="joker"
            featuresTimer="2h 5m"
            featuresYear="2022"
            featuresCountry="United States"
            featuresAge="+14"
            featuresCategory="Ação/Aventura"
            srcActorOne={Actor1}
            srcActorTwo={Actor2}
            srcActorThree={Actor3}
            nameActorOne="Dwayne Johnson"
            nameActorTwo="Henry Cavill"
            nameActorThree="Sarah Shahi"
            subnameActorOne="é Adão Negro"
            subnameActorTwo="é Superman"
            subnameActorThree="é Ísis"
            srcWatchTooOne={Capa1}
            srcWatchTooTwo={Capa2}
            srcWatchTooThree={Capa3}
            srcWatchTooFour={Capa4}
            titleWatchTooOne="Aquaman"
            titleWatchTooTwo="Homem de Ferro"
            titleWatchTooThree="The Batman"
            titleWatchTooFour="Coringa"
            subtitleWatchTooOne="2018 | 2h 24m"
            subtitleWatchTooTwo="2008 | 2h 6m"
            subtitleWatchTooThree="2022 | 2h 56m"
            subtitleWatchTooFour="2019 | 2h 2m"
        />
    )
}