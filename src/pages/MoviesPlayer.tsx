import { Header } from "../components/Header";
import { useParams } from 'react-router-dom';
import { PlayerBlackAdan } from "../components/Players/Filmes/Adão Negro/BlackAdan";
import { PlayerJoker } from "../components/Players/Filmes/Coringa/joker";
import { PlayerTheBatman } from "../components/Players/Filmes/The Batman/TheBatman";
import { PlayerAquaman } from "../components/Players/Filmes/Aquaman/Aquaman";
import { PlayerIronMan } from "../components/Players/Filmes/Homem De Ferro/IronMan";
import { PlayerGreenBook } from "../components/Players/Filmes/Green Book/GreenBook";
import { PlayerScentOfAWoman } from "../components/Players/Filmes/Perfume de Mulher/Scent of a Woman";
import { PlayerTheGoodfather } from "../components/Players/Filmes/The GoodFather/TheGoodfather";

export function MoviesPlayer() {
    const { slug } = useParams<{ slug: string }>()
    return (
        <div className="bg-gray-500 flex flex-col min-h-screen">
                <Header />
            <main className="flex flex-1">
                {!slug ? <div className="flex-1"></div>
                    : slug === "black-adan" ? <PlayerBlackAdan />
                        : slug === "joker" ? <PlayerJoker />
                            : slug === "the-batman" ? <PlayerTheBatman />
                                : slug === "aquaman" ? <PlayerAquaman />
                                    : slug === "iron-man" ? <PlayerIronMan />
                                        : slug === "green-book" ? <PlayerGreenBook />
                                            : slug === "scent_of_a_woman" ? <PlayerScentOfAWoman />
                                                : slug === "the-goodfather" ? <PlayerTheGoodfather />
                                                    : ""}
            </main>
        </div>
    )
}
