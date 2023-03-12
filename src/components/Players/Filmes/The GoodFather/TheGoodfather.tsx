import { PlayerPage } from "../../../Player";

import Actor1 from '../../../../vetores/Atores/Al_Pacino.jpg'
import Actor2 from '../../../../vetores/Atores/Marlon_Brando.jpg'
import Actor3 from '../../../../vetores/Atores/Diane_Keaton.jpg'
import Capa1 from '../../../../vetores/Capa/Scent_of_a_Woman.jpg'
import Capa2 from '../../../../vetores/Capa/Green_Book.jpg'
import Capa3 from '../../../../vetores/Capa/The_Batman.jpg'
import Capa4 from '../../../../vetores/Capa/Joker.jpg'

export function PlayerTheGoodfather() {
    return (
        <PlayerPage
            titleVideo='O Poderoso Chefão'
            sinopse="Uma família mafiosa luta para estabelecer sua supremacia nos Estados Unidos depois da Segunda Guerra Mundial. Uma tentativa de assassinato deixa o chefão Vito Corleone incapacitado e força os filhos Michael e Sonny a assumir os negócios."
            videoId="SaHZHU-44XA"
            temporadas=""
            slugPlayerFolder="movies"
            slugPlayerOne="scent_of_a_woman"
            slugPlayerTwo="green-book"
            slugPlayerThree="the-batman"
            slugPlayerFour="joker"
            featuresTimer="2h 55m"
            featuresYear="1972"
            featuresCountry="United States"
            featuresAge="+14"
            featuresCategory="Crime/Drama"
            srcActorOne={Actor1}
            srcActorTwo={Actor2}
            srcActorThree={Actor3}
            nameActorOne="Al Pacino"
            nameActorTwo="Marlon Brando"
            nameActorThree="Diane Keaton"
            subnameActorOne="é Michael Corleone"
            subnameActorTwo="é Vito Corleone"
            subnameActorThree="é Kay Adams"
            srcWatchTooOne={Capa1}
            srcWatchTooTwo={Capa2}
            srcWatchTooThree={Capa3}
            srcWatchTooFour={Capa4}
            titleWatchTooOne="Scent of a Woman"
            titleWatchTooTwo="Green Book"
            titleWatchTooThree="The Batman"
            titleWatchTooFour="Coringa"
            subtitleWatchTooOne="1992 | 2h 37m"
            subtitleWatchTooTwo="2018 | 2h 10m"
            subtitleWatchTooThree="2022 | 2h 56m"
            subtitleWatchTooFour="2019 | 2h 2m"
        />
    )
}