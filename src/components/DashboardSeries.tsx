
import { FolderMovies } from "./folderMovies";
import CapaBreakingBad from "../vetores/Capa/breaking-bad-capa.jpg"
import CapaBetterCallSoul from "../vetores/Capa/better-call-soul-capa.jpg"
import CapaStrangerThings from "../vetores/Capa/stranger-things-capa.jpg"
import CapaTheBoys from "../vetores/Capa/the-boys-capa.jpg"
import CapaGot from "../vetores/Capa/got-capa.jpg"

export function DashboardSeries() {
    return (
        <aside className="flex-1">
            <div className="flex flex-col lg:mx-8 md:mt-32 ml:mx-6 mm:mx-4 ms:mt-28 ms:mx-1">
                <div className="flex lg:mb-8 ms:mb-5">
                    <span className="lg:text-2xl font-semibold text-gray-200 ms:text-xl">
                        SERIES
                    </span>
                </div>
                <div className="flex lg:gap-5 md:flex md:mb-5 md:gap-3 ms:hidden">
                    <FolderMovies
                        location="breaking-bad"
                        locationOne="series"
                        srcImg={CapaBreakingBad}
                        title="Breaking Bad"
                        subtitle="2008 | 5 Temp."
                    />
                    <FolderMovies
                        location="better-call-soul"
                        locationOne="series"
                        srcImg={CapaBetterCallSoul}
                        title="Better Call Soul"
                        subtitle="2013 | 6 Temp."
                    />
                    <FolderMovies
                        location="stranger-things"
                        locationOne="series"
                        srcImg={CapaStrangerThings}
                        title="Stranger Things"
                        subtitle="2016 | 4 Temp."
                    />
                    <FolderMovies
                        location="got"
                        locationOne="series"
                        srcImg={CapaGot}
                        title="Game of Thrones"
                        subtitle="2011 | 8 Temp."
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
                    <FolderMovies
                        location="stranger-things"
                        locationOne="series"
                        srcImg={CapaStrangerThings}
                        title="Stranger Things"
                        subtitle="2016 | 4 Temp."
                    />
                </div>
                <div className="flex gap-10 mb-10 md:gap-5 ms:mb-5 ms:gap-2 ms:flex md:hidden">
                    <FolderMovies
                        location="got"
                        locationOne="series"
                        srcImg={CapaGot}
                        title="Game of Thrones"
                        subtitle="2011 | 8 Temp."
                    />
                    <FolderMovies
                        location="better-call-soul"
                        locationOne="series"
                        srcImg={CapaBetterCallSoul}
                        title="Better Call Saul"
                        subtitle="2013 | 6 Temp."
                    />
                </div>
            </div>
        </aside>
    )
}