
import { SidebarHome } from "../components/SidebarHome";
import { List, MagnifyingGlass, X } from "phosphor-react";
import Logo from "../vetores/logo.png";
import LogoSimples from "../vetores/logo_simples.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export function Help() {
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState('');

    return (
        <aside className="flex flex-col bg-gray-800 min-h-screen">
            <header className="flex fixed w-full items-center ms:h-24 ms:px-2 ms:gap-2 bg-gray-700">
                <span className="flex gap-5 md:ml-3 w-[400px] md:w-[200px] ms:w-20 ms:gap-1">
                    <div
                        className="flex rounded-full justify-center items-center text-gray-200 hover:text-gray-100 transition-colors cursor-pointer"
                        onClick={() => setOpen(!open)}
                    >
                        <div className={`${open ? "flex" : "hidden"}`}>
                            <X size={35} />
                        </div>
                        <div className={`${open ? "hidden" : "flex"}`}>
                            <List size={35} />
                        </div>
                    </div>
                    <div className="ms:hidden md:flex">
                        <img className="md:w-[200px] md:h-[60px] ms:w-[80px] ms:h-[50px]"
                            src={Logo}
                        />
                    </div>
                    <div className="ms:flex md:hidden">
                        <img className="ms:w-10 ms:h-10"
                            src={LogoSimples}
                        />
                    </div>
                </span>
                <span className="flex flex-1 w-full justify-center items-center md:mr-3 md:gap-2 ms:gap-2">
                    <input
                        type="text"
                        placeholder="Pesquisar por nome ou título"
                        className="rounded-3xl outline-none border-2 border-gray-400 bg-gray-700 text-gray-200 text-xl placeholder-gray-300 hover:bg-gray-400 focus-within:bg-gray-400 transition-colors md:h-[50px] md:text-base ms:w-full ms:h-12 ms:px-2 ms:text-base"
                        onChange={e => setSearch(e.target.value)}
                    />
                    <Link to={`/search/${search}`}>
                        <button
                            className="flex justify-center items-center h-[60px] w-full px-3 rounded-full border-2 border-gray-200 text-gray-100 placeholder-gray-200 bg-gradient-to-t from-orange-500 to-orange-600 hover:bg-gradient-to-t hover:from-orange-500 hover:to-orange-500 transition-colors md:h-[50px] ms:w-12 ms:h-12"
                        >
                            <div className="ms:hidden md:flex">
                                <MagnifyingGlass size={32} />
                            </div>
                            <div className="ms:flex md:hidden">
                                <MagnifyingGlass size={28} />
                            </div>
                        </button>
                    </Link>
                </span>
            </header>
            <main className="flex flex-1">
                <SidebarHome
                    open={open}
                    markHome="bg-gray-700"
                    markRecent="bg-gray-700"
                    markDowloaded="bg-gray-700"
                    markBookmark="bg-gray-700"
                    markHelp="bg-orange-500"
                    markLogOut="bg-gray-700"
                    markSettings="bg-gray-700"
                    textColorHome="text-gray-300"
                    textColorBookmark="text-gray-300"
                    textColorDowloaded="text-gray-300"
                    textColorHelp="text-orange-500"
                    textColorRecent="text-gray-300"
                    textColorSettings="text-gray-300"
                    textColorLogOut="text-gray-300"
                    BgColorHome="bg-gray-700"
                    BgColorBookmark="bg-gray-700"
                    BgColorDowloaded="bg-gray-700"
                    BgColorHelp="bg-gray-400"
                    BgColorRecent="bg-gray-700"
                    BgColorSettings="bg-gray-700"
                    BgColorLogOut="bg-gray-700"
                />
                <div className="flex flex-col mx-16 md:mt-32 ms:mx-10 ms:mt-28">
                    <div className="flex flex-col gap-2 w-full justify-between items-start">
                        <span className="text-2xl font-semibold text-gray-200 ms:text-lg">
                            AJUDA?
                        </span>
                        <span className="text-lg text-gray-200 ms:text-base">
                            Mande uma mensagem no nosso email: megafilmes@gmail.com
                        </span>
                    </div>
                </div>
            </main>
        </aside>
    )
}