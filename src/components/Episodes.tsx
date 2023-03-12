import { Link } from 'react-router-dom'

interface Episodetype {
    title: string;
    slugOne: string;
    slug: string;
    subTitle: string;
    picture: string;
    focusBg: string;
    focusTitleColor: string;
}

export function Episode(props: Episodetype) {
    return (
        <Link to={`/${props.slugOne}/${props.slug}`} className={`flex justify-start w-full gap-8 rounded-3xl ${props.focusBg} md:mt-5 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-500 hover:bg-gray-400 hover:cursor-pointer ms:gap-0 ms:mt-3`}>
                <img
                    className=' w-[110px] h-[110px] rounded-l-3xl'
                    src={props.picture}
                />
                <main className='flex flex-col justify-around items-center ms:px-4'>
                    <div className='flex flex-col items-center'>
                        <strong className={`md:text-2xl font-bold ${props.focusTitleColor} ms:text-lg`}>
                            {props.title}
                        </strong>
                        <span className='text-sm text-gray-300'>
                            {props.subTitle}
                        </span>
                    </div>
                </main>
        </Link>
    )
}