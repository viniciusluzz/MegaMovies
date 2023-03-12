import { PlayerPage } from "../../../Player";

import Actor1 from '../../../../vetores/Atores/Viggo_Mortensen.jpg'
import Actor2 from '../../../../vetores/Atores/Mahershala_Ali.jpg'
import Actor3 from '../../../../vetores/Atores/Nick_Vallelonga.jpg'
import Capa1 from '../../../../vetores/Capa/the_godfather.jpeg'
import Capa2 from '../../../../vetores/Capa/Scent_of_a_Woman.jpg'
import Capa3 from '../../../../vetores/Capa/The_Batman.jpg'
import Capa4 from '../../../../vetores/Capa/Joker.jpg'

export function PlayerGreenBook() {
    return (
        <PlayerPage
            titleVideo='Green Book'
            sinopse="Dr. Don Shirley é um pianista afro-americano de renome mundial, prestes a embarcar em uma turnê pelo sul dos Estados Unidos, em 1962. Como precisa de um motorista e guarda-costas, Shirley recruta Tony Lip, um ítalo-americano fanfarrão do Bronx. Apesar de suas diferenças, os dois homens desenvolvem uma ligação inesperada ao enfrentar o racismo e os perigos de uma era de segregação racial."
            videoId="Q2YrfQgFCEY"
            temporadas=""
            slugPlayerFolder="movies"
            slugPlayerOne="the-goodfather"
            slugPlayerTwo="scent_of_a_woman"
            slugPlayerThree="the-batman"
            slugPlayerFour="joker"
            featuresTimer="2h 10m"
            featuresYear="2018"
            featuresCountry="United States"
            featuresAge="Livre"
            featuresCategory="Comédia dramática"
            srcActorOne={Actor1}
            srcActorTwo={Actor2}
            srcActorThree={Actor3}
            nameActorOne="Viggo Mortensen"
            nameActorTwo="Mahershala Ali"
            nameActorThree="Nick Vallelonga"
            subnameActorOne="é Tony Lip"
            subnameActorTwo="é Don Shirley"
            subnameActorThree="é Augie"
            srcWatchTooOne={Capa1}
            srcWatchTooTwo={Capa2}
            srcWatchTooThree={Capa3}
            srcWatchTooFour={Capa4}
            titleWatchTooOne="The Goodfather"
            titleWatchTooTwo="Scent of a Woman"
            titleWatchTooThree="The Batman"
            titleWatchTooFour="Coringa"
            subtitleWatchTooOne="1972 | 2h 55m"
            subtitleWatchTooTwo="1992 | 2h 37m"
            subtitleWatchTooThree="2022 | 2h 56m"
            subtitleWatchTooFour="2019 | 2h 2m"
        />
    )
}