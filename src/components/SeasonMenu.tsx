import { ArrowDown } from "phosphor-react";
import { useState } from "react";

interface SeasonType {
    title: string;
    trueOrFalse: boolean;
    episode1: any;
    episode2: any;
    episode3: any;
    episode4: any;
    episode5: any;
    episode6: any;
    episode7: any;
    episode8: any;
    episode9: any;
    episode10: any;
};

export function SeasonMenu(props: SeasonType) {
    const [open, setOpen] = useState(props.trueOrFalse);

    return (
        <aside>
            <div className="flex">
                <span
                    className={`${open ? "text-orange-500" : "text-gray-200"} ${open ? "bg-gray-400" : "bg-gray-500"} flex w-full justify-center md:mt-5 duration-500 p-2 gap-2 rounded-3xl items-center md:text-xl font-bold hover:cursor-pointer hover:text-orange-500 hover:bg-gray-400 transition-colors ms:mt-2 ms:text-base`}
                    onClick={() => setOpen(!open)}
                >
                    <div className={`${open ? "rotate-180" : "rotate-0"} duration-500`}>
                        <ArrowDown size={24} />
                    </div>
                    {props.title}
                    <span></span>
                </span>
            </div>
            <div className={`${open ? "flex" : "hidden"} duration-1000`}>
                {props.episode1}
            </div>
            <div className={`${open ? "flex" : "hidden"} duration-1000`}>
                {props.episode2}
            </div>
            <div className={`${open ? "flex" : "hidden"} duration-1000`}>
                {props.episode3}
            </div>
            <div className={`${open ? "flex" : "hidden"} duration-1000`}>
                {props.episode4}
            </div>
            <div className={`${open ? "flex" : "hidden"} duration-1000`}>
                {props.episode5}
            </div>
            <div className={`${open ? "flex" : "hidden"} duration-1000`}>
                {props.episode6}
            </div>
            <div className={`${open ? "flex" : "hidden"} duration-1000`}>
                {props.episode7}
            </div>
            <div className={`${open ? "flex" : "hidden"} duration-1000`}>
                {props.episode8}
            </div>
            <div className={`${open ? "flex" : "hidden"} duration-1000`}>
                {props.episode9}
            </div>
            <div className={`${open ? "flex" : "hidden"} duration-1000`}>
                {props.episode10}
            </div>
        </aside>
    )
}