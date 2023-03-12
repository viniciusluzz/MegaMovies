import { Clock, FilmSlate, Gear, House, Info, Popcorn, SignOut } from "phosphor-react";
import { Link } from "react-router-dom";

interface HomeSidebar {
    open: any;
    markHome: string;
    markRecent: string;
    markDowloaded: string;
    markBookmark: string;
    markHelp: string;
    markSettings: string;
    markLogOut: string;
    textColorHome: string;
    textColorRecent: string;
    textColorDowloaded: string;
    textColorBookmark: string;
    textColorHelp: string;
    textColorSettings: string;
    textColorLogOut: string;
    BgColorHome: string;
    BgColorRecent: string;
    BgColorDowloaded: string;
    BgColorBookmark: string;
    BgColorHelp: string;
    BgColorSettings: string;
    BgColorLogOut: string;
}

export function SidebarHome(props: HomeSidebar) {
    return (
        <aside className="flex fixed mt-24">
            <div className={`min-h-screen bg-gray-700 duration-500 ${props.open ? "md:w-[400px]" : "md:w-0"} ${props.open ? "ms:w-80" : "ms:w-0"}`}>
                <div className={`${props.open ? "flex" : "hidden"} flex-col`}>
                    <div className="flex md:gap-5 flex-col w-full md:mt-10 ms:mt-5 ms:gap-1">
                        <span className="font-bold md:text-xl text-gray-200 md:ml-10 ms:ml-8 ms:text-lg">
                            MENU
                        </span>
                        <span className="flex flex-col ms:gap-1">
                            <div className="flex justify-between">
                                <span className={`${props.markHome} rounded-2xl ms:w-[10px]`}></span>
                                <Link to={`/`} className={`flex items-center md:pl-5 ${props.textColorHome} ${props.BgColorHome} rounded-l-2xl hover:bg-gray-400 transition-colors hover:cursor-pointer md:w-[380px] md:py-3 md:gap-5 md:text-lg ms:w-[300px] ms:py-2 ms:pl-3 ms:gap-2 ms:text-base`}>
                                    <House size={25} />
                                    Home
                                </Link>
                            </div>
                            <div className="flex justify-between">
                                <span className={`${props.markRecent} rounded-2xl ms:w-[10px]`}></span>
                                <Link to={`/recent`} className={`md:pl-5 items-center rounded-l-2xl flex ${props.textColorRecent} ${props.BgColorRecent} hover:bg-gray-400 transition-colors hover:cursor-pointer md:w-[380px] md:py-3 md:gap-5 md:text-lg ms:w-[300px] ms:py-2 ms:pl-3 ms:gap-2 ms:text-base`}>
                                    <Clock size={25} />
                                    Recent
                                </Link>
                            </div>
                        </span>
                    </div>
                    <div className="flex md:gap-5 flex-col mt-10 w-full ms:mt-5 ms:gap-1">
                        <span className="font-bold md:text-xl text-gray-200 md:ml-10 ms:ml-8 ms:text-lg">
                            LIBRARY
                        </span>
                        <span className="flex flex-col ms:gap-1">
                            <div className="flex justify-between">
                                <span className={`${props.markDowloaded} rounded-2xl ms:w-[10px]`}></span>
                                <Link to={`/movies`} className={`flex items-center md:pl-5 ${props.textColorDowloaded} ${props.BgColorDowloaded} rounded-l-2xl hover:bg-gray-400 transition-colors hover:cursor-pointer md:w-[380px] md:py-3 md:gap-5 md:text-lg ms:w-[300px] ms:py-2 ms:pl-3 ms:gap-2 ms:text-base`}>
                                    <Popcorn size={25} />
                                    Movies
                                </Link>
                            </div>
                            <div className="flex justify-between">
                                <span className={`${props.markBookmark} rounded-2xl ms:w-[10px]`}></span>
                                <Link to={`/series`} className={`md:pl-5 items-center rounded-l-2xl flex ${props.textColorBookmark} ${props.BgColorBookmark} hover:bg-gray-400 transition-colors hover:cursor-pointer md:w-[380px] md:py-3 md:gap-5 md:text-lg ms:w-[300px] ms:py-2 ms:pl-3 ms:gap-2 ms:text-base`}>
                                    <FilmSlate size={25} />
                                    Series
                                </Link>
                            </div>
                        </span>
                    </div>
                    <div className="flex md:gap-5 flex-col mt-10 w-full ms:mt-5 ms:gap-1">
                        <span className="font-bold md:text-xl text-gray-200 md:ml-10 ms:ml-8 ms:text-lg">
                            GENERAL
                        </span>
                        <span className="flex flex-col ms:gap-1">
                            <div className="flex justify-between">
                                <span className={`${props.markHelp} rounded-2xl ms:w-[10px]`}></span>
                                <Link to={`/help`} className={`flex items-center text-lg md:pl-5 ${props.textColorHelp} ${props.BgColorHelp} rounded-l-2xl hover:bg-gray-400 transition-colors hover:cursor-pointer md:w-[380px] md:py-3 md:gap-5 md:text-lg ms:w-[300px] ms:py-2 ms:pl-3 ms:gap-2 ms:text-base`}>
                                    <Info size={25} />
                                    Help
                                </Link>
                            </div>
                            <div className="flex justify-between">
                                <span className={`${props.markSettings} rounded-2xl ms:w-[10px]`}></span>
                                <Link to={`/settings`} className={`md:pl-5 items-center rounded-l-2xl flex ${props.textColorSettings} ${props.BgColorSettings} hover:bg-gray-400 transition-colors hover:cursor-pointer md:w-[380px] md:py-3 md:gap-5 md:text-lg ms:w-[300px] ms:py-2 ms:pl-3 ms:gap-2 ms:text-base`}>
                                    <Gear size={25} />
                                    Settings
                                </Link>
                            </div>
                            <div className="flex justify-between">
                                <span className={`${props.markLogOut} rounded-2xl ms:w-[10px]`}></span>
                                <Link to={`/logout`} className={`md:pl-5 items-center rounded-l-2xl flex ${props.textColorLogOut} ${props.BgColorLogOut} hover:bg-gray-400 transition-colors hover:cursor-pointer md:w-[380px] md:py-3 md:gap-5 md:text-lg ms:w-[300px] ms:py-2 ms:pl-3 ms:gap-2 ms:text-base`}>
                                    <SignOut size={25} />
                                    Log Out
                                </Link>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </aside>
    )
}