import { PlayerPage } from "../../../Player";

import Dany from '../../../../vetores/Atores/Daenarys.png'
import John from '../../../../vetores/Atores/John Snow.png'
import Cersei from '../../../../vetores/Atores/Cersei.png'
import BreakingBadCapa from '../../../../vetores/Capa/breaking-bad-capa.jpg'
import TheBoysCapa from '../../../../vetores/Capa/the-boys-capa.jpg'
import StrangerThingsCapa from '../../../../vetores/Capa/stranger-things-capa.jpg'
import BetterCallSoulCapa from '../../../../vetores/Capa/better-call-soul-capa.jpg'
import { TemporadasGot } from "../../../Sidebars/got/GotTemp";

export function PlayerGotS5E1() {
    return (
        <PlayerPage
            titleVideo='S5:E1 Game Of Thrones: "The Wars to Come"'
            sinopse="Quem se senta no Trono de Ferro, controla os 7 Reinos. Isso significa uma luta de sangue e poder em Westeros. Não importa se você é team Stark, Lannister ou Targaryen: reviver essa história é sempre emocionante."
            videoId="R5yPXKOlVHo"
            temporadas={<TemporadasGot/>}
            slugPlayerFolder="series"
            slugPlayerOne="breaking-bad"
            slugPlayerTwo="the-boys"
            slugPlayerThree="stranger-things"
            slugPlayerFour="better-call-soul"
            featuresTimer="45 min."
            featuresYear="2011"
            featuresCountry="United States"
            featuresAge="+18"
            featuresCategory="Fantasia"
            srcActorOne={Dany}
            srcActorTwo={John}
            srcActorThree={Cersei}
            nameActorOne="Emilia Clarke"
            nameActorTwo="Kit Harington"
            nameActorThree="Lena Heady"
            subnameActorOne="é Daenarys Targueryan"
            subnameActorTwo="é John Snow"
            subnameActorThree="é Cersei Lannister"
            srcWatchTooOne={BreakingBadCapa}
            srcWatchTooTwo={TheBoysCapa}
            srcWatchTooThree={StrangerThingsCapa}
            srcWatchTooFour={BetterCallSoulCapa}
            titleWatchTooOne="Breaking Bad"
            titleWatchTooTwo="The Boys"
            titleWatchTooThree="Stranger Things"
            titleWatchTooFour="Better Call Soul"
            subtitleWatchTooOne="2008 | 5 Temp."
            subtitleWatchTooTwo="2019 | 3 Temp."
            subtitleWatchTooThree="2016 | 4 Temp."
            subtitleWatchTooFour="2013 | 6 Temp."
        />
    )
}