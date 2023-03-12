
interface search{
    folder: any;
}

export function Seach(props: search) {
    return (
        <aside className="flex-1">
            <div className="flex flex-col lg:mx-8 md:mt-32 ms:mt-28 ms:mx-10 ms:gap-5">
                <div className="flex w-full lg:mb-8 justify-between items-center md:mb-10">
                    <span className="lg:text-2xl font-semibold text-gray-200 ms:text-lg">
                        RESULTADO DA PESQUISA:
                    </span>
                </div>
                <div className="flex">
                    {props.folder}
                </div>
            </div>
        </aside>
    )
}