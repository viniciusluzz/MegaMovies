import { PlayerPage } from "../../../Player";

import Bryan from '../../../../vetores/Atores/bryan-cranston.jpg'
import Aaron from '../../../../vetores/Atores/aaron-paul.jpg'
import Gian from '../../../../vetores/Atores/giancarlo-esposito.jpg'
import GotCapa from '../../../../vetores/Capa/got-capa.jpg'
import TheBoysCapa from '../../../../vetores/Capa/the-boys-capa.jpg'
import StrangerThingsCapa from '../../../../vetores/Capa/stranger-things-capa.jpg'
import BetterCallSoulCapa from '../../../../vetores/Capa/better-call-soul-capa.jpg'
import { BreakingBadTemp } from "../../../Sidebars/Breaking Bad/BreakingBadTemp";

export function PlayerBreakingBadS3E10() {
    return (
        <PlayerPage
            titleVideo='S3:E10 Breaking Bad: "Fly"'
            sinopse="Walter White é um professor de química na casa dos 50 anos que trabalha em uma escola secundária no Novo México. Para atender às necessidades de Skyler, sua esposa grávida, e Walt Junior, seu filho deficiente físico, ele tem que trabalhar duplamente. Sua vida fica ainda mais complicada quando descobre que está sofrendo de um câncer de pulmão incurável. Para aumentar rapidamente a quantidade de dinheiro que deixaria para sua família após sua morte, Walter usa seu conhecimento de química para fazer e vender metanfetamina, uma droga sintética. Ele conta com a ajuda do ex-aluno e pequeno traficante Jesse e enfrenta vários desafios, incluindo o fato de seu concunhado ser um importante nome dentro da Agência Anti-Drogas da região."
            videoId="UXIl8m4P3o0"
            temporadas={<BreakingBadTemp/>}
            slugPlayerFolder="series"
            slugPlayerOne="got"
            slugPlayerTwo="the-boys"
            slugPlayerThree="stranger-things"
            slugPlayerFour="better-call-soul"
            featuresTimer="39 min."
            featuresYear="2008"
            featuresCountry="United States"
            featuresAge="+16"
            featuresCategory="Drama"
            srcActorOne={Bryan}
            srcActorTwo={Aaron}
            srcActorThree={Gian}
            nameActorOne="Bryan Cranston"
            nameActorTwo="Aaron Paul"
            nameActorThree="Giancarlo Esposito"
            subnameActorOne="é Walter White"
            subnameActorTwo="é Jesse Pinckman"
            subnameActorThree="é Gus Fring"
            srcWatchTooOne={GotCapa}
            srcWatchTooTwo={TheBoysCapa}
            srcWatchTooThree={StrangerThingsCapa}
            srcWatchTooFour={BetterCallSoulCapa}
            titleWatchTooOne="Game Of Thrones"
            titleWatchTooTwo="The Boys"
            titleWatchTooThree="Stranger Things"
            titleWatchTooFour="Better Call Soul"
            subtitleWatchTooOne="2011 | 8 Temp."
            subtitleWatchTooTwo="2019 | 3 Temp."
            subtitleWatchTooThree="2016 | 4 Temp."
            subtitleWatchTooFour="2013 | 6 Temp."
        />
    )
}