import { ArrowRight, Play } from "phosphor-react";
import { FolderMovies } from "./folderMovies";
import CapaDestak from "../vetores/Capa/the_godfather.jpeg"
import CapaBlackAdan from "../vetores/Capa/black_adan.jpg"
import CapaGreenBook from "../vetores/Capa/Green_Book.jpg"
import CapaScentofaWoman from "../vetores/Capa/Scent_of_a_Woman.jpg"
import CapaIronMan from "../vetores/Capa/iron_man.jpg"
import CapaTheBatman from "../vetores/Capa/The_Batman.jpg"
import CapaJoker from "../vetores/Capa/Joker.jpg"
import CapaAquaman from "../vetores/Capa/Aquaman.jpg"
import CapaBreakingBad from "../vetores/Capa/breaking-bad-capa.jpg"
import CapaBetterCallSoul from "../vetores/Capa/better-call-soul-capa.jpg"
import CapaStrangerThings from "../vetores/Capa/stranger-things-capa.jpg"
import CapaTheBoys from "../vetores/Capa/the-boys-capa.jpg"
import CapaGot from "../vetores/Capa/got-capa.jpg"
import { Link } from "react-router-dom";


export function DashboardHome() {
    return (
        <aside className="flex-1">
            <div className="flex flex-col md:mb-10 md:mt-36 md:mx-10 mm:mb-10 mm:mx-5 ms:mx-3 ms:mt-32">
                <div className="flex justify-center items-center gap-8 lg:mb-8 w-full xl:h-[400px] lg:h-[350px] rounded-3xl bg-[url('/src/vetores/fundoGodfather.jpg')] md:mb-5 md:h-[300px] md:gap-4 ml:h-[250px] mm:h-[220px] ms:h-[190px] ms:mb-5 mm:gap-4 ms:gap-2">
                    <img
                        className="xl:w-[320px] xl:h-[350px] lg:w-[250px] lg:h-[300px] rounded-3xl md:w-[200px] md:h-[250px] ml:w-[150px] ml:h-[200px] mm:w-[120px] mm:h-[170px] ms:w-[100px] ms:h-[150px]"
                        src={CapaDestak}
                    />
                    <div className="flex flex-col justify-center w-full h-[300px] gap-3 md:gap-2 ms:h-[150px] ms:gap-2">
                        <div className="flex flex-col">
                            <span className="xl:text-6xl lg:text-5xl font-semibold text-gray-100 md:text-4xl mm:text-2xl ms:text-xl">
                                The Godfather
                            </span>
                            <span className="xl:text-3xl lg:text-2xl font-medium text-gray-100 md:text-xl mm:text-xs ms:text-[10px] ms:leading-3">
                                1972 | Crime/Drama | 2h 55m
                            </span>
                        </div>
                        <span className="text-gray-200 xl:text-xl xl:leading-7 xl:w-11/12 lg:text-xl lg:leading-5 md:text-base md:w-4/5 md:leading-none ml:text-[11px] mm:text-[9px] ms:text-[8.5px] ms:leading-3 ms:w-11/12">
                            Uma família mafiosa luta para estabelecer sua supremacia nos Estados Unidos depois da Segunda Guerra Mundial. Uma tentativa de assassinato deixa o chefão Vito Corleone incapacitado e força os filhos Michael e Sonny a assumir os negócios.
                        </span>
                        <Link to={`/movies/the-goodfather`}>
                            <button
                                className="flex items-center lg:text-lg justify-center lg:w-40 lg:h-16 gap-2 rounded-3xl text-gray-100 font-bold bg-gradient-to-t from-orange-500 to-orange-600 hover:bg-gradient-to-t hover:from-orange-500 hover:to-orange-500 shadow-md shadow-orange-500 transition-colors md:w-32 md:h-10 md:text-sm mm:text-xs mm:w-28 mm:h-8 ms:w-24 ms:h-6 ms:text-[11px] ms:leading-3"
                            >
                                <div className="ms:flex md:hidden">
                                    <Play size={18} />
                                </div>
                                <div className="ms:hidden md:flex lg:hidden">
                                    <Play size={30} />
                                </div>
                                <div className="ms:hidden lg:flex">
                                    <Play size={35} />
                                </div>
                                Watch Now
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="flex w-full justify-between items-center lg:mb-8 ms:mb-5">
                    <span className="lg:text-2xl font-semibold text-gray-200 md:text-xl ms:text-base">
                        MOVIES
                    </span>
                    <Link to={`/movies`} className="flex justify-center items-center lg:gap-2 lg:text-base lg:w-32 lg:h-10 bg-gray-700 border-2 border-gray-400 text-gray-200 rounded-3xl hover:bg-gray-400 transition-colors md:text-sm md:w-28 md:h-8 ms:text-xs ms:w-24 ms:h-8">
                        Ver todos
                        <div className="ms:hidden lg:flex">
                            <ArrowRight size={27} />
                        </div>
                        <div className="ms:hidden md:flex lg:hidden">
                            <ArrowRight size={22} />
                        </div>
                        <div className="ms:flex md:hidden">
                            <ArrowRight size={15} />
                        </div>
                    </Link>
                </div>
                <div className="2xl:justify-between lg:gap-5 lg:mb-8 md:mb-5 md:gap-3 md:flex ms:hidden">
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
                    <div className="md:hidden">
                        <FolderMovies
                            location="scent_of_a_woman"
                            locationOne="movies"
                            srcImg={CapaScentofaWoman}
                            title="Scent of a Woman"
                            subtitle="1992 | 2h 37m"
                        />
                    </div>
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
                    <FolderMovies
                        location="joker"
                        locationOne="movies"
                        srcImg={CapaJoker}
                        title="Coringa"
                        subtitle="2019 | 2h 2m"
                    />
                </div>
                <div className="gap-10 mb-10 md:mb-5 md:gap-3 md:hidden mm:gap-3 ms:flex ms:mb-5 ms:gap-1">
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
                        location="iron-man"
                        locationOne="movies"
                        srcImg={CapaIronMan}
                        title="Iron Man"
                        subtitle="2008 | 2h 6m"
                    />
                </div>
                <div className="gap-10 mb-10 md:mb-5 md:gap-3 md:hidden mm:gap-3 ms:flex ms:mb-5 ms:gap-1">
                    <FolderMovies
                        location="the-batman"
                        locationOne="movies"
                        srcImg={CapaTheBatman}
                        title="The Batman"
                        subtitle="2022 | 2h 56m"
                    />
                    <FolderMovies
                        location="joker"
                        locationOne="movies"
                        srcImg={CapaJoker}
                        title="Coringa"
                        subtitle="2019 | 2h 2m"
                    />
                    <FolderMovies
                        location="aquaman"
                        locationOne="movies"
                        srcImg={CapaAquaman}
                        title="Aquaman"
                        subtitle="2018 | 2h 23m"
                    />
                </div>
                <div className="flex w-full justify-between items-center lg:mb-8 md:mb-5 ms:mb-5">
                    <span className="lg:text-2xl font-semibold text-gray-200 md:text-xl ms:text-base">
                        SERIES
                    </span>
                    <Link to={`/series`} className="flex justify-center items-center lg:gap-2 lg:text-base lg:w-32 lg:h-10 bg-gray-700 border-2 border-gray-400 text-gray-200 rounded-3xl hover:bg-gray-400 transition-colors md:text-sm md:w-28 md:h-8 ms:text-xs ms:w-24 ms:h-8">
                        Ver todos
                        <div className="ms:hidden lg:flex">
                            <ArrowRight size={27} />
                        </div>
                        <div className="ms:hidden md:flex lg:hidden">
                            <ArrowRight size={22} />
                        </div>
                        <div className="ms:flex md:hidden">
                            <ArrowRight size={15} />
                        </div>
                    </Link>
                </div>
                <div className="flex 2xl:justify-between lg:gap-5 md:gap-3 ms:hidden md:flex">
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
                <div className="gap-10 mb-10 md:mb-5 md:gap-3 md:hidden mm:gap-3 ms:flex ms:mb-5 ms:gap-1">
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
                        title="Better Call Saul"
                        subtitle="2013 | 6 Temp."
                    />
                    <FolderMovies
                        location="stranger-things"
                        locationOne="series"
                        srcImg={CapaStrangerThings}
                        title="Stranger Things"
                        subtitle="2016 | 4 Temp."
                    />
                </div>
                <div className="gap-10 mb-10 md:mb-5 md:gap-3 md:hidden mm:gap-3 ms:flex ms:mb-5 ms:gap-1">
                    <FolderMovies
                        location="got"
                        locationOne="series"
                        srcImg={CapaGot}
                        title="Got"
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
            </div>
        </aside>
    )
}