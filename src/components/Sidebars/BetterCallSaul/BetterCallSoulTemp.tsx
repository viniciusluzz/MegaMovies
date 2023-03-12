import { SeasonMenu } from "../../SeasonMenu";
import FrontCover from '../../../vetores/Capa/better-call-soul-capa.jpg'
import { Episode } from "../../Episodes";

export function TemporadasBetterCallSaul() {

    return (
        <aside className="flex">
            <SeasonMenu
                title="1° Temporada"
                trueOrFalse={false}
                episode1={<Episode title="Better Call Saul" subTitle="Season 1 Episode 1" slugOne="series" slug="better-call-saul-S1E1" picture={FrontCover} focusBg="bg-gray-500" focusTitleColor="text-gray-200" />}
                episode2={<Episode title="Better Call Saul" subTitle="Season 1 Episode 2" slugOne="series" slug="better-call-saul-S1E2" picture={FrontCover} focusBg="bg-gray-500" focusTitleColor="text-gray-200" />}
                episode3={<Episode title="Better Call Saul" subTitle="Season 1 Episode 3" slugOne="series" slug="better-call-saul-S1E3" picture={FrontCover} focusBg="bg-gray-500" focusTitleColor="text-gray-200" />}
                episode4={<Episode title="Better Call Saul" subTitle="Season 1 Episode 4" slugOne="series" slug="better-call-saul-S1E4" picture={FrontCover} focusBg="bg-gray-500" focusTitleColor="text-gray-200" />}
                episode5={<Episode title="Better Call Saul" subTitle="Season 1 Episode 5" slugOne="series" slug="better-call-saul-S1E5" picture={FrontCover} focusBg="bg-gray-500" focusTitleColor="text-gray-200" />}
                episode6={<Episode title="Better Call Saul" subTitle="Season 1 Episode 6" slugOne="series" slug="better-call-saul-S1E6" picture={FrontCover} focusBg="bg-gray-500" focusTitleColor="text-gray-200" />}
                episode7={<Episode title="Better Call Saul" subTitle="Season 1 Episode 7" slugOne="series" slug="better-call-saul-S1E7" picture={FrontCover} focusBg="bg-gray-500" focusTitleColor="text-gray-200" />}
                episode8={<Episode title="Better Call Saul" subTitle="Season 1 Episode 8" slugOne="series" slug="better-call-saul-S1E8" picture={FrontCover} focusBg="bg-gray-500" focusTitleColor="text-gray-200" />}
                episode9={<Episode title="Better Call Saul" subTitle="Season 1 Episode 9" slugOne="series" slug="better-call-saul-S1E9" picture={FrontCover} focusBg="bg-gray-500" focusTitleColor="text-gray-200" />}
                episode10={<Episode title="Better Call Saul" subTitle="Season 1 Episode 10" slugOne="series" slug="better-call-saul-S1E10" picture={FrontCover} focusBg="bg-gray-500" focusTitleColor="text-gray-200" />}
            />
        </aside>
    )
}