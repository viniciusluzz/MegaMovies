import { PlayerPage } from "../../../Player";

import Actor1 from '../../../../vetores/Atores/bob_odenkirk.jpg'
import Actor2 from '../../../../vetores/Atores/rhea_seehorn.jpg'
import Actor3 from '../../../../vetores/Atores/michael_mando.jpg'
import Capa1 from '../../../../vetores/Capa/got-capa.jpg'
import Capa2 from '../../../../vetores/Capa/breaking-bad-capa.jpg'
import Capa3 from '../../../../vetores/Capa/the-boys-capa.jpg'
import Capa4 from '../../../../vetores/Capa/stranger-things-capa.jpg'
import { TemporadasBetterCallSaul } from "../../../Sidebars/BetterCallSaul/BetterCallSoulTemp";

export function PlayerBetterCallSaulS1E9() {
    return (
        <PlayerPage
            titleVideo='S1:E9 Better Call Saul: "Pimento"'
            sinopse="Antes de se transformar no infame Saul Goodman, o advogado de Breaking Bad era mais inocente, mas não era santo."
            videoId="zzy6wWjFONY"
            temporadas={<TemporadasBetterCallSaul/>}
            slugPlayerFolder="series"
            slugPlayerOne="got"
            slugPlayerTwo="breaking-bad"
            slugPlayerThree="the-boys"
            slugPlayerFour="stranger-things"
            featuresTimer="45 min."
            featuresYear="2013"
            featuresCountry="United States"
            featuresAge="+16"
            featuresCategory="Drama"
            srcActorOne={Actor1}
            srcActorTwo={Actor2}
            srcActorThree={Actor3}
            nameActorOne="Bob Odenkirk"
            nameActorTwo="Rhea Seehorn"
            nameActorThree="Michael Mando"
            subnameActorOne="é Soul Goodman"
            subnameActorTwo="é Kim Wexler"
            subnameActorThree="é Nacho Varga"
            srcWatchTooOne={Capa1}
            srcWatchTooTwo={Capa2}
            srcWatchTooThree={Capa3}
            srcWatchTooFour={Capa4}
            titleWatchTooOne="Game Of Thrones"
            titleWatchTooTwo="Breaking Bad"
            titleWatchTooThree="The Boys"
            titleWatchTooFour="Stranger Things"
            subtitleWatchTooOne="2011 | 8 Temp."
            subtitleWatchTooTwo="2008 | 5 Temp."
            subtitleWatchTooThree="2019 | 3 Temp."
            subtitleWatchTooFour="2016 | 4 Temp."
        />
    )
}