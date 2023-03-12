import { useParams } from "react-router-dom";
import { List, MagnifyingGlass, X } from "phosphor-react";
import Logo from "../../vetores/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

import LogoSimples from "../../vetores/logo_simples.png";
import CapaAquaman from "../../vetores/Capa/Aquaman.jpg";
import CapaBlackAdan from "../../vetores/Capa/black_adan.jpg";
import CapaJoker from "../../vetores/Capa/Joker.jpg";
import CapaTheBatman from "../../vetores/Capa/The_Batman.jpg";
import CapaTheGodFather from "../../vetores/Capa/the_godfather.jpeg";
import CapaBetterCallSoul from "../../vetores/Capa/better-call-soul-capa.jpg";
import CapaBreakingBad from "../../vetores/Capa/breaking-bad-capa.jpg";
import CapaGot from "../../vetores/Capa/got-capa.jpg";
import CapaGreenBook from "../../vetores/Capa/Green_Book.jpg";
import CapaIronMan from "../../vetores/Capa/iron_man.jpg";
import CapaScentofaWoman from "../../vetores/Capa/Scent_of_a_Woman.jpg";
import CapaStrangerThings from "../../vetores/Capa/stranger-things-capa.jpg";
import CapaTheBoys from "../../vetores/Capa/the-boys-capa.jpg";
import { SearchInvalid } from "../../components/DashboardSeach/SearchInvalid";
import { SidebarHome } from "../../components/SidebarHome";
import { Seach } from "../../components/DashboardSeach/Search";
import { FolderMovies } from "../../components/folderMovies";

export function Searching() {

  const { slug } = useParams<{ slug: string }>()
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
          markDowloaded="bg-orange-500"
          markBookmark="bg-gray-700"
          markHelp="bg-gray-700"
          markLogOut="bg-gray-700"
          markSettings="bg-gray-700"
          textColorHome="text-gray-300"
          textColorBookmark="text-gray-300"
          textColorDowloaded="text-orange-500"
          textColorHelp="text-gray-300"
          textColorRecent="text-gray-300"
          textColorSettings="text-gray-300"
          textColorLogOut="text-gray-300"
          BgColorHome="bg-gray-700"
          BgColorBookmark="bg-gray-700"
          BgColorDowloaded="bg-gray-400"
          BgColorHelp="bg-gray-700"
          BgColorRecent="bg-gray-700"
          BgColorSettings="bg-gray-700"
          BgColorLogOut="bg-gray-700"
        />
        {slug === "o poderoso chefao" ? <Seach folder={<FolderMovies locationOne="movies" location="the-goodfather" srcImg={CapaTheGodFather} title="The Godfather" subtitle="2018 | 2h 55m" />} />
          : slug === "o poderoso chefão" ? <Seach folder={<FolderMovies locationOne="movies" location="the-goodfather" srcImg={CapaTheGodFather} title="The Godfather" subtitle="2018 | 2h 55m" />} />
            : slug === "O poderoso chefão" ? <Seach folder={<FolderMovies locationOne="movies" location="the-goodfather" srcImg={CapaTheGodFather} title="The Godfather" subtitle="2018 | 2h 55m" />} />
              : slug === "O poderoso chefao" ? <Seach folder={<FolderMovies locationOne="movies" location="the-goodfather" srcImg={CapaTheGodFather} title="The Godfather" subtitle="2018 | 2h 55m" />} />
                : slug === "O PODEROSO CHEFÃO" ? <Seach folder={<FolderMovies locationOne="movies" location="the-goodfather" srcImg={CapaTheGodFather} title="The Godfather" subtitle="2018 | 2h 55m" />} />
                  : slug === "O PODEROSO CHEFAO" ? <Seach folder={<FolderMovies locationOne="movies" location="the-goodfather" srcImg={CapaTheGodFather} title="The Godfather" subtitle="2018 | 2h 55m" />} />
                    : slug === "THE GODFATHER" ? <Seach folder={<FolderMovies locationOne="movies" location="the-goodfather" srcImg={CapaTheGodFather} title="The Godfather" subtitle="2018 | 2h 55m" />} />
                      : slug === "the godfather" ? <Seach folder={<FolderMovies locationOne="movies" location="the-goodfather" srcImg={CapaTheGodFather} title="The Godfather" subtitle="2018 | 2h 55m" />} />
                        : slug === "The godfather" ? <Seach folder={<FolderMovies locationOne="movies" location="the-goodfather" srcImg={CapaTheGodFather} title="The Godfather" subtitle="2018 | 2h 55m" />} />
                          : slug === "Aquaman" ? <Seach folder={<FolderMovies locationOne="movies" location="aquaman" srcImg={CapaAquaman} title="Aquaman" subtitle="2018 | 2h 24m" />} />
                            : slug === "aquaman" ? <Seach folder={<FolderMovies locationOne="movies" location="aquaman" srcImg={CapaAquaman} title="Aquaman" subtitle="2018 | 2h 24m" />} />
                              : slug === "AQUAMAN" ? <Seach folder={<FolderMovies locationOne="movies" location="aquaman" srcImg={CapaAquaman} title="Aquaman" subtitle="2018 | 2h 24m" />} />
                                : slug === "adao negro" ? <Seach folder={<FolderMovies locationOne="movies" location="black-adan" srcImg={CapaBlackAdan} title="Adão Negro" subtitle="2022 | 2h 5m" />} />
                                  : slug === "adão negro" ? <Seach folder={<FolderMovies locationOne="movies" location="black-adan" srcImg={CapaBlackAdan} title="Adão Negro" subtitle="2022 | 2h 5m" />} />
                                    : slug === "Adão negro" ? <Seach folder={<FolderMovies locationOne="movies" location="black-adan" srcImg={CapaBlackAdan} title="Adão Negro" subtitle="2022 | 2h 5m" />} />
                                      : slug === "ADAO NEGRO" ? <Seach folder={<FolderMovies locationOne="movies" location="black-adan" srcImg={CapaBlackAdan} title="Adão Negro" subtitle="2022 | 2h 5m" />} />
                                        : slug === "ADÃO NEGRO" ? <Seach folder={<FolderMovies locationOne="movies" location="black-adan" srcImg={CapaBlackAdan} title="Adão Negro" subtitle="2022 | 2h 5m" />} />
                                          : slug === "black adan" ? <Seach folder={<FolderMovies locationOne="movies" location="black-adan" srcImg={CapaBlackAdan} title="Adão Negro" subtitle="2022 | 2h 5m" />} />
                                            : slug === "BLACK ADAN" ? <Seach folder={<FolderMovies locationOne="movies" location="black-adan" srcImg={CapaBlackAdan} title="Adão Negro" subtitle="2022 | 2h 5m" />} />
                                              : slug === "Joker" ? <Seach folder={<FolderMovies locationOne="movies" location="joker" srcImg={CapaJoker} title="Coringa" subtitle="2019 | 2h 2m" />} />
                                                : slug === "joker" ? <Seach folder={<FolderMovies locationOne="movies" location="joker" srcImg={CapaJoker} title="Coringa" subtitle="2019 | 2h 2m" />} />
                                                  : slug === "coringa" ? <Seach folder={<FolderMovies locationOne="movies" location="joker" srcImg={CapaJoker} title="Coringa" subtitle="2019 | 2h 2m" />} />
                                                    : slug === "Coringa" ? <Seach folder={<FolderMovies locationOne="movies" location="joker" srcImg={CapaJoker} title="Coringa" subtitle="2019 | 2h 2m" />} />
                                                      : slug === "The batman" ? <Seach folder={<FolderMovies locationOne="movies" location="the-batman" srcImg={CapaTheBatman} title="The Batman" subtitle="2022 | 2h 56m" />} />
                                                        : slug === "the batman" ? <Seach folder={<FolderMovies locationOne="movies" location="the-batman" srcImg={CapaTheBatman} title="The Batman" subtitle="2022 | 2h 56m" />} />
                                                          : slug === "THE BATMAN" ? <Seach folder={<FolderMovies locationOne="movies" location="the-batman" srcImg={CapaTheBatman} title="The Batman" subtitle="2022 | 2h 56m" />} />
                                                            : slug === "batman" ? <Seach folder={<FolderMovies locationOne="movies" location="the-batman" srcImg={CapaTheBatman} title="The Batman" subtitle="2022 | 2h 56m" />} />
                                                              : slug === "BATMAN" ? <Seach folder={<FolderMovies locationOne="movies" location="the-batman" srcImg={CapaTheBatman} title="The Batman" subtitle="2022 | 2h 56m" />} />
                                                                : slug === "green book" ? <Seach folder={<FolderMovies locationOne="movies" location="green-book" srcImg={CapaGreenBook} title="Green Book" subtitle="2018 | 2h 10m" />} />
                                                                  : slug === "Green book" ? <Seach folder={<FolderMovies locationOne="movies" location="green-book" srcImg={CapaGreenBook} title="Green Book" subtitle="2018 | 2h 10m" />} />
                                                                    : slug === "Green Book" ? <Seach folder={<FolderMovies locationOne="movies" location="green-book" srcImg={CapaGreenBook} title="Green Book" subtitle="2018 | 2h 10m" />} />
                                                                      : slug === "GREEN BOOK" ? <Seach folder={<FolderMovies locationOne="movies" location="green-book" srcImg={CapaGreenBook} title="Green Book" subtitle="2018 | 2h 10m" />} />
                                                                        : slug === "Iron man" ? <Seach folder={<FolderMovies locationOne="movies" location="iron-man" srcImg={CapaIronMan} title="Iron Man" subtitle="2008 | 2h 6m" />} />
                                                                          : slug === "IRON MAN" ? <Seach folder={<FolderMovies locationOne="movies" location="iron-man" srcImg={CapaIronMan} title="Iron Man" subtitle="2008 | 2h 6m" />} />
                                                                            : slug === "iron man" ? <Seach folder={<FolderMovies locationOne="movies" location="iron-man" srcImg={CapaIronMan} title="Iron Man" subtitle="2008 | 2h 6m" />} />
                                                                              : slug === "HOMEM DE FERRO" ? <Seach folder={<FolderMovies locationOne="movies" location="iron-man" srcImg={CapaIronMan} title="Iron Man" subtitle="2008 | 2h 6m" />} />
                                                                                : slug === "Homem de ferro" ? <Seach folder={<FolderMovies locationOne="movies" location="iron-man" srcImg={CapaIronMan} title="Iron Man" subtitle="2008 | 2h 6m" />} />
                                                                                  : slug === "homem de ferro" ? <Seach folder={<FolderMovies locationOne="movies" location="iron-man" srcImg={CapaIronMan} title="Iron Man" subtitle="2008 | 2h 6m" />} />
                                                                                    : slug === "perfume de mulher" ? <Seach folder={<FolderMovies locationOne="movies" location="scent_of_a_woman" srcImg={CapaScentofaWoman} title="Scent of a Woman" subtitle="1992 | 2h 37m" />} />
                                                                                      : slug === "Perfume de mulher" ? <Seach folder={<FolderMovies locationOne="movies" location="scent_of_a_woman" srcImg={CapaScentofaWoman} title="Scent of a Woman" subtitle="1992 | 2h 37m" />} />
                                                                                        : slug === "PERFUME DE MULHER" ? <Seach folder={<FolderMovies locationOne="movies" location="scent_of_a_woman" srcImg={CapaScentofaWoman} title="Scent of a Woman" subtitle="1992 | 2h 37m" />} />
                                                                                          : slug === "Breaking bad" ? <Seach folder={<FolderMovies locationOne="series" location="breaking-bad" srcImg={CapaBreakingBad} title="Breaking Bad" subtitle="2008 | 5 Temp." />} />
                                                                                            : slug === "BREAKING BAD" ? <Seach folder={<FolderMovies locationOne="series" location="breaking-bad" srcImg={CapaBreakingBad} title="Breaking Bad" subtitle="2008 | 5 Temp." />} />
                                                                                              : slug === "breaking bad" ? <Seach folder={<FolderMovies locationOne="series" location="breaking-bad" srcImg={CapaBreakingBad} title="Breaking Bad" subtitle="2008 | 5 Temp." />} />
                                                                                                : slug === "better call saul" ? <Seach folder={<FolderMovies locationOne="series" location="better-call-soul" srcImg={CapaBetterCallSoul} title="Better Call Saul" subtitle="2013 | 6 Temp." />} />
                                                                                                  : slug === "Better call saul" ? <Seach folder={<FolderMovies locationOne="series" location="better-call-soul" srcImg={CapaBetterCallSoul} title="Better Call Saul" subtitle="2013 | 6 Temp." />} />
                                                                                                    : slug === "BETTER CALL SAUL" ? <Seach folder={<FolderMovies locationOne="series" location="better-call-soul" srcImg={CapaBetterCallSoul} title="Better Call Saul" subtitle="2013 | 6 Temp." />} />
                                                                                                      : slug === "the boys" ? <Seach folder={<FolderMovies locationOne="series" location="the-boys" srcImg={CapaTheBoys} title="The Boys" subtitle="2019 | 3 Temp." />} />
                                                                                                        : slug === "The boys" ? <Seach folder={<FolderMovies locationOne="series" location="the-boys" srcImg={CapaTheBoys} title="The Boys" subtitle="2019 | 3 Temp." />} />
                                                                                                          : slug === "THE BOYS" ? <Seach folder={<FolderMovies locationOne="series" location="the-boys" srcImg={CapaTheBoys} title="The Boys" subtitle="2019 | 3 Temp." />} />
                                                                                                            : slug === "Got" ? <Seach folder={<FolderMovies locationOne="series" location="got" srcImg={CapaGot} title="Game of Thrones" subtitle="2011 | 8 Temp." />} />
                                                                                                              : slug === "GOT" ? <Seach folder={<FolderMovies locationOne="series" location="got" srcImg={CapaGot} title="Game of Thrones" subtitle="2011 | 8 Temp." />} />
                                                                                                                : slug === "got" ? <Seach folder={<FolderMovies locationOne="series" location="got" srcImg={CapaGot} title="Game of Thrones" subtitle="2011 | 8 Temp." />} />
                                                                                                                  : slug === "Game of thrones" ? <Seach folder={<FolderMovies locationOne="series" location="got" srcImg={CapaGot} title="Game of Thrones" subtitle="2011 | 8 Temp." />} />
                                                                                                                    : slug === "Game Of Thrones" ? <Seach folder={<FolderMovies locationOne="series" location="got" srcImg={CapaGot} title="Game of Thrones" subtitle="2011 | 8 Temp." />} />
                                                                                                                      : slug === "game of thrones" ? <Seach folder={<FolderMovies locationOne="series" location="got" srcImg={CapaGot} title="Game of Thrones" subtitle="2011 | 8 Temp." />} />
                                                                                                                        : slug === "GAME OF THRONES" ? <Seach folder={<FolderMovies locationOne="series" location="got" srcImg={CapaGot} title="Game of Thrones" subtitle="2011 | 8 Temp." />} />
                                                                                                                          : slug === "stranger things" ? <Seach folder={<FolderMovies locationOne="series" location="stranger-things" srcImg={CapaStrangerThings} title="Stranger Things" subtitle="2016 | 4 Temp." />} />
                                                                                                                            : slug === "Stranger things" ? <Seach folder={<FolderMovies locationOne="series" location="stranger-things" srcImg={CapaStrangerThings} title="Stranger Things" subtitle="2016 | 4 Temp." />} />
                                                                                                                              : slug === "stranger Things" ? <Seach folder={<FolderMovies locationOne="series" location="stranger-things" srcImg={CapaStrangerThings} title="Stranger Things" subtitle="2016 | 4 Temp." />} />
                                                                                                                                : slug === "STRANGER THINGS" ? <Seach folder={<FolderMovies locationOne="series" location="stranger-things" srcImg={CapaStrangerThings} title="Stranger Things" subtitle="2016 | 4 Temp." />} />
                                                                                                                                  : <SearchInvalid />
        }
      </main>
    </aside>
  )
}