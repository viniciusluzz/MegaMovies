import { PlayerPage } from "../../../Player";

import Actor1 from '../../../../vetores/Atores/Al_Pacino.jpg'
import Actor2 from '../../../../vetores/Atores/Chris_ODonnell.jpg'
import Actor3 from '../../../../vetores/Atores/Gabrielle_Anwar.jpg'
import Capa1 from '../../../../vetores/Capa/the_godfather.jpeg'
import Capa2 from '../../../../vetores/Capa/Green_Book.jpg'
import Capa3 from '../../../../vetores/Capa/The_Batman.jpg'
import Capa4 from '../../../../vetores/Capa/Joker.jpg'

export function PlayerScentOfAWoman() {
    return (
        <PlayerPage
            titleVideo='Scent of a Woman'
            sinopse="Frank é um militar aposentado, cego e impossível de se conviver junto. Sua sobrinha contrata Charlie para cuidar dele no dia de Ação de Graças. Charlie aceita o trabalho para poder pagar por uma viagem de volta pra casa no Natal, porém eles não contavam com a ideia de Frank em passar o dia em Nova York."
            videoId="6adTi1uzYQc"
            temporadas=""
            slugPlayerFolder="movies"
            slugPlayerOne="the-goodfather"
            slugPlayerTwo="green-book"
            slugPlayerThree="the-batman"
            slugPlayerFour="joker"
            featuresTimer="2h 37m"
            featuresYear="1992"
            featuresCountry="United States"
            featuresAge="Livre"
            featuresCategory="Comédia dramática"
            srcActorOne={Actor1}
            srcActorTwo={Actor2}
            srcActorThree={Actor3}
            nameActorOne="Al Pacino"
            nameActorTwo="Chris O'Donnell"
            nameActorThree="Gabrielle Anwar"
            subnameActorOne="é Frank Slade"
            subnameActorTwo="é Charlie Simms"
            subnameActorThree="é Donna"
            srcWatchTooOne={Capa1}
            srcWatchTooTwo={Capa2}
            srcWatchTooThree={Capa3}
            srcWatchTooFour={Capa4}
            titleWatchTooOne="The Goodfather"
            titleWatchTooTwo="Green Book"
            titleWatchTooThree="The Batman"
            titleWatchTooFour="Coringa"
            subtitleWatchTooOne="1972 | 2h 55m"
            subtitleWatchTooTwo="2018 | 2h 10m"
            subtitleWatchTooThree="2022 | 2h 56m"
            subtitleWatchTooFour="2019 | 2h 2m"
        />
    )
}