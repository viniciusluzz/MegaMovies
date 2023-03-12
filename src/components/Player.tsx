import { Download, Queue, Timer } from "phosphor-react";
import { Player, Youtube, DefaultUi, DefaultControls } from '@vime/react';
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import '@vime/core/themes/default.css';
import { useState } from "react";

interface playerProps {
    titleVideo: string;
    sinopse: string;
    videoId: string;
    temporadas: any;
    slugPlayerFolder: string;
    slugPlayerOne: string;
    slugPlayerTwo: string;
    slugPlayerThree: string;
    slugPlayerFour: string;
    featuresTimer: string;
    featuresYear: string;
    featuresAge: string;
    featuresCountry: string;
    featuresCategory: string;
    srcActorOne: string;
    srcActorTwo: string;
    srcActorThree: string;
    nameActorOne: string;
    nameActorTwo: string;
    nameActorThree: string;
    subnameActorOne: string;
    subnameActorTwo: string;
    subnameActorThree: string;
    srcWatchTooOne: string;
    srcWatchTooTwo: string;
    srcWatchTooThree: string;
    srcWatchTooFour: string;
    titleWatchTooOne: string;
    titleWatchTooTwo: string;
    titleWatchTooThree: string;
    titleWatchTooFour: string;
    subtitleWatchTooOne: string;
    subtitleWatchTooTwo: string;
    subtitleWatchTooThree: string;
    subtitleWatchTooFour: string;
}

export function PlayerPage(props: playerProps) {
    const { sl } = useParams<{ sl: string }>()
    const [open, setOpen] = useState(false)

    return (
        <aside className="flex-1">
            <div className="flex justify-center bg-gray-700">
                <div className="w-full h-full max-w-[1100px] max-h-[60vh] aspect-video">
                    <Player>
                        <Youtube videoId={props.videoId} />
                        <DefaultUi noControls>
                            <DefaultControls hideOnMouseLeave activeDuration={2000} />
                        </DefaultUi>
                    </Player>
                </div>
            </div>
            <div className="bg-gray-700">
                <div className="flex py-8 mx-auto max-w-[1100px] bg-gray-800 md:px-8 ms:px-4">
                    <div className="flex flex-col gap-4">
                        <strong className="text-gray-200 md:text-4xl font-bold ms:text-xl">
                            {props.titleVideo}
                        </strong>
                        <div className="flex md:gap-3 text-gray-300 md:text-base ms:text-xs ms:leading-3 ms:gap-1">
                            <span className="flex justify-center items-center gap-2 p-2 text-orange-300 border border-orange-300 rounded-xl">
                                <Timer size={24} />
                                {props.featuresTimer}
                            </span>
                            <span className="flex p-2 justify-center items-center">
                                {props.featuresYear}
                            </span>
                            <span className="flex p-2 text-orange-300 border border-orange-300 rounded-xl justify-center items-center">
                                {props.featuresAge}
                            </span>
                            <span className="flex p-2 text-orange-300 border border-orange-300 rounded-xl justify-center items-center">
                                {props.featuresCountry}
                            </span>
                            <span className="flex p-2 text-orange-300 border border-orange-300 rounded-xl justify-center items-center ms:hidden mm:flex">
                                {props.featuresCategory}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center flex-col md:gap-3 md:px-8 pb-8 mx-auto max-w-[1100px] bg-gray-800 ms:gap-2 ms:px-4">
                    <button className="flex w-full justify-center items-center p-2 gap-1 text-2xl font-bold text-gray-200 rounded-3xl bg-gradient-to-br from-orange-600 to-orange-500 hover:bg-gradient-to-b hover:from-orange-500 hover:to-orange-500 cursor-pointer transition-colors md:text-xl ms:text-base">
                        <span className="ms:flex md:hidden">
                            <Download size={25} />
                        </span>
                        <span className="ms:hidden md:flex">
                            <Download size={32} />
                        </span>
                        Download
                    </button>
                    <span
                        className={`flex w-full justify-center items-center p-2 gap-1 text-2xl font-bold text-gray-200 ${sl === "movies" ? "hidden" : "flex"} ${open ? "text-orange-500" : "text-gray-200"} rounded-3xl ${open ? "bg-gray-400" : "bg-gray-500"} hover:bg-gray-400 cursor-pointer transition-colors duration-500 md:text-xl ms:text-base`}
                        onClick={() => setOpen(!open)}
                    >
                        <div className={`ms:hidden md:flex ${open ? "rotate-180" : "rotate-0"} duration-500`}>
                            <Queue size={32} />
                        </div>
                        <div className={`ms:flex md:hidden ${open ? "rotate-180" : "rotate-0"} duration-500`}>
                            <Queue size={25} />
                        </div>
                        Temporadas
                    </span>
                    <button className={`flex ${open ? "flex" : "hidden"} duration-500`}>
                        {props.temporadas}
                    </button>
                </div>
                <div className="flex justify-between md:gap-10 md:px-8 mx-auto max-w-[1100px] border-t-2 pt-8 border-gray-500 bg-gray-800 ms:px-4">
                    <div className="flex md:w-3/5 flex-col md:gap-4 ms:gap-2 ms:w-2/5">
                        <span className="text-gray-200 md:text-2xl font-bold ms:text-xl">
                            Sinopse
                        </span>
                        <span className="text-gray-300 text-justify md:text-sm ms:text-xs">
                            {props.sinopse}
                        </span>
                    </div>
                    <main className="flex flex-col w-auto gap-3">
                        <span className="flex w-full justify-center text-gray-200 md:text-2xl font-bold ms:text-xl">
                            Atores
                        </span>
                        <div className="flex w-full justify-end md:gap-2 ms:gap-0">
                            <div className="flex flex-col gap-1 items-center">
                                <img className="md:w-[65px] md:h-[65px] rounded-full ms:w-11 ms:h-11"
                                    src={props.srcActorOne}
                                />
                                <div className="flex flex-col items-center text-center ms:w-2/3">
                                    <span className="text-gray-200 text-sm font-bold md:text-sm ms:text-[10px] ms:leading-3">
                                        {props.nameActorOne}
                                    </span>
                                    <span className="text-gray-300 text-xs md:text-xs ms:text-[10px]">
                                        {props.subnameActorOne}
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1 items-center">
                                <img className="md:w-[65px] md:h-[65px] rounded-full ms:w-11 ms:h-11"
                                    src={props.srcActorTwo}
                                />
                                <div className="flex flex-col items-center text-center ms:w-2/3">
                                    <span className="text-gray-200 text-sm font-bold md:text-sm ms:text-[10px] ms:leading-3">
                                        {props.nameActorTwo}
                                    </span>
                                    <span className="text-gray-300 text-xs md:text-xs ms:text-[10px]">
                                        {props.subnameActorTwo}
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1 items-center ms:hidden mm:flex">
                                <img className="md:w-[65px] md:h-[65px] rounded-full ms:w-11 ms:h-11"
                                    src={props.srcActorThree}
                                />
                                <div className="flex flex-col items-center text-center ms:w-2/3">
                                    <span className="text-gray-200 text-sm font-bold md:text-sm ms:text-[10px] ms:leading-3">
                                        {props.nameActorThree}
                                    </span>
                                    <span className="text-gray-300 text-xs md:text-xs ms:text-[10px]">
                                        {props.subnameActorThree}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
                <div className="flex flex-col md:px-8 py-8 md:gap-7 mx-auto max-w-[1100px] bg-gray-800 ms:gap-4 ms:px-4">
                    <span className="text-gray-200 md:text-2xl font-bold ms:text-xl">
                        Assista também
                    </span>
                    <div className="flex md:justify-between md:gap-0 ms:gap-5 mm:gap-2">
                        <Link to={`/${props.slugPlayerFolder}/${props.slugPlayerOne}`} className="flex flex-col lg:gap-4 ms:gap-2 bg-gray-500 rounded-xl transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-500 hover:bg-gray-400 hover:cursor-pointer">
                            <img className="lg:w-[240px] lg:h-[280px] md:w-[160px] md:h-[200px] rounded-tl-2xl rounded-tr-2xl ms:w-[130px] ms:h-[160px] mm:w-[110px] mm:h-[145px] ml:w-[130px] ml:h-[160px]"
                                src={props.srcWatchTooOne}
                            />
                            <div className="flex flex-col lg:ml-4 lg:mb-4 ms:ml-2 ms:mb-2">
                                <span className="lg:text-xl md:text-base ms:text-sm text-gray-200 font-bold mm:text-xs ml:text-sm">
                                    {props.titleWatchTooOne}
                                </span>
                                <span className="lg:text-base md:text-sm ms:text-xs text-gray-300 mm:text-[10px] mm:leading-3 ml:text-xs">
                                    {props.subtitleWatchTooOne}
                                </span>
                            </div>
                        </Link>
                        <Link to={`/${props.slugPlayerFolder}/${props.slugPlayerTwo}`} className="flex flex-col lg:gap-4 ms:gap-2 bg-gray-500 rounded-xl transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-500 hover:bg-gray-400 hover:cursor-pointer">
                            <img className="lg:w-[240px] lg:h-[280px] md:w-[160px] md:h-[200px] rounded-tl-2xl rounded-tr-2xl ms:w-[130px] ms:h-[160px] mm:w-[110px] mm:h-[145px] ml:w-[130px] ml:h-[160px]"
                                src={props.srcWatchTooTwo}
                            />
                            <div className="flex flex-col lg:ml-4 lg:mb-4 ms:ml-2 ms:mb-2">
                                <span className="lg:text-xl md:text-base ms:text-sm text-gray-200 font-bold mm:text-xs ml:text-sm">
                                    {props.titleWatchTooTwo}
                                </span>
                                <span className="lg:text-base md:text-sm ms:text-xs text-gray-300 mm:text-[10px] mm:leading-3 ml:text-xs">
                                    {props.subtitleWatchTooTwo}
                                </span>
                            </div>
                        </Link>
                        <Link to={`/${props.slugPlayerFolder}/${props.slugPlayerThree}`} className="flex flex-col lg:gap-4 ms:gap-2 bg-gray-500 rounded-xl transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-500 hover:bg-gray-400 hover:cursor-pointer ms:hidden mm:flex">
                            <img className="lg:w-[240px] lg:h-[280px] md:w-[160px] md:h-[200px] rounded-tl-2xl rounded-tr-2xl ms:w-[130px] ms:h-[160px] mm:w-[110px] mm:h-[145px] ml:w-[130px] ml:h-[160px]"
                                src={props.srcWatchTooThree}
                            />
                            <div className="flex flex-col lg:ml-4 lg:mb-4 ms:ml-2 ms:mb-2">
                                <span className="lg:text-xl md:text-base ms:text-sm text-gray-200 font-bold mm:text-xs ml:text-sm">
                                    {props.titleWatchTooThree}
                                </span>
                                <span className="lg:text-base md:text-sm ms:text-xs text-gray-300 mm:text-[10px] mm:leading-3 ml:text-xs">
                                    {props.subtitleWatchTooThree}
                                </span>
                            </div>
                        </Link>
                        <Link to={`/${props.slugPlayerFolder}/${props.slugPlayerFour}`} className="flex flex-col lg:gap-4 ms:gap-2 bg-gray-500 rounded-xl transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-500 hover:bg-gray-400 hover:cursor-pointer ms:hidden md:flex">
                            <img className="lg:w-[240px] lg:h-[280px] md:w-[160px] md:h-[200px] rounded-tl-2xl rounded-tr-2xl ms:w-[130px] ms:h-[160px]"
                                src={props.srcWatchTooFour}
                            />
                            <div className="flex flex-col lg:ml-4 lg:mb-4 ms:ml-2 ms:mb-2">
                                <span className="lg:text-xl md:text-base text-gray-200 font-bold">
                                    {props.titleWatchTooFour}
                                </span>
                                <span className="lg:text-base md:text-sm text-gray-300">
                                    {props.subtitleWatchTooFour}
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </aside>
    )
}