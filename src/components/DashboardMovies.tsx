
import { FolderMovies } from "./folderMovies";
import CapaBlackAdan from "../vetores/Capa/black_adan.jpg"
import CapaGreenBook from "../vetores/Capa/Green_Book.jpg"
import CapaScentofaWoman from "../vetores/Capa/Scent_of_a_Woman.jpg"
import CapaIronMan from "../vetores/Capa/iron_man.jpg"
import CapaTheBatman from "../vetores/Capa/The_Batman.jpg"
import CapaJoker from "../vetores/Capa/Joker.jpg"
import CapaTheGoofather from "../vetores/Capa/the_godfather.jpeg"
import CapaAquaman from "../vetores/Capa/Aquaman.jpg"

export function DashboardMovies() {
    return (
        <aside className="flex-1">
            <div className="flex flex-col lg:mx-8 md:mt-32 ml:mx-6 mm:mx-4 ms:mt-28 ms:mx-1">
                <div className="flex lg:mb-8 ms:mb-5">
                    <span className="lg:text-2xl font-semibold text-gray-200 ms:text-xl">
                        MOVIES
                    </span>
                </div>
                <div className="flex flex-col md:flex md:mb-5 md:gap-3 ms:hidden">
                    <div className="flex md:flex lg:mb-8 md:mb-5 md:gap-5">
                        <FolderMovies
                            location="black-adan"
                            locationOne="movies"
                            srcImg={CapaBlackAdan}
                            title="Adão Negro"
                            subtitle="2022 | 2h 5m"
                        />
                        <FolderMovies
                            location="green-book"
                            locationOne="movies"
                            srcImg={CapaGreenBook}
                            title="Green Book"
                            subtitle="2018 | 2h 10m"
                        />
                        <FolderMovies
                            location="scent_of_a_woman"
                            locationOne="movies"
                            srcImg={CapaScentofaWoman}
                            title="Scent of a Woman"
                            subtitle="1992 | 2h 37m"
                        />
                        <FolderMovies
                            location="the-goodfather"
                            locationOne="movies"
                            srcImg={CapaTheGoofather}
                            title="The Godfather"
                            subtitle="1972 | 2h 55m"
                        />
                        <FolderMovies
                            location="iron-man"
                            locationOne="movies"
                            srcImg={CapaIronMan}
                            title="Iron Man"
                            subtitle="2008 | 2h 6m"
                        />
                    </div>
                    <div className="flex gap-10 md:flex lg:mb-8 md:mb-5 md:gap-5">
                        <FolderMovies
                            location="the-batman"
                            locationOne="movies"
                            srcImg={CapaTheBatman}
                            title="The Batman"
                            subtitle="2022 | 2h 56m"
                        />
                        <FolderMovies
                            location="aquaman"
                            locationOne="movies"
                            srcImg={CapaAquaman}
                            title="Aquaman"
                            subtitle="2018 | 2h 24m"
                        />
                        <FolderMovies
                            location="joker"
                            locationOne="movies"
                            srcImg={CapaJoker}
                            title="Coringa"
                            subtitle="2019 | 2h 2m"
                        />
                    </div>
                </div>
                <div className="flex gap-10 mb-10 md:gap-5 ms:mb-5 ms:gap-2 ms:flex md:hidden">
                    <FolderMovies
                        location="black-adan"
                        locationOne="movies"
                        srcImg={CapaBlackAdan}
                        title="Adão Negro"
                        subtitle="2022 | 2h 5m"
                    />
                    <FolderMovies
                        location="green-book"
                        locationOne="movies"
                        srcImg={CapaGreenBook}
                        title="Green Book"
                        subtitle="2018 | 2h 10m"
                    />
                    <FolderMovies
                        location="aquaman"
                        locationOne="movies"
                        srcImg={CapaAquaman}
                        title="Aquaman"
                        subtitle="2018 | 2h 24m"
                    />
                </div>
                <div className="flex gap-10 mb-10 md:gap-5 ms:mb-5 ms:gap-2 ms:flex md:hidden">
                    <FolderMovies
                        location="joker"
                        locationOne="movies"
                        srcImg={CapaJoker}
                        title="Coringa"
                        subtitle="2019 | 2h 2m"
                    />
                    <FolderMovies
                        location="iron-man"
                        locationOne="movies"
                        srcImg={CapaIronMan}
                        title="Iron Man"
                        subtitle="2008 | 2h 6m"
                    />
                    <FolderMovies
                        location="the-batman"
                        locationOne="movies"
                        srcImg={CapaTheBatman}
                        title="The Batman"
                        subtitle="2022 | 2h 56m"
                    />
                </div>
                <div className="flex gap-10 mb-10 md:gap-5 ms:mb-5 ms:gap-2 ms:flex md:hidden">
                    <FolderMovies
                        location="scent_of_a_woman"
                        locationOne="movies"
                        srcImg={CapaScentofaWoman}
                        title="Scent of a Woman"
                        subtitle="1992 | 2h 37m"
                    />

                    <FolderMovies
                        location="the-goodfather"
                        locationOne="movies"
                        srcImg={CapaTheGoofather}
                        title="The Godfather"
                        subtitle="1972 | 2h 55m"
                    />
                </div>
            </div>
        </aside>
    )
}