import { Link } from "react-router-dom";

interface propsFolder{
    location: string;
    locationOne: string;
    srcImg: string;
    title: string;
    subtitle: string;
}

export function FolderMovies(props: propsFolder) {
    return (
        <aside>
            <Link to={`/${props.locationOne}/${props.location}`} className="flex flex-col lg:gap-4 bg-gray-700 rounded-xl transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-500 hover:bg-gray-400 hover:cursor-pointer ms:gap-2">
                <img className="2xl:w-[300px] 2xl:h-[350px] xl:w-[230px] xl:h-[300px] lg:w-[200px] lg:h-[230px] rounded-tl-2xl rounded-tr-2xl md:w-[130px] md:h-[150px] ml:w-[130px] ml:h-[140px] ms:w-[115px] ms:h-[125px]"
                    src={props.srcImg}
                />
                <div className="flex flex-col lg:ml-4 lg:mb-4 md:mb-2 md:ml-2 ms:mb-2 ms:ml-2">
                    <span className="xl:text-2xl lg:text-xl text-gray-200 font-bold ml:text-sm ms:text-xs">
                        {props.title}
                    </span>
                    <span className="xl:text-lg lg:text-base text-gray-300 ms:text-xs">
                        {props.subtitle}
                    </span>
                </div>
            </Link>
        </aside>
    )
}