import { Link } from "react-router-dom";
import Logo from "../vetores/logo.png";

export function Header() {
    return (
        <aside>
            <header className="flex items-center justify-center py-3 bg-gray-800">
                <Link to={`/`}>
                    <img className="w-[450px] h-[100px] md:w-[250px] md:h-[60px] ms:w-[200px] ms:h-[50px]"
                        src={Logo} />
                </Link>
            </header>
        </aside>
    )
}