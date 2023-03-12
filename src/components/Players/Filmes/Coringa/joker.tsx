import { PlayerPage } from "../../../Player";

import Actor1 from '../../../../vetores/Atores/Joaquin_Phoenix.jpg'
import Actor2 from '../../../../vetores/Atores/Robert_De_Niro.jpg'
import Actor3 from '../../../../vetores/Atores/Zazie_Beetz.jpg'
import Capa1 from '../../../../vetores/Capa/Aquaman.jpg'
import Capa2 from '../../../../vetores/Capa/iron_man.jpg'
import Capa3 from '../../../../vetores/Capa/The_Batman.jpg'
import Capa4 from '../../../../vetores/Capa/black_adan.jpg'

export function PlayerJoker() {
    return (
        <PlayerPage
            titleVideo='Coringa'
            sinopse="Isolado, intimidado e desconsiderado pela sociedade, o fracassado comediante Arthur Fleck inicia seu caminho como uma mente criminosa após assassinar três homens em pleno metrô. Sua ação inicia um movimento popular contra a elite de Gotham City, da qual Thomas Wayne é seu maior representante."
            videoId="jfVTJm9NilA"
            temporadas=""
            slugPlayerFolder="movies"
            slugPlayerOne="aquaman"
            slugPlayerTwo="iron-man"
            slugPlayerThree="the-batman"
            slugPlayerFour="black-adan"
            featuresTimer="2h 2m"
            featuresYear="2019"
            featuresCountry="United States"
            featuresAge="+16"
            featuresCategory="Suspense/Drama"
            srcActorOne={Actor1}
            srcActorTwo={Actor2}
            srcActorThree={Actor3}
            nameActorOne="Joaquin Phoenix"
            nameActorTwo="Robert De Niro"
            nameActorThree="Zazie Beetz"
            subnameActorOne="é Coringa"
            subnameActorTwo="é Murray Franklin"
            subnameActorThree="é Sophie Dumond"
            srcWatchTooOne={Capa1}
            srcWatchTooTwo={Capa2}
            srcWatchTooThree={Capa3}
            srcWatchTooFour={Capa4}
            titleWatchTooOne="Aquaman"
            titleWatchTooTwo="Homem de Ferro"
            titleWatchTooThree="The Batman"
            titleWatchTooFour="Adão Negro"
            subtitleWatchTooOne="2018 | 2h 24m"
            subtitleWatchTooTwo="2008 | 2h 6m"
            subtitleWatchTooThree="2022 | 2h 56m"
            subtitleWatchTooFour="2022 | 2h 5m"
        />
    )
}