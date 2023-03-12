
import { FolderMovies } from "./folderMovies";
import CapaBlackAdan from "../vetores/Capa/black_adan.jpg"
import CapaScentofaWoman from "../vetores/Capa/Scent_of_a_Woman.jpg"
import CapaTheBatman from "../vetores/Capa/The_Batman.jpg"
import CapaBreakingBad from "../vetores/Capa/breaking-bad-capa.jpg"
import CapaTheBoys from "../vetores/Capa/the-boys-capa.jpg"
import CapaGot from "../vetores/Capa/got-capa.jpg"

export function DashboardRecent() {
    return (
        <aside className="flex-1">
            <div className="flex flex-col lg:mx-8 md:mt-32 md:mx-6 ml:mx-3 mm:mx-4 ms:mt-28 ms:mx-1">
                <div className="flex lg:mb-8 ms:mb-5">
                    <span className="lg:text-2xl font-semibold text-gray-200 ms:text-xl">
                        RECENT
                    </span>
                </div>
                <div className="flex flex-col lg:mb-8 md:gap-5 ms:hidden md:flex">
                    <div className="flex lg:mb-8 md:mb-5 md:gap-5">
                        <FolderMovies
                            location="black-adan"
                            locationOne="movies"
                            srcImg={CapaBlackAdan}
                            title="Adão Negro"
                            subtitle="2022 | 2h 5m"
                        />
                        <FolderMovies
                            location="breaking-bad"
                            locationOne="series"
                            srcImg={CapaBreakingBad}
                            title="Breaking Bad"
                            subtitle="2008 | 5 Temp."
                        />
                        <FolderMovies
                            location="scent_of_a_woman"
                            locationOne="movies"
                            srcImg={CapaScentofaWoman}
                            title="Scent of a Woman"
                            subtitle="1992 | 2h 37m"
                        />
                        <FolderMovies
                            location="the-boys"
                            locationOne="series"
                            srcImg={CapaTheBoys}
                            title="The Boys"
                            subtitle="2019 | 3 Temp."
                        />
                        <FolderMovies
                            location="the-batman"
                            locationOne="movies"
                            srcImg={CapaTheBatman}
                            title="The Batman"
                            subtitle="2022 | 2h 56m"
                        />
                    </div>
                    <div className="flex gap-10 mb-10">
                        <FolderMovies
                            location="got"
                            locationOne="series"
                            srcImg={CapaGot}
                            title="Game of Thrones"
                            subtitle="2011 | 8 Temp."
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
                        location="breaking-bad"
                        locationOne="series"
                        srcImg={CapaBreakingBad}
                        title="Breaking Bad"
                        subtitle="2008 | 5 Temp."
                    />

                    <FolderMovies
                        location="the-boys"
                        locationOne="series"
                        srcImg={CapaTheBoys}
                        title="The Boys"
                        subtitle="2019 | 3 Temp."
                    />
                </div>
                <div className="flex gap-10 mb-10 md:gap-5 ms:mb-5 ms:gap-2 ms:flex md:hidden">
                    <FolderMovies
                        location="the-batman"
                        srcImg={CapaTheBatman}
                        locationOne="movies"
                        title="The Batman"
                        subtitle="2022 | 2h 56m"
                    />
                    <FolderMovies
                        location="scent_of_a_woman"
                        locationOne="movies"
                        srcImg={CapaScentofaWoman}
                        title="Scent of a Woman"
                        subtitle="1992 | 2h 37m"
                    />
                    <FolderMovies
                        location="got"
                        locationOne="series"
                        srcImg={CapaGot}
                        title="Game of Thrones"
                        subtitle="2011 | 8 Temp."
                    />
                </div>
            </div>
        </aside>
    )
}