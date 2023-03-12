import { PlayerPage } from "../../../Player";

import Actor1 from '../../../../vetores/Atores/millie-bobby-brown.jpg'
import Actor2 from '../../../../vetores/Atores/finn-wolfhard.jpg'
import Actor3 from '../../../../vetores/Atores/gaten-matarazzo.jpg'
import Capa1 from '../../../../vetores/Capa/got-capa.jpg'
import Capa2 from '../../../../vetores/Capa/breaking-bad-capa.jpg'
import Capa3 from '../../../../vetores/Capa/the-boys-capa.jpg'
import Capa4 from '../../../../vetores/Capa/better-call-soul-capa.jpg'
import { TemporadasStrangerThings } from "../../../Sidebars/Stranger Things/StrangerThingsTemp";

export function PlayerStrangerThingsS1E5() {
    return (
        <PlayerPage
            titleVideo='S1:E5 Stranger Things: "Chapter Five: The Flea and the Acrobat"'
            sinopse="A pequena cidade de Hawkins é cenário de estranhos acontecimentos. Após o desaparecimento de um garoto, surge uma menina com poderes sobrenaturais."
            videoId="b9EkMc79ZSU"
            temporadas={<TemporadasStrangerThings/>}
            slugPlayerFolder="series"
            slugPlayerOne="got"
            slugPlayerTwo="breaking-bad"
            slugPlayerThree="the-boys"
            slugPlayerFour="better-call-soul"
            featuresTimer="38 min."
            featuresYear="2016"
            featuresCountry="United States"
            featuresAge="+16"
            featuresCategory="Suspense"
            srcActorOne={Actor1}
            srcActorTwo={Actor2}
            srcActorThree={Actor3}
            nameActorOne="Millie Bobby Brown"
            nameActorTwo="Finn Wolfhard"
            nameActorThree="Gaten Matarazzo"
            subnameActorOne="é Eleven"
            subnameActorTwo="é Mike"
            subnameActorThree="é Dustin Henderson"
            srcWatchTooOne={Capa1}
            srcWatchTooTwo={Capa2}
            srcWatchTooThree={Capa3}
            srcWatchTooFour={Capa4}
            titleWatchTooOne="Game Of Thrones"
            titleWatchTooTwo="Breaking Bad"
            titleWatchTooThree="The Boys"
            titleWatchTooFour="Better Call Soul"
            subtitleWatchTooOne="2011 | 8 Temp."
            subtitleWatchTooTwo="2008 | 5 Temp."
            subtitleWatchTooThree="2019 | 3 Temp."
            subtitleWatchTooFour="2013 | 6 Temp."
        />
    )
}