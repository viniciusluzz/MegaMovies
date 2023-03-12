import { SeasonMenu } from "../../SeasonMenu";
import FrontCover from '../../../vetores/Capa/stranger-things-capa.jpg'
import { Episode } from "../../Episodes";

export function TemporadasStrangerThings() {
    return (
        <aside className="flex">
            <div className="flex flex-col gap-3 duration-700">
                <SeasonMenu
                    title="1° Temporada"
                    trueOrFalse={false}
                    episode1={<Episode
                        title="Stranger Things"
                        slug="stranger-things-S1E1"
                        slugOne="series"
                        subTitle="Season 1 Episode 1"
                        picture={FrontCover}
                        focusBg="bg-gray-500"
                        focusTitleColor="text-gray-200" />}
                    episode2={<Episode
                        title="Stranger Things"
                        slug="stranger-things-S1E2"
                        slugOne="series"
                        subTitle="Season 1 Episode 2"
                        picture={FrontCover}
                        focusBg="bg-gray-500"
                        focusTitleColor="text-gray-200" />}
                    episode3={<Episode
                        title="Stranger Things"
                        slug="stranger-things-S1E3"
                        slugOne="series"
                        subTitle="Season 1 Episode 3"
                        picture={FrontCover}
                        focusBg="bg-gray-500"
                        focusTitleColor="text-gray-200" />}
                    episode4={<Episode
                        title="Stranger Things"
                        slug="stranger-things-S1E4"
                        slugOne="series"
                        subTitle="Season 1 Episode 4"
                        picture={FrontCover}
                        focusBg="bg-gray-500"
                        focusTitleColor="text-gray-200" />}
                    episode5={<Episode
                        title="Stranger Things"
                        slug="stranger-things-S1E5"
                        slugOne="series"
                        subTitle="Season 1 Episode 5"
                        picture={FrontCover}
                        focusBg="bg-gray-500"
                        focusTitleColor="text-gray-200" />}
                    episode6={<Episode
                        title="Stranger Things"
                        slug="stranger-things-S1E6"
                        slugOne="series"
                        subTitle="Season 1 Episode 6"
                        picture={FrontCover}
                        focusBg="bg-gray-500"
                        focusTitleColor="text-gray-200" />}
                    episode7={<Episode
                        title="Stranger Things"
                        slug="stranger-things-S1E7"
                        slugOne="series"
                        subTitle="Season 1 Episode 7"
                        picture={FrontCover}
                        focusBg="bg-gray-500"
                        focusTitleColor="text-gray-200" />}
                    episode8={<Episode
                        title="Stranger Things"
                        slug="stranger-things-S1E8"
                        slugOne="series"
                        subTitle="Season 1 Episode 8"
                        picture={FrontCover}
                        focusBg="bg-gray-500"
                        focusTitleColor="text-gray-200" />}
                    episode9=""
                    episode10=""
                />
            </div>
        </aside>
    )
}