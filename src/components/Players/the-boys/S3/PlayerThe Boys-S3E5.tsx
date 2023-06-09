import { PlayerPage } from "../../../Player";

import Actor1 from '../../../../vetores/Atores/Karl_Urban.png'
import Actor3 from '../../../../vetores/Atores/Jack_Quaid.png'
import Actor2 from '../../../../vetores/Atores/antony-starr.jpg'
import Capa1 from '../../../../vetores/Capa/got-capa.jpg'
import Capa2 from '../../../../vetores/Capa/breaking-bad-capa.jpg'
import Capa3 from '../../../../vetores/Capa/stranger-things-capa.jpg'
import Capa4 from '../../../../vetores/Capa/better-call-soul-capa.jpg'
import { TemporadasTheBoys } from "../../../Sidebars/The Boys/TheBoysTemp";

export function PlayerTheBoysS3E5() {
    return (
        <PlayerPage
            titleVideo='S3:E5 The Boys: "The Last Time To Look On This World Of Lies"'
            sinopse="THE BOYS é uma visão irreverente do que acontece quando super-heróis, que são tão populares quanto celebridades, tão influentes quanto políticos e tão reverenciados como deuses, abusam de seus superpoderes ao invés de usá-los para o bem. É o sem poder contra o superpoder, quando os rapazes embarcam em uma jornada heroica para expor a verdade sobre 'Os Sete' com o apoio da Vought."
            videoId="q5l-2R7E_48"
            temporadas={<TemporadasTheBoys/>}
            slugPlayerFolder="series"
            slugPlayerOne="got"
            slugPlayerTwo="breaking-bad"
            slugPlayerThree="stranger-things"
            slugPlayerFour="better-call-soul"
            featuresTimer="41 min."
            featuresYear="2019"
            featuresCountry="United States"
            featuresAge="+18"
            featuresCategory="Ação"
            srcActorOne={Actor1}
            srcActorTwo={Actor2}
            srcActorThree={Actor3}
            nameActorOne="Karl Urban"
            nameActorTwo="Antony Starr"
            nameActorThree="Jack Quaid"
            subnameActorOne="é Billy Butcher"
            subnameActorTwo="é Homelander"
            subnameActorThree="é Hughie Campbell"
            srcWatchTooOne={Capa1}
            srcWatchTooTwo={Capa2}
            srcWatchTooThree={Capa3}
            srcWatchTooFour={Capa4}
            titleWatchTooOne="Game Of Thrones"
            titleWatchTooTwo="Breaking Bad"
            titleWatchTooThree="Stranger Things"
            titleWatchTooFour="Better Call Soul"
            subtitleWatchTooOne="2011 | 8 Temp."
            subtitleWatchTooTwo="2008 | 5 Temp."
            subtitleWatchTooThree="2016 | 4 Temp."
            subtitleWatchTooFour="2013 | 6 Temp."
        />
    )
}